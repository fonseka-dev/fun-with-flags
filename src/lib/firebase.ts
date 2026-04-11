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
} from "firebase/firestore";
import { UserProgress } from "@/data/types";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);

export async function signInAnonymouslyIfNeeded(): Promise<User> {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      if (user) {
        resolve(user);
      } else {
        signInAnonymously(auth)
          .then((cred) => resolve(cred.user))
          .catch(reject);
      }
    });
  });
}

export async function getUserProgress(
  uid: string,
): Promise<UserProgress | null> {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return snap.data() as UserProgress;
}

export async function initUserProgress(uid: string): Promise<void> {
  const ref = doc(db, "users", uid);
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
  const ref = doc(db, "users", uid);
  await updateDoc(ref, {
    discoveredCountries: arrayUnion(slug),
    lastPlayedAt: serverTimestamp(),
  });
}

export async function updateQuizScore(
  uid: string,
  score: number,
): Promise<void> {
  const ref = doc(db, "users", uid);
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
