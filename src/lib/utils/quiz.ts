import { Country } from "@/data/types";

export type QuizQuestion = {
  correct: Country;
  options: Country[];
};

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function pickDistractors(
  correct: Country,
  pool: Country[],
  excludeSlugs: string[] = [],
): Country[] {
  const excluded = new Set([correct.slug, ...excludeSlugs]);

  // Separate same-continent and other-continent candidates
  const sameContinentPool = pool.filter(
    (c) => c.continent === correct.continent && !excluded.has(c.slug),
  );
  const otherPool = pool.filter(
    (c) => c.continent !== correct.continent && !excluded.has(c.slug),
  );

  const distractors: Country[] = [];

  // Fill from same continent first
  const shuffledSame = shuffleArray(sameContinentPool);
  for (const c of shuffledSame) {
    if (distractors.length >= 3) break;
    distractors.push(c);
  }

  // Fill remaining from other continents
  const shuffledOther = shuffleArray(otherPool);
  for (const c of shuffledOther) {
    if (distractors.length >= 3) break;
    distractors.push(c);
  }

  return distractors;
}

export function generateQuestion(
  pool: Country[],
  usedSlugs: string[] = [],
): QuizQuestion | null {
  if (pool.length < 4) return null;

  const usedSet = new Set(usedSlugs);
  const candidates = pool.filter((c) => !usedSet.has(c.slug));

  if (candidates.length === 0) return null;

  const shuffled = shuffleArray(candidates);
  const correct = shuffled[0];
  const distractors = pickDistractors(correct, pool, usedSlugs);

  if (distractors.length < 3) return null;

  const options = shuffleArray([correct, ...distractors]);

  return { correct, options };
}
