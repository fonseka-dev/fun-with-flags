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
};

const CountriesContext = createContext<CountriesContextType>({
  countries: staticCountries,
  loading: true,
});

export function CountriesProvider({ children }: { children: ReactNode }) {
  const locale = useLocale() as Locale;
  const [countries, setCountries] = useState<Country[]>(staticCountries);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isFirebaseConfigured()) {
      setLoading(false);
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
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [locale]);

  return (
    <CountriesContext.Provider value={{ countries, loading }}>
      {children}
    </CountriesContext.Provider>
  );
}

export function useCountries() {
  return useContext(CountriesContext);
}
