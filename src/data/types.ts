export type Continent =
  | "Africa"
  | "Asia"
  | "Europe"
  | "North America"
  | "South America"
  | "Oceania";

export type Locale = "en" | "es";

export type FunFact = {
  icon: string;
  title: string;
  description: string;
};

/** Locale-independent fields stored in src/data/countries.ts */
export type CountryBase = {
  slug: string;
  flagCode: string;
  continent: Continent;
  population: string;
  region: string;
};

/** Translatable fields — name, capital, flag description, and fun facts */
export type CountryTranslation = {
  name: string;
  capital: string;
  flagDescription: string;
  funFacts: FunFact[];
};

/** Full entry shape stored in src/data/countries.ts — base + embedded translations */
export type CountryEntry = CountryBase & {
  translations: { en: CountryTranslation; es: CountryTranslation };
};

/** Merged type used by components — backward compatible */
export type Country = CountryBase & CountryTranslation;

export type UserProgress = {
  uid: string;
  displayName: string;
  isAnonymous: boolean;
  avatarUrl?: string;
  discoveredCountries: string[];
  quizHighScore: number;
  quizGamesPlayed: number;
  lastPlayedAt: Date;
};
