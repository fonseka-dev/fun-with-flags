"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useAuth } from "@/lib/providers/AuthProvider";
import { AvatarPicker } from "@/components/auth/AvatarPicker";
import { avatarUrl } from "@/data/types";
import type { InsigniaId } from "@/data/types";
import { INSIGNIAS } from "@/lib/utils/insignias";
import { getRankTier, getXpToNextRank, TIER_THRESHOLDS } from "@/lib/utils/rankings";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const TIER_ORDER = [
  "novice",
  "explorer",
  "pathfinder",
  "scholar",
  "grandmaster",
] as const;

type TierName = (typeof TIER_ORDER)[number];

const TIER_CONFIG: Record<TierName, { icon: string; bgClass: string; textClass: string }> = {
  novice: { icon: "explore", bgClass: "bg-surface-container-high", textClass: "text-on-surface-variant" },
  explorer: { icon: "public", bgClass: "bg-secondary-container", textClass: "text-on-secondary-container" },
  pathfinder: { icon: "navigation", bgClass: "bg-primary-container", textClass: "text-on-primary-container" },
  scholar: { icon: "school", bgClass: "bg-tertiary-container", textClass: "text-on-tertiary-container" },
  grandmaster: { icon: "workspace_premium", bgClass: "bg-tertiary-fixed", textClass: "text-on-tertiary-fixed" },
};

