"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useLocale } from "next-intl";
import { Country, Locale } from "@/data/types";
import { isFirebaseConfigured, fetchAllCountries } from "@/lib/firebase";
import { countries as staticCountries } from "@/data/countries";

type CountriesContextType = {
  countries: Country[];
  loading: boolean;
  /** True while Firestore enrichment is running in the background */
  enriching: boolean;
};

const CountriesContext = createContext<CountriesContextType>({
  countries: staticCountries,
  loading: false,
  enriching: false,
});

export function CountriesProvider({ children }: { children: ReactNode }) {
  const locale = useLocale() as Locale;
  const [countries, setCountries] = useState<Country[]>(staticCountries);
  // loading is false immediately — static data is complete and usable
  const [loading] = useState(false);
  const [enriching, setEnriching] = useState(isFirebaseConfigured());

  useEffect(() => {
    if (!isFirebaseConfigured()) {
      setEnriching(false);
      return;
    }

    let cancelled = false;

    async function load() {
      try {
        const data = await fetchAllCountries(locale);
        if (!cancelled && data.length > 0) {
          setCountries(data);
        }
      } catch {
        // Firestore unavailable — keep static fallback
      } finally {
        if (!cancelled) setEnriching(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [locale]);

  return (
    <CountriesContext.Provider value={{ countries, loading, enriching }}>
      {children}
    </CountriesContext.Provider>
  );
}

export function useCountries() {
  return useContext(CountriesContext);
}
