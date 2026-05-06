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
  const { progress, uid, loading: authLoading } = useAuth();

  const [topEntries, setTopEntries] = useState<LeaderboardEntry[]>([]);
  const [listEntries, setListEntries] = useState<LeaderboardEntry[]>([]);
  const [userRank, setUserRank] = useState(0);
  const [total, setTotal] = useState(0);
  const [nextRankScore, setNextRankScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [lastScore, setLastScore] = useState<number | undefined>(undefined);
  const [fetchError, setFetchError] = useState(false);

  const highScore = progress?.quizHighScore ?? 0;

  // Effect A — public leaderboard data (no auth dependency, runs once on mount).
  // Fetching top entries and total count is safe without auth since the leaderboard
  // collection is publicly readable. This avoids any race with Firebase auth init.
  useEffect(() => {
    let cancelled = false;
    async function loadPublic() {
      setLoading(true);
      setFetchError(false);
      try {
        const [top, count] = await Promise.all([
          getTopLeaderboard(50),
          getLeaderboardCount(),
        ]);
        if (cancelled) return;
        setTopEntries(top.slice(0, 3));
        setListEntries(top.slice(3, 3 + PAGE_SIZE));
        setTotal(count);
        setHasMore(top.length > 3 + PAGE_SIZE);
        if (top.length > 0) {
          setLastScore(top[top.length - 1].quizHighScore);
        }
      } catch {
        if (!cancelled) setFetchError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void loadPublic();
    return () => { cancelled = true; };
  }, []);

  // Effect B — user rank (only runs after auth and progress are both fully ready).
  // Guarding on `progress !== null` (not just `uid`) prevents fetching with
  // highScore=0 while progress is still loading, which would return rank=0 and
  // then trigger a second fetch when progress finally loads.
  useEffect(() => {
    if (authLoading || !uid || progress === null) return;
    let cancelled = false;
    async function loadUserRank() {
      try {
        const rank = await getUserRank(highScore);
        if (cancelled) return;
        setUserRank(rank);
        // Derive the score of the person just above the user from the already-loaded
        // topEntries snapshot (avoids an extra Firestore round-trip).
        if (rank > 1 && topEntries.length >= rank - 1) {
          setNextRankScore(topEntries[rank - 2]?.quizHighScore ?? null);
        } else {
          setNextRankScore(null);
        }
      } catch {
        // Rank fetch failure is non-fatal — the public leaderboard is still shown.
      }
    }
    void loadUserRank();
    return () => { cancelled = true; };
  }, [authLoading, uid, progress, highScore, topEntries]);

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

  if (authLoading || loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <span className="material-symbols-outlined text-primary text-4xl animate-spin">
          progress_activity
        </span>
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-4">
        <span className="material-symbols-outlined text-error text-4xl">error</span>
        <p className="text-white/80">{t("loadError")}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-white text-primary rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all"
        >
          {t("retry")}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-white mb-4 tracking-tight">
          {t("title")}
        </h1>
        <p className="text-white/80 text-lg">{t("subtitle")}</p>
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
          className="inline-flex items-center gap-2 px-10 py-4 bg-white text-primary rounded-full font-bold text-base shadow-xl hover:scale-105 active:scale-95 transition-all"
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
