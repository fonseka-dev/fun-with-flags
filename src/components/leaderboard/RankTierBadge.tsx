import type { RankTier } from "@/data/types";
import { useTranslations } from "next-intl";

const TIER_CONFIG: Record<
  RankTier,
  { icon: string; bgClass: string; textClass: string }
> = {
  novice: {
    icon: "explore",
    bgClass: "bg-surface-container-high",
    textClass: "text-on-surface-variant",
  },
  explorer: {
    icon: "public",
    bgClass: "bg-secondary-container",
    textClass: "text-on-secondary-container",
  },
  pathfinder: {
    icon: "navigation",
    bgClass: "bg-primary-container",
    textClass: "text-on-primary-container",
  },
  scholar: {
    icon: "school",
    bgClass: "bg-tertiary-container",
    textClass: "text-on-tertiary-container",
  },
  grandmaster: {
    icon: "workspace_premium",
    bgClass: "bg-tertiary-fixed",
    textClass: "text-on-tertiary-fixed",
  },
};

type RankTierBadgeProps = {
  tier: RankTier;
  size?: "sm" | "md";
};

export function RankTierBadge({ tier, size = "md" }: RankTierBadgeProps) {
  const t = useTranslations("leaderboard.rankTiers");
  const { icon, bgClass, textClass } = TIER_CONFIG[tier];

  const sizeClasses =
    size === "sm"
      ? "text-[10px] px-2 py-0.5 gap-1"
      : "text-xs px-3 py-1 gap-1.5";
  const iconSize = size === "sm" ? "text-sm" : "text-base";

  return (
    <span
      className={`inline-flex items-center rounded-full font-bold uppercase tracking-wide ${bgClass} ${textClass} ${sizeClasses}`}
    >
      <span
        className={`material-symbols-outlined ${iconSize}`}
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {icon}
      </span>
      {t(tier)}
    </span>
  );
}
