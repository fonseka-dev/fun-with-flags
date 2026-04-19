import { initializeApp, getApps, FirebaseError } from "firebase/app";
import {
  getAuth,
  signInAnonymously,
  linkWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  type User,
  type AuthCredential,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  serverTimestamp,
  increment,
} from "firebase/firestore";
import { UserProgress, UserTier, InsigniaId } from "@/data/types";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

/** Returns true when all required Firebase env vars are present */
export function isFirebaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID &&
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID
  );
}

// Lazy initialization — Firebase must only run in the browser
function getFirebaseApp() {
  if (typeof window === "undefined") {
    throw new Error("Firebase is only available on the client");
  }
  if (!isFirebaseConfigured()) {
    throw new Error("Firebase is not configured");
  }
  return getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApps()[0];
}

export function getAuthClient() {
  return getAuth(getFirebaseApp());
}

export function getDbClient() {
  return getFirestore(getFirebaseApp());
}

/** @deprecated Use getAuthClient() — kept for backwards compat in hooks */
export const auth = null as unknown as ReturnType<typeof getAuth>;

/** @deprecated Use getDbClient() — kept for backwards compat in hooks */
export const db = null as unknown as ReturnType<typeof getFirestore>;

/**
 * Derives a deterministic "Explorer #NNNN" pseudonym from a Firebase UID.
 * Used for anonymous users in rankings. Range: 1000–9999.
 */
export function generatePseudonym(uid: string): string {
  const hex = uid.replace(/[^0-9a-f]/gi, "").slice(0, 4) || "0000";
  const num = (parseInt(hex, 16) % 9000) + 1000;
  return `Explorer #${num}`;
}

export async function signInAnonymouslyIfNeeded(): Promise<User> {
  const authInst = getAuthClient();
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(authInst, (user) => {
      unsubscribe();
      if (user) {
        resolve(user);
      } else {
        signInAnonymously(authInst)
          .then((cred) => resolve(cred.user))
          .catch(reject);
      }
    });
  });
}

export async function getUserProgress(
  uid: string,
): Promise<UserProgress | null> {
  const ref = doc(getDbClient(), "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return snap.data() as UserProgress;
}

export async function initUserProgress(
  uid: string,
  options?: { nickname?: string; isAnonymous?: boolean; avatarSeed?: string },
): Promise<void> {
  const ref = doc(getDbClient(), "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      uid,
      nickname: options?.nickname ?? generatePseudonym(uid),
      isAnonymous: options?.isAnonymous ?? true,
      avatarSeed: options?.avatarSeed ?? uid,
      onboardingComplete: false,
      tier: "free" as const,
      discoveredCountries: [],
      quizHighScore: 0,
      quizGamesPlayed: 0,
      totalCorrectAnswers: 0,
      earnedInsignias: [],
      lastPlayedAt: serverTimestamp(),
    });
  } else {
    const updates: Record<string, unknown> = {};
    if (options?.isAnonymous !== undefined) updates.isAnonymous = options.isAnonymous;
    if (Object.keys(updates).length > 0) {
      await updateDoc(ref, updates);
    }
  }
}

export async function completeOnboarding(
  uid: string,
  nickname: string,
  avatarSeed: string,
): Promise<void> {
  const ref = doc(getDbClient(), "users", uid);
  await updateDoc(ref, {
    nickname,
    avatarSeed,
    onboardingComplete: true,
  });
}

export async function updateAvatar(uid: string, avatarSeed: string): Promise<void> {
  const ref = doc(getDbClient(), "users", uid);
  await updateDoc(ref, { avatarSeed });
}

export async function addDiscoveredCountry(
  uid: string,
  slug: string,
): Promise<void> {
  const ref = doc(getDbClient(), "users", uid);
  await updateDoc(ref, {
    discoveredCountries: arrayUnion(slug),
    lastPlayedAt: serverTimestamp(),
  });
}

export async function saveQuizResult(
  uid: string,
  score: number,
  insignias: InsigniaId[],
  correctInGame: number,
): Promise<void> {
  const ref = doc(getDbClient(), "users", uid);
  const updates: Record<string, unknown> = {
    quizGamesPlayed: increment(1),
    totalCorrectAnswers: increment(correctInGame),
    lastPlayedAt: serverTimestamp(),
  };
  if (score > 0) {
    const progress = await getUserProgress(uid);
    if (!progress || score > (progress.quizHighScore ?? 0)) {
      updates.quizHighScore = score;
    }
  }
  if (insignias.length > 0) {
    updates.earnedInsignias = arrayUnion(...insignias);
  }
  await updateDoc(ref, updates);
}

const googleProvider = new GoogleAuthProvider();

/**
 * Attempts to upgrade the current anonymous session to a Google account.
 * Preferred path: linkWithPopup preserves the UID and all existing progress.
 *
 * If the Google credential is already associated with a different account
 * (CREDENTIAL_ALREADY_IN_USE), progress from the anonymous session is merged
 * into the existing Google account, then that Google account is signed in.
 */
export async function linkAnonymousWithGoogle(): Promise<User> {
  const authInst = getAuthClient();
  const currentUser = authInst.currentUser;
  if (!currentUser) throw new Error("No current user to link");

  try {
    const result = await linkWithPopup(currentUser, googleProvider);
    // SUCCESS — same UID, now a Google account. Don't pass displayName/photoURL — onboarding will set nickname/avatarSeed.
    const { uid } = result.user;
    await initUserProgress(uid, { isAnonymous: false });
    return result.user;
  } catch (err: unknown) {
    const error = err as { code?: string; credential?: AuthCredential };
    if (error.code !== "auth/credential-already-in-use") throw err;

    // CREDENTIAL_ALREADY_IN_USE — anonymous progress must be merged
    const anonProgress = await getUserProgress(currentUser.uid);

    // Firebase v9+ modular SDK stores the credential at error.customData,
    // not directly on error.credential. Use the provider helper to extract it.
    const credential = GoogleAuthProvider.credentialFromError(err as FirebaseError);
    if (!credential) throw err;
    const { signInWithCredential } = await import("firebase/auth");
    const googleResult = await signInWithCredential(authInst, credential);
    const googleUid = googleResult.user.uid;

    // Always (re)create the Google user's doc in case it was deleted.
    // Don't pass displayName/photoURL — onboarding will set nickname/avatarSeed.
    const googleProgress = await getUserProgress(googleUid);
    await initUserProgress(googleUid, { isAnonymous: false });
    if (anonProgress) {
      const mergedDiscovered = Array.from(
        new Set([
          ...(googleProgress?.discoveredCountries ?? []),
          ...anonProgress.discoveredCountries,
        ]),
      );
      const mergedHighScore = Math.max(
        googleProgress?.quizHighScore ?? 0,
        anonProgress.quizHighScore,
      );
      const ref = doc(getDbClient(), "users", googleUid);
      await updateDoc(ref, {
        discoveredCountries: mergedDiscovered,
        quizHighScore: mergedHighScore,
      });
    }

    return googleResult.user;
  }
}

/**
 * Updates a user's subscription tier in Firestore.
 * Called only by trusted backend processes (Cloud Functions / billing webhooks).
 * Client writes to `tier` are blocked by Firestore security rules.
 */
export async function updateUserTier(
  uid: string,
  tier: UserTier,
): Promise<void> {
  const ref = doc(getDbClient(), "users", uid);
  await updateDoc(ref, { tier });
}

/** Signs out the current user. A new anonymous session is created by AuthProvider. */
export async function signOutUser(): Promise<void> {
  await signOut(getAuthClient());
}


