export type Continent =
  | "Africa"
  | "Asia"
  | "Europe"
  | "North America"
  | "South America"
  | "Oceania";

export type FunFact = {
  icon: string;
  title: string;
  description: string;
};

export type Country = {
  slug: string;
  name: string;
  capital: string;
  continent: Continent;
  population: string;
  region: string;
  flagCode: string;
  flagDescription: string;
  funFacts: [FunFact, FunFact, FunFact];
};

export type UserProgress = {
  uid: string;
  discoveredCountries: string[];
  quizHighScore: number;
  quizGamesPlayed: number;
  lastPlayedAt: Date;
};
