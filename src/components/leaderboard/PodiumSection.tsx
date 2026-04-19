import type { LeaderboardEntry } from "@/data/types";
import { avatarUrl } from "@/data/types";
import { getRankTier } from "@/lib/utils/rankings";
import { RankTierBadge } from "./RankTierBadge";
import { useTranslations } from "next-intl";

type PodiumSectionProps = {
  entries: LeaderboardEntry[]; // top 3 entries ordered [1st, 2nd, 3rd]
};

type PodiumPosition = {
  entry: LeaderboardEntry;
  rank: 1 | 2 | 3;
  platformHeight: string;
  medalBg: string;
  medalText: string;
  borderColor: string;
};

export function PodiumSection({ entries }: PodiumSectionProps) {
  const t = useTranslations("leaderboard");

  if (entries.length === 0) return null;

  // Visual order: 2nd | 1st | 3rd
  const positions: PodiumPosition[] = [];

  if (entries[1]) {
    positions.push({
      entry: entries[1],
      rank: 2,
      platformHeight: "h-32",
      medalBg: "bg-slate-300",
      medalText: "text-on-surface",
      borderColor: "border-slate-300",
    });
  }
  if (entries[0]) {
    positions.push({
      entry: entries[0],
      rank: 1,
      platformHeight: "h-44",
      medalBg: "bg-amber-400",
      medalText: "text-white",
      borderColor: "border-amber-400",
    });
  }
  if (entries[2]) {
    positions.push({
      entry: entries[2],
      rank: 3,
      platformHeight: "h-24",
      medalBg: "bg-orange-400",
      medalText: "text-white",
      borderColor: "border-orange-400",
    });
  }

  return (
    <div className="flex flex-col md:flex-row items-end justify-center gap-4 lg:gap-8 mb-20">
      {positions.map(({ entry, rank, platformHeight, medalBg, medalText, borderColor }) => {
        const isFirst = rank === 1;
        const avatarSize = isFirst ? "w-32 h-32" : "w-24 h-24";
        const medalSize = isFirst ? "w-10 h-10 text-base" : "w-8 h-8 text-sm";

        return (
          <div
            key={entry.uid}
            className={`flex flex-col items-center w-full ${isFirst ? "md:w-56 z-10" : "md:w-48"}`}
          >
            {/* Avatar */}
            <div className="mb-4 relative animate-bounce">
              <div
                className={`${avatarSize} rounded-full border-4 ${borderColor} p-1 bg-surface-container-lowest shadow-xl ${isFirst ? "scale-110 shadow-2xl" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={avatarUrl(entry.avatarSeed)}
                  alt={entry.nickname}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div
                className={`absolute -top-2 -right-2 ${medalBg} ${medalText} ${medalSize} rounded-full flex items-center justify-center font-black shadow-lg`}
              >
                {rank}
              </div>
            </div>

            {/* Platform */}
            <div
              className={`w-full ${platformHeight} rounded-t-3xl flex flex-col items-center justify-center p-4 gap-2 ${isFirst ? "bg-primary-container shadow-2xl" : "bg-surface-container-low shadow-sm"}`}
            >
              <span
                className={`font-black text-sm ${isFirst ? "text-on-primary-container" : "text-on-surface"}`}
              >
                {entry.nickname}
              </span>
              <span
                className={`font-black ${isFirst ? "text-2xl text-on-primary-container" : "text-lg text-primary"}`}
              >
                {entry.quizHighScore.toLocaleString()}
              </span>
              <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">
                {t("pointsLabel")}
              </span>
              <RankTierBadge tier={getRankTier(entry.quizHighScore)} size="sm" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
