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

/** Locale-independent fields stored in the Firestore country doc */
export type CountryBase = {
  slug: string;
  flagCode: string;
  continent: Continent;
  population: string;
  region: string;
};

/** Translatable fields stored in the Firestore translation subcollection */
export type CountryTranslation = {
  name: string;
  capital: string;
  flagDescription: string;
  funFacts: [FunFact, FunFact, FunFact];
};

/** Merged type used by components — backward compatible */
export type Country = CountryBase & CountryTranslation;

export type UserProgress = {
  uid: string;
  discoveredCountries: string[];
  quizHighScore: number;
  quizGamesPlayed: number;
  lastPlayedAt: Date;
};
