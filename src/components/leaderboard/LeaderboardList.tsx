import type { LeaderboardEntry } from "@/data/types";
import { avatarUrl } from "@/data/types";
import { getRankTier } from "@/lib/utils/rankings";
import { RankTierBadge } from "./RankTierBadge";
import { useTranslations } from "next-intl";

type LeaderboardListProps = {
  entries: LeaderboardEntry[];
  startRank: number; // rank of entries[0] (e.g., 4 when podium shows 1-3)
  currentUid: string | null;
  onLoadMore: () => void;
  hasMore: boolean;
  loading: boolean;
};

export function LeaderboardList({
  entries,
  startRank,
  currentUid,
  onLoadMore,
  hasMore,
  loading,
}: LeaderboardListProps) {
  const t = useTranslations("leaderboard");

  if (entries.length === 0) return null;

  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden">
      {/* Header */}
      <div className="p-6 flex justify-between items-center bg-surface-container-low">
        <h4 className="font-bold text-on-surface">{t("topExplorers")}</h4>
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
          {t("allTime")}
        </span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-outline-variant/10">
        {entries.map((entry, i) => {
          const rank = startRank + i;
          const isCurrentUser = entry.uid === currentUid;

          return (
            <div
              key={entry.uid}
              className={`flex items-center justify-between p-5 transition-colors ${
                isCurrentUser
                  ? "bg-primary/5 border-y border-primary/20"
                  : "bg-surface-container-lowest hover:bg-surface-container"
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`font-black w-8 text-center ${isCurrentUser ? "text-primary" : "text-on-surface-variant"}`}
                >
                  {rank}
                </span>
                <div
                  className={`w-12 h-12 rounded-full overflow-hidden ${isCurrentUser ? "border-2 border-primary" : ""}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={avatarUrl(entry.avatarSeed)}
                    alt={entry.nickname}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span
                    className={`font-bold text-sm ${isCurrentUser ? "text-primary" : "text-on-surface"}`}
                  >
                    {isCurrentUser ? `${entry.nickname} (You)` : entry.nickname}
                  </span>
                  <RankTierBadge tier={getRankTier(entry.quizHighScore)} size="sm" />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <span className="font-black text-primary">
                  {entry.quizHighScore.toLocaleString()}
                </span>
                <span
                  className="material-symbols-outlined text-sm"
                  style={
                    isCurrentUser
                      ? { fontVariationSettings: "'FILL' 1", color: "var(--color-primary)" }
                      : { color: "var(--color-on-surface-variant)" }
                  }
                >
                  stars
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="p-6 text-center">
          <button
            onClick={onLoadMore}
            disabled={loading}
            className="px-8 py-3 bg-primary text-on-primary rounded-full font-bold text-sm hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
          >
            {loading ? "Loading..." : t("loadMore")}
          </button>
        </div>
      )}
    </div>
  );
}
