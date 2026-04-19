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
  saveQuizResult as saveQuizResultToDb,
  completeOnboarding,
  updateAvatar,
  generatePseudonym,
  upsertLeaderboardEntry,
} from "@/lib/firebase";
import type { UserProgress, UserTier, InsigniaId } from "@/data/types";
import { avatarUrl as deriveAvatarUrl } from "@/data/types";
import { hasAccess as checkAccess } from "@/lib/utils/access";
import type { Feature } from "@/lib/utils/access";

type AuthContextValue = {
  user: User | null;
  uid: string | null;
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
  saveQuizResult: (score: number, insignias: InsigniaId[], correctInGame: number) => Promise<void>;
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
        // Backfill leaderboard for existing users who played before this feature
        if (data && data.quizHighScore > 0) {
          void upsertLeaderboardEntry(
            firebaseUser.uid,
            data.nickname ?? generatePseudonym(firebaseUser.uid),
            data.avatarSeed ?? firebaseUser.uid,
            data.quizHighScore,
          );
        }
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
      if (data && data.quizHighScore > 0) {
        void upsertLeaderboardEntry(
          updatedUser.uid,
          data.nickname ?? generatePseudonym(updatedUser.uid),
          data.avatarSeed ?? updatedUser.uid,
          data.quizHighScore,
        );
      }
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

  const saveQuizResult = useCallback(
    async (score: number, insignias: InsigniaId[], correctInGame: number) => {
      if (!user) return;
      await saveQuizResultToDb(user.uid, score, insignias, correctInGame);
      setProgress((prev) => {
        if (!prev) return prev;
        const newHighScore = score > prev.quizHighScore ? score : prev.quizHighScore;
        // Sync leaderboard entry with updated high score
        void upsertLeaderboardEntry(
          user.uid,
          prev.nickname,
          prev.avatarSeed,
          newHighScore,
        );
        return {
          ...prev,
          quizGamesPlayed: prev.quizGamesPlayed + 1,
          quizHighScore: newHighScore,
          totalCorrectAnswers: (prev.totalCorrectAnswers ?? 0) + correctInGame,
          earnedInsignias: [
            ...(prev.earnedInsignias ?? []),
            ...insignias,
          ],
        };
      });
    },
    [user],
  );

  const completeOnboardingFlow = useCallback(
    async (newNickname: string, newAvatarSeed: string) => {
      if (!user) return;
      await completeOnboarding(user.uid, newNickname, newAvatarSeed);
      setProgress((prev) => {
        if (!prev) return prev;
        // Sync leaderboard entry with new nickname and avatar
        void upsertLeaderboardEntry(
          user.uid,
          newNickname,
          newAvatarSeed,
          prev.quizHighScore,
        );
        return { ...prev, nickname: newNickname, avatarSeed: newAvatarSeed, onboardingComplete: true };
      });
    },
    [user],
  );

  const updateAvatarSeed = useCallback(
    async (newSeed: string) => {
      if (!user) return;
      await updateAvatar(user.uid, newSeed);
      setProgress((prev) => {
        if (!prev) return prev;
        // Sync leaderboard entry with new avatar
        void upsertLeaderboardEntry(
          user.uid,
          prev.nickname,
          newSeed,
          prev.quizHighScore,
        );
        return { ...prev, avatarSeed: newSeed };
      });
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
        uid: user?.uid ?? null,
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
        saveQuizResult,
        completeOnboardingFlow,
        updateAvatarSeed,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
