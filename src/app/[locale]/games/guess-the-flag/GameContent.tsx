"use client";

import { useMemo, useCallback } from "react";
import { useCountries } from "@/lib/providers/CountriesProvider";
import { filterByContinent } from "@/lib/utils/countries";
import { useContinentFilter } from "@/lib/hooks/useContinentFilter";
import { useUserProgress } from "@/lib/hooks/useUserProgress";
import { AppShell } from "@/components/layout/AppShell";
import { FlagQuiz } from "@/components/games/FlagQuiz";
import type { InsigniaId } from "@/data/types";

export function GameContent() {
  const { countries } = useCountries();
  const { activeContinent } = useContinentFilter();
  const { saveQuizResult } = useUserProgress();

  const pool = useMemo(
    () => filterByContinent(countries, activeContinent),
    [countries, activeContinent],
  );

  const handleGameOver = useCallback(
    (score: number, insignias: InsigniaId[], correctInGame: number) => {
      saveQuizResult(score, insignias, correctInGame);
    },
    [saveQuizResult],
  );

  return (
    <AppShell>
      <div className="max-w-4xl mx-auto">
        <FlagQuiz pool={pool} onGameOver={handleGameOver} />
      </div>
    </AppShell>
  );
}
