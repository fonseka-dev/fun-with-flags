"use client";

import { Suspense, useMemo } from "react";
import { countries } from "@/data/countries";
import { filterByContinent } from "@/lib/utils/countries";
import { useContinentFilter } from "@/lib/hooks/useContinentFilter";
import { AppShell } from "@/components/layout/AppShell";
import { FlagQuiz } from "@/components/games/FlagQuiz";

function GuessTheFlagContent() {
  const { activeContinent } = useContinentFilter();

  const pool = useMemo(
    () => filterByContinent(countries, activeContinent),
    [activeContinent],
  );

  return (
    <AppShell>
      <div className="max-w-4xl mx-auto">
        <FlagQuiz pool={pool} />
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
