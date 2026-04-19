import { describe, it, expect } from "vitest";
import { evaluateInsignias, type GameResult } from "@/lib/utils/insignias";
import type { UserProgress } from "@/data/types";

function makeProgress(overrides: Partial<UserProgress> = {}): UserProgress {
  return {
    uid: "test-uid",
    nickname: "Test Explorer",
    isAnonymous: true,
    avatarSeed: "test-seed",
    onboardingComplete: true,
    tier: "free",
    discoveredCountries: [],
    quizHighScore: 0,
    quizGamesPlayed: 0,
    totalCorrectAnswers: 0,
    earnedInsignias: [],
    lastPlayedAt: new Date(0),
    ...overrides,
  } as UserProgress;
}

function makeResult(overrides: Partial<GameResult> = {}): GameResult {
  return {
    difficulty: "normal",
    livesRemaining: 2,
    maxStreak: 0,
    totalQuestions: 5,
    fastAnswerCount: 0,
    correctInGame: 4,
    ...overrides,
  };
}

describe("evaluateInsignias — individual badges", () => {
  it("awards cartographer when maxStreak >= 10", () => {
    const result = makeResult({ maxStreak: 10 });
    const insignias = evaluateInsignias(result, makeProgress());
    expect(insignias).toContain("cartographer");
  });

  it("does NOT award cartographer when maxStreak < 10", () => {
    const result = makeResult({ maxStreak: 9 });
    const insignias = evaluateInsignias(result, makeProgress());
    expect(insignias).not.toContain("cartographer");
  });

  it("awards speedy when fastAnswerCount >= 1", () => {
    const result = makeResult({ fastAnswerCount: 1 });
    const insignias = evaluateInsignias(result, makeProgress());
    expect(insignias).toContain("speedy");
  });

  it("does NOT award speedy when fastAnswerCount is 0", () => {
    const result = makeResult({ fastAnswerCount: 0 });
    const insignias = evaluateInsignias(result, makeProgress());
    expect(insignias).not.toContain("speedy");
  });

  it("awards explorer on first game (gamesPlayedBefore === 0)", () => {
    const progress = makeProgress({ quizGamesPlayed: 0 });
    const insignias = evaluateInsignias(makeResult(), progress);
    expect(insignias).toContain("explorer");
  });

  it("does NOT award explorer if already in earnedInsignias", () => {
    const progress = makeProgress({
      quizGamesPlayed: 0,
      earnedInsignias: ["explorer"],
    });
    const insignias = evaluateInsignias(makeResult(), progress);
    expect(insignias).not.toContain("explorer");
  });

  it("does NOT award explorer on second game", () => {
    const progress = makeProgress({ quizGamesPlayed: 1 });
    const insignias = evaluateInsignias(makeResult(), progress);
    expect(insignias).not.toContain("explorer");
  });

  it("awards flawless when livesRemaining === 3", () => {
    const result = makeResult({ livesRemaining: 3 });
    const insignias = evaluateInsignias(result, makeProgress());
    expect(insignias).toContain("flawless");
  });

  it("does NOT award flawless when a life was lost", () => {
    const result = makeResult({ livesRemaining: 2 });
    const insignias = evaluateInsignias(result, makeProgress());
    expect(insignias).not.toContain("flawless");
  });

  it("awards persistent on exactly the 5th game (gamesPlayedBefore === 4)", () => {
    const progress = makeProgress({ quizGamesPlayed: 4 });
    const insignias = evaluateInsignias(makeResult(), progress);
    expect(insignias).toContain("persistent");
  });

  it("does NOT award persistent on the 6th game", () => {
    const progress = makeProgress({ quizGamesPlayed: 5 });
    const insignias = evaluateInsignias(makeResult(), progress);
    expect(insignias).not.toContain("persistent");
  });

  it("does NOT award persistent if already earned", () => {
    const progress = makeProgress({
      quizGamesPlayed: 4,
      earnedInsignias: ["persistent"],
    });
    const insignias = evaluateInsignias(makeResult(), progress);
    expect(insignias).not.toContain("persistent");
  });

  it("awards conqueror when difficulty is hard", () => {
    const result = makeResult({ difficulty: "hard" });
    const insignias = evaluateInsignias(result, makeProgress());
    expect(insignias).toContain("conqueror");
  });

  it("does NOT award conqueror when difficulty is normal", () => {
    const result = makeResult({ difficulty: "normal" });
    const insignias = evaluateInsignias(result, makeProgress());
    expect(insignias).not.toContain("conqueror");
  });

  it("awards marathon when totalQuestions >= 20", () => {
    const result = makeResult({ totalQuestions: 20 });
    const insignias = evaluateInsignias(result, makeProgress());
    expect(insignias).toContain("marathon");
  });

  it("does NOT award marathon when totalQuestions < 20", () => {
    const result = makeResult({ totalQuestions: 19 });
    const insignias = evaluateInsignias(result, makeProgress());
    expect(insignias).not.toContain("marathon");
  });

  it("awards scholar when total crosses 50 correct answers", () => {
    const progress = makeProgress({ totalCorrectAnswers: 47 });
    const result = makeResult({ correctInGame: 5 });
    const insignias = evaluateInsignias(result, progress);
    expect(insignias).toContain("scholar");
  });

  it("does NOT award scholar if already above 50 before this game", () => {
    const progress = makeProgress({ totalCorrectAnswers: 51 });
    const result = makeResult({ correctInGame: 5 });
    const insignias = evaluateInsignias(result, progress);
    expect(insignias).not.toContain("scholar");
  });

  it("does NOT award scholar if already earned", () => {
    const progress = makeProgress({
      totalCorrectAnswers: 47,
      earnedInsignias: ["scholar"],
    });
    const result = makeResult({ correctInGame: 5 });
    const insignias = evaluateInsignias(result, progress);
    expect(insignias).not.toContain("scholar");
  });
});

describe("evaluateInsignias — multiple badges in one game", () => {
  it("can earn several badges at once", () => {
    const progress = makeProgress({ quizGamesPlayed: 0 });
    const result = makeResult({
      difficulty: "hard",
      livesRemaining: 3,
      maxStreak: 10,
      fastAnswerCount: 3,
      totalQuestions: 20,
      correctInGame: 10,
    });
    const insignias = evaluateInsignias(result, progress);
    expect(insignias).toContain("cartographer");
    expect(insignias).toContain("speedy");
    expect(insignias).toContain("explorer");
    expect(insignias).toContain("flawless");
    expect(insignias).toContain("conqueror");
    expect(insignias).toContain("marathon");
  });

  it("returns empty array when no conditions met", () => {
    const progress = makeProgress({ quizGamesPlayed: 2 });
    const result = makeResult({
      difficulty: "easy",
      livesRemaining: 1,
      maxStreak: 2,
      totalQuestions: 5,
      fastAnswerCount: 0,
      correctInGame: 3,
    });
    const insignias = evaluateInsignias(result, progress);
    expect(insignias).toHaveLength(0);
  });
});
