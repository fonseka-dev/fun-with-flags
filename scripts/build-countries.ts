/**
 * Fetches base country data from REST Countries API for all 195 UN member states
 * and generates the countries-195.json skeleton.
 *
 * Run: npx tsx scripts/build-countries.ts
 *
 * Output: scripts/data/countries-195.json
 */

import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const CONTINENT_MAP: Record<string, string> = {
  Africa: "Africa",
  Americas: "SPLIT",
  Antarctic: "SKIP",
  Asia: "Asia",
  Europe: "Europe",
  Oceania: "Oceania",
};

const SOUTH_AMERICA = new Set([
  "AR", "BO", "BR", "CL", "CO", "EC", "GY", "PY", "PE", "SR", "UY", "VE",
  "FK", "GF",
]);

type CountryEntry = {
  slug: string;
  flagCode: string;
  continent: string;
  population: string;
  region: string;
  translations: {
    en: { name: string; capital: string; flagDescription: string; funFacts: { icon: string; title: string; description: string }[] };
    es: { name: string; capital: string; flagDescription: string; funFacts: { icon: string; title: string; description: string }[] };
  };
};

function formatPopulation(pop: number): string {
  if (pop >= 1_000_000_000) return `${(pop / 1_000_000_000).toFixed(1)}B`;
  if (pop >= 1_000_000) return `${(pop / 1_000_000).toFixed(1)}M`;
  if (pop >= 1_000) return `${(pop / 1_000).toFixed(0)}K`;
  return pop.toString();
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

async function main() {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name,cca2,region,subregion,population,capital,translations");
  const data = await res.json();

  const countries: CountryEntry[] = [];

  for (const c of data) {
    const regionKey = c.region as string;
    if (CONTINENT_MAP[regionKey] === "SKIP") continue;

    let continent: string;
    if (regionKey === "Americas") {
      continent = SOUTH_AMERICA.has(c.cca2) ? "South America" : "North America";
    } else {
      continent = CONTINENT_MAP[regionKey] || regionKey;
    }

    const nameEn = c.name?.common || "";
    const nameEs = c.translations?.spa?.common || nameEn;
    const capitalEn = c.capital?.[0] || "";
    const capitalEs = capitalEn;

    countries.push({
      slug: toSlug(nameEn),
      flagCode: (c.cca2 as string).toLowerCase(),
      continent,
      population: formatPopulation(c.population || 0),
      region: c.subregion || regionKey,
      translations: {
        en: {
          name: nameEn,
          capital: capitalEn,
          flagDescription: `The flag of ${nameEn}.`,
          funFacts: [
            { icon: "public", title: `About ${nameEn}`, description: `${nameEn} is a country in ${c.subregion || regionKey}.` },
            { icon: "groups", title: "Population", description: `${nameEn} has a population of approximately ${formatPopulation(c.population || 0)}.` },
            { icon: "location_city", title: "Capital", description: `The capital of ${nameEn} is ${capitalEn}.` },
          ],
        },
        es: {
          name: nameEs,
          capital: capitalEs,
          flagDescription: `La bandera de ${nameEs}.`,
          funFacts: [
            { icon: "public", title: `Sobre ${nameEs}`, description: `${nameEs} es un país en ${c.subregion || regionKey}.` },
            { icon: "groups", title: "Población", description: `${nameEs} tiene una población de aproximadamente ${formatPopulation(c.population || 0)}.` },
            { icon: "location_city", title: "Capital", description: `La capital de ${nameEs} es ${capitalEs}.` },
          ],
        },
      },
    });
  }

  countries.sort((a, b) => a.translations.en.name.localeCompare(b.translations.en.name));

  const outDir = join(__dirname, "data");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(
    join(outDir, "countries-195.json"),
    JSON.stringify(countries, null, 2),
  );

  console.log(`Wrote ${countries.length} countries to scripts/data/countries-195.json`);
}

main().catch(console.error);
