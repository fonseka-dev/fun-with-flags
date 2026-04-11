import { describe, it, expect } from "vitest";
import {
  getCountryBySlug,
  filterByContinent,
  searchCountries,
  getCountrySlugs,
} from "@/lib/utils/countries";
import { countries } from "@/data/countries";

describe("getCountryBySlug", () => {
  it("returns the country matching the slug", () => {
    const result = getCountryBySlug("japan");
    expect(result).toBeDefined();
    expect(result!.name).toBe("Japan");
    expect(result!.capital).toBe("Tokyo");
  });

  it("returns undefined for an unknown slug", () => {
    const result = getCountryBySlug("atlantis");
    expect(result).toBeUndefined();
  });
});

describe("filterByContinent", () => {
  it("returns only countries from the specified continent", () => {
    const result = filterByContinent(countries, "Africa");
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((c) => c.continent === "Africa")).toBe(true);
  });

  it("returns all countries when continent is null", () => {
    const result = filterByContinent(countries, null);
    expect(result).toEqual(countries);
  });
});

describe("searchCountries", () => {
  it("finds countries by partial name match (case insensitive)", () => {
    const result = searchCountries(countries, "jap");
    expect(result.length).toBe(1);
    expect(result[0].slug).toBe("japan");
  });

  it("finds countries by capital name", () => {
    const result = searchCountries(countries, "tokyo");
    expect(result.length).toBe(1);
    expect(result[0].slug).toBe("japan");
  });

  it("returns all countries for empty query", () => {
    const result = searchCountries(countries, "");
    expect(result).toEqual(countries);
  });

  it("returns empty array when nothing matches", () => {
    const result = searchCountries(countries, "zzzzzzz");
    expect(result).toEqual([]);
  });
});

describe("getCountrySlugs", () => {
  it("returns an array of all country slugs", () => {
    const slugs = getCountrySlugs();
    expect(slugs).toContain("japan");
    expect(slugs).toContain("brazil");
    expect(slugs.length).toBe(countries.length);
  });
});
