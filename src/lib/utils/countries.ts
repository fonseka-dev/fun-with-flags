import { countries as staticCountries } from "@/data/countries";
import { Country, Continent } from "@/data/types";

export function getCountryBySlug(
  slug: string,
  pool: Country[] = staticCountries,
): Country | undefined {
  return pool.find((c) => c.slug === slug);
}

export function filterByContinent(
  list: Country[],
  continent: Continent | null,
): Country[] {
  if (!continent) return list;
  return list.filter((c) => c.continent === continent);
}

export function searchCountries(list: Country[], query: string): Country[] {
  if (!query.trim()) return list;
  const q = query.toLowerCase();
  return list.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.capital.toLowerCase().includes(q),
  );
}

export function getCountrySlugs(
  pool: Country[] = staticCountries,
): string[] {
  return pool.map((c) => c.slug);
}
