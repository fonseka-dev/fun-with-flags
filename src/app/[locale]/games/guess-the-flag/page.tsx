"use client";

import { Suspense, useMemo } from "react";
import { useCountries } from "@/lib/providers/CountriesProvider";
import { filterByContinent } from "@/lib/utils/countries";
import { useContinentFilter } from "@/lib/hooks/useContinentFilter";
import { useUserProgress } from "@/lib/hooks/useUserProgress";
import { AppShell } from "@/components/layout/AppShell";
import { FlagQuiz } from "@/components/games/FlagQuiz";

function GuessTheFlagContent() {
  const { countries } = useCountries();
  const { activeContinent } = useContinentFilter();
  const { saveQuizScore } = useUserProgress();

  const pool = useMemo(
    () => filterByContinent(countries, activeContinent),
    [countries, activeContinent],
  );

  return (
    <AppShell>
      <div className="max-w-4xl mx-auto">
        <FlagQuiz pool={pool} onGameOver={saveQuizScore} />
      </div>
    </AppShell>
  );
}

export default function GuessTheFlagPage() {
  return (
    <Suspense>
      <GuessTheFlagContent />
    </Suspense>
  );
}
