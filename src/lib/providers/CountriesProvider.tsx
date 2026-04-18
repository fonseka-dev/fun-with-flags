"use client";

import { createContext, useContext, useMemo, ReactNode } from "react";
import { useLocale } from "next-intl";
import { Country, Locale } from "@/data/types";
import { getCountriesForLocale } from "@/data/countries";

type CountriesContextType = {
  countries: Country[];
};

const CountriesContext = createContext<CountriesContextType>({
  countries: getCountriesForLocale("en"),
});

export function CountriesProvider({ children }: { children: ReactNode }) {
  const locale = useLocale() as Locale;
  const countries = useMemo(() => getCountriesForLocale(locale), [locale]);

  return (
    <CountriesContext.Provider value={{ countries }}>
      {children}
    </CountriesContext.Provider>
  );
}

export function useCountries() {
  return useContext(CountriesContext);
}
