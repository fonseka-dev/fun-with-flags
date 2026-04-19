import type { RankTier } from "@/data/types";

/** Minimum score required to enter each tier. */
export const TIER_THRESHOLDS: Record<RankTier, number> = {
  novice: 0,
  explorer: 500,
  pathfinder: 2000,
  scholar: 5000,
  grandmaster: 10000,
};

const TIER_ORDER: RankTier[] = [
  "novice",
  "explorer",
  "pathfinder",
  "scholar",
  "grandmaster",
];

/** Returns the RankTier for a given quiz high score. */
export function getRankTier(score: number): RankTier {
  let tier: RankTier = "novice";
  for (const t of TIER_ORDER) {
    if (score >= TIER_THRESHOLDS[t]) {
      tier = t;
    }
  }
  return tier;
}

/**
 * Returns how many XP points are needed to reach the next tier.
 * Returns 0 when the player is already at grandmaster.
 */
export function getXpToNextRank(score: number): number {
  const currentTier = getRankTier(score);
  const currentIndex = TIER_ORDER.indexOf(currentTier);
  if (currentIndex === TIER_ORDER.length - 1) return 0; // grandmaster
  const nextTier = TIER_ORDER[currentIndex + 1];
  return TIER_THRESHOLDS[nextTier] - score;
}

/**
 * Returns the i18n sub-key under `leaderboard.motivation` that best describes
 * the player's standing relative to the full leaderboard.
 *
 * @param rank  1-based rank (0 = unranked / no score)
 * @param total Total number of ranked players
 */
export function getMotivationKey(
  rank: number,
  total: number,
): string {
  if (rank === 0) return "noScore";
  if (rank === 1) return "rank1";
  if (rank <= 3) return "podium";
  const percentile = (rank / total) * 100;
  if (percentile <= 10) return "top10pct";
  if (percentile <= 25) return "top25pct";
  if (percentile <= 50) return "top50pct";
  return "climbing";
}
