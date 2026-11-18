"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { useCountries } from "@/lib/providers/CountriesProvider";
import { filterByContinent, searchCountries } from "@/lib/utils/countries";
import { useContinentFilter } from "@/lib/hooks/useContinentFilter";
import { AppShell } from "@/components/layout/AppShell";
import { CountryGrid } from "@/components/catalog/CountryGrid";
import { Button } from "@/components/ui/Button";
import { SearchInput } from "@/components/ui/SearchInput";
import { continents } from "@/data/continents";
import type { Continent, Country } from "@/data/types";

const CATALOG_PAGE_SIZE = 24;

type CatalogResultsProps = {
  countries: Country[];
  loadMoreLabel: string;
};

function CatalogResults({ countries, loadMoreLabel }: CatalogResultsProps) {
  const [visibleCount, setVisibleCount] = useState(CATALOG_PAGE_SIZE);
  const visibleCountries = countries.slice(0, visibleCount);
  const canLoadMore = visibleCountries.length < countries.length;

  return (
    <>
      <CountryGrid countries={visibleCountries} />
      {canLoadMore ? (
        <div className="mt-10 flex justify-center">
          <Button
            type="button"
            onClick={() => setVisibleCount((currentCount) => currentCount + CATALOG_PAGE_SIZE)}
          >
            {loadMoreLabel}
          </Button>
        </div>
      ) : null}
    </>
  );
}

export function CatalogContent() {
  const t = useTranslations("catalog");
  const tContinents = useTranslations("continents");
  const { countries } = useCountries();
  const [searchQuery, setSearchQuery] = useState("");
  const { activeContinent, setContinent } = useContinentFilter();

  const filteredCountries = useMemo(() => {
    let result = filterByContinent(countries, activeContinent);
    result = searchCountries(result, searchQuery);
    return result;
  }, [countries, activeContinent, searchQuery]);

  const paginationKey = `${activeContinent ?? "all"}:${searchQuery}`;

  function handleSearchChange(value: string) {
    setSearchQuery(value);
  }

  function handleContinentSelect(continent: Continent | null) {
    setContinent(continent);
  }

  return (
    <AppShell
      searchQuery={searchQuery}
      onSearchChange={handleSearchChange}
      onContinentSelect={handleContinentSelect}
    >
      <header className="mb-8 sm:mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-on-background tracking-tighter mb-4">
          {t("title")}
        </h1>
        <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
          {t("subtitle")}
        </p>
        <div className="mt-6 xl:hidden">
          <SearchInput
            id="country-search-mobile"
            label={t("searchLabel")}
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder={t("searchPlaceholder")}
          />
        </div>
        <div
          role="group"
          aria-label={t("regionFilter")}
          className="mt-4 -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:hidden scrollbar-hidden"
        >
          <button
            type="button"
            aria-pressed={activeContinent === null}
            onClick={() => handleContinentSelect(null)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${activeContinent === null ? "bg-white text-primary" : "bg-white/20 text-white hover:bg-white/30"}`}
          >
            {t("allRegions")}
          </button>
          {continents.map((continent) => (
            <button
              key={continent.name}
              type="button"
              aria-pressed={activeContinent === continent.name}
              onClick={() => handleContinentSelect(continent.name)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${activeContinent === continent.name ? "bg-white text-primary" : "bg-white/20 text-white hover:bg-white/30"}`}
            >
              {tContinents(continent.name)}
            </button>
          ))}
        </div>
      </header>
      <CatalogResults
        key={paginationKey}
        countries={filteredCountries}
        loadMoreLabel={t("loadMore")}
      />
    </AppShell>
  );
}
