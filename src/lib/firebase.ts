import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
  type User,
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

export async function initUserProgress(uid: string): Promise<void> {
  const ref = doc(getDbClient(), "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      uid,
      discoveredCountries: [],
      quizHighScore: 0,
      quizGamesPlayed: 0,
      lastPlayedAt: serverTimestamp(),
    });
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
