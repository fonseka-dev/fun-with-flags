"use client";

import { Suspense } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { WorldRankingsContent } from "@/components/leaderboard/WorldRankingsContent";

function LeaderboardContent() {
  return (
    <AppShell showSidebar={false}>
      <WorldRankingsContent />
    </AppShell>
  );
}

export default function LeaderboardPage() {
  return (
    <Suspense>
      <LeaderboardContent />
    </Suspense>
  );
}
