export type Continent =
  | "Africa"
  | "Asia"
  | "Europe"
  | "North America"
  | "South America"
  | "Oceania";

export type Difficulty = "easy" | "normal" | "hard";

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

export type UserTier = "free" | "premium";

export type UserProgress = {
  uid: string;
  nickname: string;
  isAnonymous: boolean;
  avatarSeed: string;
  onboardingComplete: boolean;
  tier: UserTier;
  discoveredCountries: string[];
  quizHighScore: number;
  quizGamesPlayed: number;
  lastPlayedAt: Date;
};

/** Derives a DiceBear fun-emoji SVG URL from an avatar seed. Never store this URL — store the seed. */
export function avatarUrl(seed: string): string {
  return `https://api.dicebear.com/9.x/fun-emoji/svg?seed=${encodeURIComponent(seed)}`;
}
