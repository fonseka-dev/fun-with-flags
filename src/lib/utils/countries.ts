import { countries } from "@/data/countries";
import { Country, Continent } from "@/data/types";

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
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

export function getCountrySlugs(): string[] {
  return countries.map((c) => c.slug);
}