export function ProfileDialog({ isOpen, onClose }: Props) {
  const t = useTranslations("profile");
  const tTiers = useTranslations("leaderboard.rankTiers");
  const tAuth = useTranslations("auth");
  const tQuiz = useTranslations("quiz");
  const { nickname, avatarSeed, progress, loading: authLoading, updateAvatarSeed, signOut, lastGameInsignias } = useAuth();

  const [changingAvatar, setChangingAvatar] = useState(false);
  const [pendingSeed, setPendingSeed] = useState(avatarSeed);
  const [saving, setSaving] = useState(false);

  if (!isOpen) return null;

  async function handleSaveAvatar() {
    setSaving(true);
    try {
      await updateAvatarSeed(pendingSeed);
      setChangingAvatar(false);
    } finally {
      setSaving(false);
    }
  }

  function handleCancel() {
    setPendingSeed(avatarSeed);
    setChangingAvatar(false);
  }

  // Rank tier progression
  const score = progress?.quizHighScore ?? 0;
  const currentTier = getRankTier(score);
  const currentTierIndex = TIER_ORDER.indexOf(currentTier);
  const xpToNext = getXpToNextRank(score);
  const isGrandmaster = currentTier === "grandmaster";
  const currentMin = TIER_THRESHOLDS[currentTier];
  const nextTier = !isGrandmaster ? TIER_ORDER[currentTierIndex + 1] : null;
  const nextMin = nextTier ? TIER_THRESHOLDS[nextTier] : null;
  const progressPercent = isGrandmaster
    ? 100
    : nextMin !== null
    ? Math.min(100, Math.round(((score - currentMin) / (nextMin - currentMin)) * 100))
    : 0;

  // Badge counts
  const badgeCounts = (progress?.earnedInsignias ?? []).reduce<Map<InsigniaId, number>>(
    (map, id) => map.set(id, (map.get(id) ?? 0) + 1),
    new Map(),
  );
  const earnedBadgeIds = Array.from(badgeCounts.keys());

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-label={t("title")}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-surface-container-lowest rounded-3xl p-6 w-full max-w-sm shadow-2xl space-y-5 max-h-[90dvh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-on-surface">{t("title")}</h2>
          <button
            type="button"
            aria-label={t("close")}
            onClick={onClose}
            className="text-on-surface-variant hover:text-on-surface transition"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Avatar */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary bg-surface-variant">
            <Image
              src={avatarUrl(changingAvatar ? pendingSeed : avatarSeed)}
              alt={nickname}
              width={96}
              height={96}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>

          {changingAvatar ? (
            <div className="w-full space-y-3">
              <AvatarPicker selected={pendingSeed} onSelect={setPendingSeed} />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 py-2 rounded-xl border border-outline-variant text-on-surface text-sm font-medium hover:bg-surface-variant transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveAvatar}
                  disabled={saving}
                  className="flex-1 py-2 rounded-xl bg-primary text-on-primary text-sm font-semibold hover:bg-primary/90 transition disabled:opacity-50"
                >
                  {saving ? "Saving…" : "Save"}
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                setPendingSeed(avatarSeed);
                setChangingAvatar(true);
              }}
              className="text-sm text-primary font-semibold hover:underline"
            >
              {t("changeAvatar")}
            </button>
          )}
        </div>

        {/* Nickname */}
        <div className="bg-surface-variant rounded-2xl px-4 py-3 flex items-center gap-3">
          <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
            person
          </span>
          <p className="font-semibold text-on-surface">{nickname}</p>
        </div>

        {/* Rank Tier Progression */}
        <div className="bg-surface-variant rounded-2xl px-4 py-4 space-y-3">
          {/* Tier bubbles */}
          <div className="flex items-center justify-between gap-1">
            {TIER_ORDER.map((tier, idx) => {
              const cfg = TIER_CONFIG[tier];
              const isPast = idx < currentTierIndex;
              const isCurrent = idx === currentTierIndex;
              const isFuture = idx > currentTierIndex;
              return (
                <div key={tier} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className={[
                      "rounded-full flex items-center justify-center transition-all",
                      isCurrent
                        ? `w-10 h-10 ring-2 ring-primary ring-offset-1 ring-offset-surface-variant ${cfg.bgClass}`
                        : "w-8 h-8",
                      isPast ? cfg.bgClass : "",
                      isFuture ? "bg-surface-container-highest opacity-40" : "",
                    ].join(" ")}
                    title={tTiers(tier)}
                  >
                    <span
                      className={[
                        "material-symbols-outlined",
                        isCurrent ? "text-[18px]" : "text-[14px]",
                        isCurrent || isPast ? cfg.textClass : "text-on-surface-variant",
                      ].join(" ")}
                      style={{ fontVariationSettings: isCurrent || isPast ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      {cfg.icon}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fill bar */}
          <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Labels */}
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-on-surface-variant">
              {tTiers(currentTier)}
            </span>
            {isGrandmaster ? (
              <span className="text-xs font-semibold text-tertiary">
                {t("maxTierReached")}
              </span>
            ) : nextTier ? (
              <span className="text-xs text-on-surface-variant">
                {t("pointsToNextTier", { xp: xpToNext.toLocaleString(), tier: tTiers(nextTier) })}
              </span>
            ) : null}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="bg-surface-variant rounded-2xl py-3">
            <p className="text-xl font-bold text-on-surface">
              {authLoading ? "—" : (progress?.discoveredCountries.length ?? 0)}
            </p>
            <p className="text-xs text-on-surface-variant">{t("flagsFound")}</p>
          </div>
          <div className="bg-surface-variant rounded-2xl py-3">
            <p className="text-xl font-bold text-on-surface">
              {authLoading ? "—" : (progress?.quizGamesPlayed ?? 0)}
            </p>
            <p className="text-xs text-on-surface-variant">{t("gamesPlayed")}</p>
          </div>
        </div>

        {/* Badges */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-on-surface">{t("badgesTitle")}</p>
          {!authLoading && earnedBadgeIds.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-4 text-center">
              <span
                className="material-symbols-outlined text-on-surface-variant opacity-30 text-4xl"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                workspace_premium
              </span>
              <p className="text-xs text-on-surface-variant">{t("noBadgesYet")}</p>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {earnedBadgeIds.map((id) => {
                const insignia = INSIGNIAS[id];
                const count = badgeCounts.get(id) ?? 1;
                const isNew = lastGameInsignias.includes(id);
                return (
                  <div
                    key={id}
                    className={[
                      "bg-surface-container-high rounded-2xl px-3 py-2 flex items-center gap-2",
                      isNew ? "animate-insignia-pop" : "",
                    ].join(" ")}
                  >
                    <span
                      className={`material-symbols-outlined text-[18px] ${insignia.colorClass}`}
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {insignia.icon}
                    </span>
                    <span className="text-xs font-medium text-on-surface">
                      {tQuiz(insignia.labelKey)}
                    </span>
                    {count > 1 && (
                      <span className="bg-primary text-on-primary rounded-full text-[10px] font-bold px-1.5 py-0.5 leading-none">
                        ×{count}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Sign out */}
        <button
          type="button"
          onClick={signOut}
          className="w-full text-center text-sm text-on-surface-variant hover:text-error transition"
        >
          {tAuth("signOut")}
        </button>
      </div>
    </div>
  );
}
