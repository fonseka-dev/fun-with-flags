"use client";

import { useEffect, useState, useCallback } from "react";
import {
  isFirebaseConfigured,
  signInAnonymouslyIfNeeded,
  getUserProgress,
  initUserProgress,
  addDiscoveredCountry,
  updateQuizScore,
} from "@/lib/firebase";
import { UserProgress } from "@/data/types";

export function useUserProgress() {
  const [uid, setUid] = useState<string | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Firebase not configured — skip silently, app works without it
    if (!isFirebaseConfigured()) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function init() {
      try {
        const user = await signInAnonymouslyIfNeeded();
        if (cancelled) return;
        setUid(user.uid);
        await initUserProgress(user.uid);
        const data = await getUserProgress(user.uid);
        if (cancelled) return;
        setProgress(data);
      } catch {
        // Progress tracking unavailable — app still works
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    init();
    return () => {
      cancelled = true;
    };
  }, []);

  const discoverCountry = useCallback(
    async (slug: string) => {
      if (!uid) return;
      await addDiscoveredCountry(uid, slug);
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
    [uid],
  );

  const saveQuizScore = useCallback(
    async (score: number) => {
      if (!uid) return;
      await updateQuizScore(uid, score);
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
    [uid],
  );

  return {
    uid,
    progress,
    loading,
    discoverCountry,
    saveQuizScore,
  };
}
