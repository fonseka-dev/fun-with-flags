"use client";

import { useState, useMemo, Suspense } from "react";
import { countries } from "@/data/countries";
import { filterByContinent, searchCountries } from "@/lib/utils/countries";
import { useContinentFilter } from "@/lib/hooks/useContinentFilter";
import { AppShell } from "@/components/layout/AppShell";
import { CountryGrid } from "@/components/catalog/CountryGrid";

function CatalogContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const { activeContinent } = useContinentFilter();

  const filteredCountries = useMemo(() => {
    let result = filterByContinent(countries, activeContinent);
    result = searchCountries(result, searchQuery);
    return result;
  }, [activeContinent, searchQuery]);

  return (
    <AppShell searchQuery={searchQuery} onSearchChange={setSearchQuery}>
      <header className="mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-on-background tracking-tighter mb-4">
          Discover Nations
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
          Your digital field guide to the wonders of our planet. Explore
          histories, flags, and cultures across all seven continents.
        </p>
      </header>
      <CountryGrid countries={filteredCountries} />
    </AppShell>
  );
}

export default function CatalogPage() {
  return (
    <Suspense>
      <CatalogContent />
    </Suspense>
  );
}
