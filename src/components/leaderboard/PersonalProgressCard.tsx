"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getRankTier, getMotivationKey, getXpToNextRank, TIER_THRESHOLDS } from "@/lib/utils/rankings";
import { RankTierBadge } from "./RankTierBadge";

type PersonalProgressCardProps = {
  rank: number; // 0 = no score yet
  score: number;
  nextRankScore: number | null; // score of the person just ahead (null at rank 1 or no one ahead)
  total: number; // total players on leaderboard
};

export function PersonalProgressCard({
  rank,
  score,
  nextRankScore,
  total,
}: PersonalProgressCardProps) {
  const t = useTranslations("leaderboard");

  const hasScore = score > 0;
  const isFirst = rank === 1;
  const tier = hasScore ? getRankTier(score) : "novice";
  const motivationSubKey = getMotivationKey(rank, total);
  const xpToNext = getXpToNextRank(score);

  // Progress bar fill % toward the next tier threshold
  const tiers = ["novice", "explorer", "pathfinder", "scholar", "grandmaster"] as const;
  const tierIndex = tiers.indexOf(tier);
  const currentMin = TIER_THRESHOLDS[tier];
  const nextMin = tierIndex < tiers.length - 1 ? TIER_THRESHOLDS[tiers[tierIndex + 1]] : null;
  const progressPercent =
    isFirst || nextMin === null
      ? 100
      : Math.min(100, Math.round(((score - currentMin) / (nextMin - currentMin)) * 100));

  if (!hasScore) {
    return (
      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 mb-12 shadow-xl shadow-primary/10 text-center">
        <span
          className="material-symbols-outlined text-on-primary text-4xl mb-3 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          leaderboard
        </span>
        <p className="text-on-primary font-bold text-lg mb-4">
          {t("motivation.noScore")}
        </p>
        <Link
          href="/games/guess-the-flag"
          className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all"
        >
          {t("playNow")}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 mb-12 shadow-xl shadow-primary/10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <span className="material-symbols-outlined text-9xl text-white">explore</span>
      </div>

      {/* Rank + Message */}
      <div className="flex items-center gap-6 relative z-10">
        <div className="bg-white/20 backdrop-blur-md rounded-2xl w-20 h-20 flex flex-col items-center justify-center text-white shrink-0">
          <span className="text-[10px] font-bold uppercase">{t("yourRank")}</span>
          <span className="text-3xl font-black">#{rank}</span>
        </div>
        <div className="text-white">
          <p className="text-xl font-bold">{t(`motivation.${motivationSubKey}`)}</p>
          <div className="mt-2">
            <RankTierBadge tier={tier} />
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full md:w-1/3 relative z-10">
        <div className="flex justify-between items-end mb-2">
          <span className="text-white font-bold text-sm">{t("xpPoints", { score: score.toLocaleString() })}</span>
          {isFirst ? (
            <span className="text-white text-xs opacity-80">{t("defending")}</span>
          ) : nextRankScore != null ? (
            <span className="text-white text-xs opacity-70">
              {t("xpToNextPlayer", { xp: (nextRankScore - score).toLocaleString(), rank: rank - 1 })}
            </span>
          ) : xpToNext > 0 ? (
            <span className="text-white text-xs opacity-70">
              {t("xpToNextRank", { xp: xpToNext.toLocaleString(), tier: t(`rankTiers.${tiers[tierIndex + 1]}`) })}
            </span>
          ) : null}
        </div>
        <div className="w-full bg-white/20 h-4 rounded-full overflow-hidden">
          <div
            className="bg-tertiary-fixed h-full rounded-full transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Play Again CTA */}
      <Link
        href="/games/guess-the-flag"
        className="bg-white text-primary px-8 py-4 rounded-full font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all relative z-10 shrink-0"
      >
        {t("playAgain")}
      </Link>
    </div>
  );
}
