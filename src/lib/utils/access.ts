import type { UserTier } from "@/data/types";

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
 * UI-layer feature gate. Returns true if `tier` can access `feature`.
 *
 * This controls visibility only — Firestore security rules independently
 * enforce tier restrictions on the backend. NEVER rely on this check alone
 * to protect sensitive data or API routes.
 *
 * This is the single source of truth for all feature-gate UI logic.
 */
export function hasAccess(tier: UserTier, feature: Feature): boolean {
  return FEATURE_TIERS[feature].includes(tier);
}
