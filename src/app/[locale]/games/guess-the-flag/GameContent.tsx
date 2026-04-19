"use client";

import { useCallback } from "react";
import { useCountries } from "@/lib/providers/CountriesProvider";
import { useUserProgress } from "@/lib/hooks/useUserProgress";
import { AppShell } from "@/components/layout/AppShell";
import { FlagQuiz } from "@/components/games/FlagQuiz";
import type { InsigniaId } from "@/data/types";

export function GameContent() {
  const { countries } = useCountries();
  const { saveQuizResult } = useUserProgress();

  const handleGameOver = useCallback(
    (score: number, insignias: InsigniaId[], correctInGame: number) => {
      saveQuizResult(score, insignias, correctInGame);
    },
    [saveQuizResult],
  );

  return (
    <AppShell showSidebar={false}>
      <div className="max-w-4xl mx-auto">
        <FlagQuiz pool={countries} onGameOver={handleGameOver} />
      </div>
    </AppShell>
  );
}
