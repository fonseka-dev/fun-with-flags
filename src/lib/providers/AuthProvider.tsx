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
  completeOnboarding,
  updateAvatar,
  generatePseudonym,
} from "@/lib/firebase";
import type { UserProgress, UserTier } from "@/data/types";
import { avatarUrl as deriveAvatarUrl } from "@/data/types";
import { hasAccess as checkAccess } from "@/lib/utils/access";
import type { Feature } from "@/lib/utils/access";

type AuthContextValue = {
  user: User | null;
  progress: UserProgress | null;
  loading: boolean;
  isAnonymous: boolean;
  nickname: string;
  avatarSeed: string;
  avatarUrl: string;
  needsOnboarding: boolean;
  tier: UserTier;
  hasAccess: (feature: Feature) => boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  discoverCountry: (slug: string) => Promise<void>;
  saveQuizScore: (score: number) => Promise<void>;
  completeOnboardingFlow: (nickname: string, avatarSeed: string) => Promise<void>;
  updateAvatarSeed: (avatarSeed: string) => Promise<void>;
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
        });
        const data = await getUserProgress(firebaseUser.uid);
        setProgress(data);
      } catch (err: unknown) {
        // Auth or Firestore unavailable — app still works without progress data
        console.warn("[Auth] onAuthStateChanged handler error:", err);
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
      console.warn("[Auth] linkAnonymousWithGoogle error:", error.code);
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

  const completeOnboardingFlow = useCallback(
    async (newNickname: string, newAvatarSeed: string) => {
      if (!user) return;
      await completeOnboarding(user.uid, newNickname, newAvatarSeed);
      setProgress((prev) =>
        prev
          ? { ...prev, nickname: newNickname, avatarSeed: newAvatarSeed, onboardingComplete: true }
          : prev,
      );
    },
    [user],
  );

  const updateAvatarSeed = useCallback(
    async (newSeed: string) => {
      if (!user) return;
      await updateAvatar(user.uid, newSeed);
      setProgress((prev) =>
        prev ? { ...prev, avatarSeed: newSeed } : prev,
      );
    },
    [user],
  );

  const isAnonymous = user?.isAnonymous ?? true;
  const nickname = progress?.nickname ?? (user ? generatePseudonym(user.uid) : "Explorer");
  const avatarSeed = progress?.avatarSeed ?? (user?.uid ?? "explorer");
  const avatarUrlValue = deriveAvatarUrl(avatarSeed);
  const needsOnboarding = !isAnonymous && !(progress?.onboardingComplete ?? false);

  const tier: UserTier = progress?.tier ?? "free";
  const hasAccessFn = useCallback(
    (feature: Feature) => checkAccess(tier, feature),
    [tier],
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        progress,
        loading,
        isAnonymous,
        nickname,
        avatarSeed,
        avatarUrl: avatarUrlValue,
        needsOnboarding,
        tier,
        hasAccess: hasAccessFn,
        signInWithGoogle,
        signOut: handleSignOut,
        discoverCountry,
        saveQuizScore,
        completeOnboardingFlow,
        updateAvatarSeed,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
