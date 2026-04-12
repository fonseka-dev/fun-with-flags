"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import {
  isFirebaseConfigured,
  getAuthClient,
  signInAnonymouslyIfNeeded,
  getUserProgress,
  initUserProgress,
  linkAnonymousWithGoogle,
  signOutUser,
  addDiscoveredCountry,
  updateQuizScore,
} from "@/lib/firebase";
import type { UserProgress } from "@/data/types";

type AuthContextValue = {
  user: User | null;
  progress: UserProgress | null;
  loading: boolean;
  isAnonymous: boolean;
  displayName: string;
  avatarUrl: string | null;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  discoverCountry: (slug: string) => Promise<void>;
  saveQuizScore: (score: number) => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isFirebaseConfigured()) {
      setLoading(false);
      return;
    }

    const authInst = getAuthClient();

    const unsubscribe = onAuthStateChanged(authInst, async (firebaseUser) => {
      try {
        if (!firebaseUser) {
          // No user — sign in anonymously
          await signInAnonymouslyIfNeeded();
          // onAuthStateChanged will fire again with the new anonymous user
          return;
        }
        setUser(firebaseUser);
        await initUserProgress(firebaseUser.uid, {
          isAnonymous: firebaseUser.isAnonymous,
          ...(firebaseUser.displayName
            ? { displayName: firebaseUser.displayName }
            : {}),
          ...(firebaseUser.photoURL !== undefined
            ? { avatarUrl: firebaseUser.photoURL ?? undefined }
            : {}),
        });
        const data = await getUserProgress(firebaseUser.uid);
        setProgress(data);
      } catch {
        // Auth unavailable — app still works
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const signInWithGoogle = useCallback(async () => {
    if (!isFirebaseConfigured()) return;
    try {
      const updatedUser = await linkAnonymousWithGoogle();
      setUser(updatedUser);
      const data = await getUserProgress(updatedUser.uid);
      setProgress(data);
    } catch (err: unknown) {
      const error = err as { code?: string };
      if (error.code === "auth/popup-closed-by-user") return;
      if (error.code === "auth/cancelled-popup-request") return;
      if (error.code === "auth/popup-blocked") return;
      console.error("[Auth] linkAnonymousWithGoogle error:", error.code);
      throw err;
    }
  }, []);

  const handleSignOut = useCallback(async () => {
    if (!isFirebaseConfigured()) return;
    await signOutUser();
    setProgress(null);
    // onAuthStateChanged will fire → new anonymous user created automatically
  }, []);

  const discoverCountry = useCallback(
    async (slug: string) => {
      if (!user) return;
      await addDiscoveredCountry(user.uid, slug);
      setProgress((prev) =>
        prev
          ? {
              ...prev,
              discoveredCountries: prev.discoveredCountries.includes(slug)
                ? prev.discoveredCountries
                : [...prev.discoveredCountries, slug],
            }
          : prev,
      );
    },
    [user],
  );

  const saveQuizScore = useCallback(
    async (score: number) => {
      if (!user) return;
      await updateQuizScore(user.uid, score);
      setProgress((prev) =>
        prev
          ? {
              ...prev,
              quizGamesPlayed: prev.quizGamesPlayed + 1,
              quizHighScore: Math.max(prev.quizHighScore, score),
            }
          : prev,
      );
    },
    [user],
  );

  const isAnonymous = user?.isAnonymous ?? true;
  // Prefer the authoritative Firebase Auth values for logged-in users: they are
  // updated synchronously when setUser() is called and avoid a race with the
  // Firestore getUserProgress() read that populates `progress`.
  const displayName = (!isAnonymous && user?.displayName)
    ? user.displayName
    : (progress?.displayName ?? (user ? "Explorer" : ""));
  const avatarUrl = (!isAnonymous && user?.photoURL)
    ? user.photoURL
    : (progress?.avatarUrl ?? null);

  return (
    <AuthContext.Provider
      value={{
        user,
        progress,
        loading,
        isAnonymous,
        displayName,
        avatarUrl,
        signInWithGoogle,
        signOut: handleSignOut,
        discoverCountry,
        saveQuizScore,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
