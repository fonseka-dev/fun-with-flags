import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  signInAnonymously,
  signInWithPopup,
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
  collection,
  getDocs,
} from "firebase/firestore";
import { UserProgress, Country, CountryBase, CountryTranslation, Locale } from "@/data/types";

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
  options?: { displayName?: string; isAnonymous?: boolean; avatarUrl?: string },
): Promise<void> {
  const ref = doc(getDbClient(), "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      uid,
      displayName: options?.displayName ?? generatePseudonym(uid),
      isAnonymous: options?.isAnonymous ?? true,
      avatarUrl: options?.avatarUrl ?? null,
      discoveredCountries: [],
      quizHighScore: 0,
      quizGamesPlayed: 0,
      lastPlayedAt: serverTimestamp(),
    });
  } else if (options?.displayName || options?.avatarUrl !== undefined) {
    const updates: Record<string, unknown> = {};
    if (options.displayName) updates.displayName = options.displayName;
    if (options.avatarUrl !== undefined) updates.avatarUrl = options.avatarUrl;
    if (options.isAnonymous !== undefined) updates.isAnonymous = options.isAnonymous;
    await updateDoc(ref, updates);
  }
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

export async function updateQuizScore(
  uid: string,
  score: number,
): Promise<void> {
  const ref = doc(getDbClient(), "users", uid);
  const progress = await getUserProgress(uid);
  const updates: Record<string, unknown> = {
    quizGamesPlayed: (progress?.quizGamesPlayed ?? 0) + 1,
    lastPlayedAt: serverTimestamp(),
  };
  if (!progress || score > progress.quizHighScore) {
    updates.quizHighScore = score;
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
    // SUCCESS — same UID, now a Google account
    const { displayName, photoURL, uid } = result.user;
    await initUserProgress(uid, {
      displayName: displayName ?? generatePseudonym(uid),
      isAnonymous: false,
      avatarUrl: photoURL ?? undefined,
    });
    return result.user;
  } catch (err: unknown) {
    const error = err as { code?: string; credential?: AuthCredential };
    if (error.code !== "auth/credential-already-in-use") throw err;

    // CREDENTIAL_ALREADY_IN_USE — anonymous progress must be merged
    const anonProgress = await getUserProgress(currentUser.uid);

    // Firebase v9+ modular SDK stores the credential at error.customData,
    // not directly on error.credential. Use the provider helper to extract it.
    const credential = GoogleAuthProvider.credentialFromError(err as Error);
    if (!credential) throw err;
    const { signInWithCredential } = await import("firebase/auth");
    const googleResult = await signInWithCredential(authInst, credential);
    const googleUid = googleResult.user.uid;

    // Always (re)create the Google user's doc in case it was deleted.
    const googleProgress = await getUserProgress(googleUid);
    const { displayName: gDisplayName, photoURL } = googleResult.user;
    await initUserProgress(googleUid, {
      displayName: gDisplayName ?? generatePseudonym(googleUid),
      isAnonymous: false,
      avatarUrl: photoURL ?? undefined,
    });
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

/** Signs out the current user. A new anonymous session is created by AuthProvider. */
export async function signOutUser(): Promise<void> {
  await signOut(getAuthClient());
}

export async function fetchAllCountries(locale: Locale): Promise<Country[]> {
  if (!isFirebaseConfigured()) return [];

  const db = getDbClient();
  const countriesSnap = await getDocs(collection(db, "countries"));

  const results: Country[] = [];
  for (const countryDoc of countriesSnap.docs) {
    const base = countryDoc.data() as CountryBase;
    const transDoc = await getDoc(
      doc(db, "countries", base.slug, "translations", locale),
    );
    if (transDoc.exists()) {
      results.push({ ...base, ...(transDoc.data() as CountryTranslation) });
    }
  }

  return results;
}
