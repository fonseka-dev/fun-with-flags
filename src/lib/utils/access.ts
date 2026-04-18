import type { UserTier } from "@/data/types";

export type { UserTier };

export type Feature = "advancedQuiz" | "leaderboard";

/**
 * Maps each feature to the tiers that can access it.
 * To add a new gate: add one entry here. Never check tier directly in components.
 */
export const FEATURE_TIERS: Record<Feature, UserTier[]> = {
  advancedQuiz: ["premium"],
  leaderboard: ["free", "premium"],
};

/**
 * Returns true if the given tier has access to the given feature.
 * This is the single source of truth for all feature-gate logic.
 */
export function hasAccess(tier: UserTier, feature: Feature): boolean {
  return FEATURE_TIERS[feature].includes(tier);
}
