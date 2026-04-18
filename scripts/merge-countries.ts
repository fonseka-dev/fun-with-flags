/**
 * One-time script: merges scripts/data/countries-195.json (245 stubs, en+es)
 * with the 58 rich English entries in src/data/countries.ts.
 *
 * For the 58 rich countries: the en translation is replaced with rich content.
 * For all other countries: the stub en+es translations from JSON are kept as-is.
 *
 * Output: overwrites src/data/countries.ts with CountryEntry[] + helpers.
 *
 * Run: npx tsx scripts/merge-countries.ts
 */

import { writeFileSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, "..");

// Load the 245-entry JSON (already has translations: { en, es } structure)
const jsonPath = join(__dirname, "data", "countries-195.json");
const rawEntries = JSON.parse(readFileSync(jsonPath, "utf8")) as Array<{
  slug: string;
  flagCode: string;
  continent: string;
  population: string;
  region: string;
  translations: {
    en: { name: string; capital: string; flagDescription: string; funFacts: { icon: string; title: string; description: string }[] };
    es: { name: string; capital: string; flagDescription: string; funFacts: { icon: string; title: string; description: string }[] };
  };
}>;

type RichCountry = { slug: string; name: string; capital: string; flagDescription: string; funFacts: unknown[] };

async function main() {
  // Load the 58 rich entries from the current countries.ts via dynamic import.
  // This import runs BEFORE we write the output file, so the original is still intact.
  // tsx handles the TypeScript transpilation.
  const { countries: richCountries } = await import("../src/data/countries") as { countries: RichCountry[] };

  const richMap = new Map(
    (richCountries as RichCountry[]).map((c) => [c.slug, c])
  );

  const merged = rawEntries.map((entry) => {
    const rich = richMap.get(entry.slug);
    const enTrans = rich
      ? {
          name: rich.name,
          capital: rich.capital,
          flagDescription: rich.flagDescription,
          funFacts: rich.funFacts,
        }
      : entry.translations.en;

    return {
      slug: entry.slug,
      flagCode: entry.flagCode,
      continent: entry.continent,
      population: entry.population,
      region: entry.region,
      translations: {
        en: enTrans,
        es: entry.translations.es,
      },
    };
  });

  function serializeEntry(entry: (typeof merged)[0]): string {
    return JSON.stringify(entry, null, 4)
      .split("\n")
      .map((line) => "  " + line)
      .join("\n");
  }

  const output = `import { CountryEntry, Country, Locale } from "./types";

export const countriesData: CountryEntry[] = [
${merged.map(serializeEntry).join(",\n")}
];

export function getCountriesForLocale(
  locale: Locale,
  data: CountryEntry[] = countriesData,
): Country[] {
  return data.map(({ translations, ...base }) => ({
    ...base,
    ...translations[locale],
  }));
}

/** Default English view — used by tests and SSG utilities */
export const countries: Country[] = getCountriesForLocale("en");
`;

  writeFileSync(join(root, "src", "data", "countries.ts"), output, "utf8");
  console.log(`✓ Wrote ${merged.length} entries to src/data/countries.ts`);
  console.log(
    `  Rich entries: ${[...richMap.keys()].filter((k) => merged.some((e) => e.slug === k)).length}`,
  );
  console.log(`  Stub entries: ${merged.length - richMap.size}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
