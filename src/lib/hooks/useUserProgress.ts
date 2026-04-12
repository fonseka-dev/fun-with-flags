"use client";

import { useAuth } from "@/lib/providers/AuthProvider";

/**
 * Convenience wrapper around useAuth() for components that only need progress.
 * Prefer useAuth() directly in new components.
 */
export function useUserProgress() {
  const { user, progress, loading, discoverCountry, saveQuizScore } = useAuth();
  return {
    uid: user?.uid ?? null,
    progress,
    loading,
    discoverCountry,
    saveQuizScore,
  };
}
