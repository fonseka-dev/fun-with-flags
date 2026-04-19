"use client";

import { useEffect, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useAuth } from "@/lib/providers/AuthProvider";
import {
  getTopLeaderboard,
  getLeaderboardCount,
  getUserRank,
} from "@/lib/firebase";
import type { LeaderboardEntry } from "@/data/types";
import { PodiumSection } from "./PodiumSection";
import { PersonalProgressCard } from "./PersonalProgressCard";
import { LeaderboardList } from "./LeaderboardList";

const PAGE_SIZE = 10;

export function WorldRankingsContent() {
  const t = useTranslations("leaderboard");
  const { progress, uid } = useAuth();

  const [topEntries, setTopEntries] = useState<LeaderboardEntry[]>([]);
  const [listEntries, setListEntries] = useState<LeaderboardEntry[]>([]);
  const [userRank, setUserRank] = useState(0);
  const [total, setTotal] = useState(0);
  const [nextRankScore, setNextRankScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [lastScore, setLastScore] = useState<number | undefined>(undefined);

  const highScore = progress?.quizHighScore ?? 0;

  // Initial load
  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const [top, count, rank] = await Promise.all([
          getTopLeaderboard(50),
          getLeaderboardCount(),
          getUserRank(highScore),
        ]);

        setTopEntries(top.slice(0, 3));
        setListEntries(top.slice(3, 3 + PAGE_SIZE));
        setTotal(count);
        setUserRank(rank);

        // Find the score of the person just above the user
        if (rank > 1 && top.length >= rank - 1) {
          setNextRankScore(top[rank - 2]?.quizHighScore ?? null);
        } else {
          setNextRankScore(null);
        }

        setHasMore(top.length > 3 + PAGE_SIZE);
        if (top.length > 0) {
          setLastScore(top[top.length - 1].quizHighScore);
        }
      } finally {
        setLoading(false);
      }
    }
    void load();
  }, [highScore]);

  const handleLoadMore = useCallback(async () => {
    if (loadingMore || !hasMore || lastScore === undefined) return;
    setLoadingMore(true);
    try {
      const more = await getTopLeaderboard(PAGE_SIZE, lastScore);
      setListEntries((prev) => [...prev, ...more]);
      setHasMore(more.length === PAGE_SIZE);
      if (more.length > 0) {
        setLastScore(more[more.length - 1].quizHighScore);
      }
    } finally {
      setLoadingMore(false);
    }
  }, [loadingMore, hasMore, lastScore]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <span className="material-symbols-outlined text-primary text-4xl animate-spin">
          progress_activity
        </span>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-on-surface mb-4 tracking-tight">
          {t("title")}
        </h1>
        <p className="text-on-surface-variant text-lg">{t("subtitle")}</p>
      </div>

      {/* Top 3 Podium */}
      <PodiumSection entries={topEntries} />

      {/* Personal Progress */}
      <PersonalProgressCard
        rank={userRank}
        score={highScore}
        nextRankScore={nextRankScore}
        total={total}
      />

      {/* Ranked List (ranks 4+) */}
      <LeaderboardList
        entries={listEntries}
        startRank={4}
        currentUid={uid}
        onLoadMore={handleLoadMore}
        hasMore={hasMore}
        loading={loadingMore}
      />

      {/* Play Again */}
      <div className="mt-16 text-center">
        <Link
          href="/games/guess-the-flag"
          className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-on-primary rounded-full font-bold text-base shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            sports_esports
          </span>
          {t("playAgain")}
        </Link>
      </div>
    </div>
  );
}
