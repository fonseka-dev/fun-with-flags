import { describe, it, expect } from "vitest";
import {
  generateQuestion,
  pickDistractors,
  shuffleArray,
} from "@/lib/utils/quiz";
import { countries } from "@/data/countries";

describe("shuffleArray", () => {
  it("returns an array of the same length with the same elements", () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffleArray(input);
    expect(result).toHaveLength(5);
    expect(result.sort()).toEqual([1, 2, 3, 4, 5]);
  });

  it("does not mutate the original array", () => {
    const input = [1, 2, 3];
    const copy = [...input];
    shuffleArray(input);
    expect(input).toEqual(copy);
  });
});

describe("pickDistractors", () => {
  it("returns exactly 3 distractors", () => {
    const japan = countries.find((c) => c.slug === "japan")!;
    const result = pickDistractors(japan, countries);
    expect(result).toHaveLength(3);
  });

  it("never includes the correct country", () => {
    const japan = countries.find((c) => c.slug === "japan")!;
    const result = pickDistractors(japan, countries);
    expect(result.every((c) => c.slug !== "japan")).toBe(true);
  });

  it("prefers countries from the same continent", () => {
    const japan = countries.find((c) => c.slug === "japan")!;
    const result = pickDistractors(japan, countries);
    // With only 2 Asian countries in seed data (japan + india), at least 1 distractor should be from Asia
    const asianDistractors = result.filter((c) => c.continent === "Asia");
    expect(asianDistractors.length).toBeGreaterThanOrEqual(1);
  });

  it("excludes previously used countries", () => {
    const japan = countries.find((c) => c.slug === "japan")!;
    const india = countries.find((c) => c.slug === "india")!;
    const result = pickDistractors(japan, countries, [india.slug]);
    expect(result.every((c) => c.slug !== "india")).toBe(true);
  });
});

describe("generateQuestion", () => {
  it("returns a question with a correct country and 4 options", () => {
    const question = generateQuestion(countries);
    expect(question).toBeDefined();
    expect(question!.correct).toBeDefined();
    expect(question!.options).toHaveLength(4);
    expect(question!.options.some((o) => o.slug === question!.correct.slug)).toBe(true);
  });

  it("returns null if the pool has fewer than 4 countries", () => {
    const tinyPool = countries.slice(0, 3);
    const question = generateQuestion(tinyPool);
    expect(question).toBeNull();
  });

  it("excludes already-used slugs from being the correct answer", () => {
    const usedSlugs = countries.slice(0, 10).map((c) => c.slug);
    const question = generateQuestion(countries, usedSlugs);
    if (question) {
      expect(usedSlugs).not.toContain(question.correct.slug);
    }
  });
});
