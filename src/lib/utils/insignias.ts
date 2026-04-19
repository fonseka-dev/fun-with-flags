import { Difficulty } from "@/data/types";
import type { Insignia, InsigniaId, UserProgress } from "@/data/types";

export const INSIGNIAS: Record<InsigniaId, Insignia> = {
  cartographer: {
    id: "cartographer",
    icon: "public",
    labelKey: "insignia.cartographer.label",
    descKey: "insignia.cartographer.desc",
    colorClass: "text-secondary",
  },
  speedy: {
    id: "speedy",
    icon: "speed",
    labelKey: "insignia.speedy.label",
    descKey: "insignia.speedy.desc",
    colorClass: "text-tertiary",
  },
  explorer: {
    id: "explorer",
    icon: "explore",
    labelKey: "insignia.explorer.label",
    descKey: "insignia.explorer.desc",
    colorClass: "text-primary",
  },
  flawless: {
    id: "flawless",
    icon: "shield",
    labelKey: "insignia.flawless.label",
    descKey: "insignia.flawless.desc",
    colorClass: "text-primary",
  },
  persistent: {
    id: "persistent",
    icon: "repeat",
    labelKey: "insignia.persistent.label",
    descKey: "insignia.persistent.desc",
    colorClass: "text-secondary",
  },
  conqueror: {
    id: "conqueror",
    icon: "military_tech",
    labelKey: "insignia.conqueror.label",
    descKey: "insignia.conqueror.desc",
    colorClass: "text-tertiary",
  },
  marathon: {
    id: "marathon",
    icon: "directions_run",
    labelKey: "insignia.marathon.label",
    descKey: "insignia.marathon.desc",
    colorClass: "text-primary",
  },
  scholar: {
    id: "scholar",
    icon: "school",
    labelKey: "insignia.scholar.label",
    descKey: "insignia.scholar.desc",
    colorClass: "text-secondary",
  },
};

export type GameResult = {
  difficulty: Difficulty;
  livesRemaining: number;
  maxStreak: number;
  totalQuestions: number;
  fastAnswerCount: number;
  correctInGame: number;
};

/**
 * Pure function — evaluates which insignias were earned in this game.
 * Handles one-time badges (only earned once across all games) vs stackable ones.
 */
export function evaluateInsignias(
  result: GameResult,
  progress: UserProgress,
): InsigniaId[] {
  const earned: InsigniaId[] = [];
  const existing = progress.earnedInsignias ?? [];
  const totalCorrectBefore = progress.totalCorrectAnswers ?? 0;
  const gamesPlayedBefore = progress.quizGamesPlayed ?? 0;

  // Cartographer — 10-streak in this game (stackable)
  if (result.maxStreak >= 10) {
    earned.push("cartographer");
  }

  // Speedy — at least one correct answer in <2s (stackable)
  if (result.fastAnswerCount >= 1) {
    earned.push("speedy");
  }

  // Explorer — first game ever (one-time)
  if (gamesPlayedBefore === 0 && !existing.includes("explorer")) {
    earned.push("explorer");
  }

  // Flawless — no lives lost (stackable)
  if (result.livesRemaining === 3) {
    earned.push("flawless");
  }

  // Persistent — exactly the 5th game played (one-time)
  // gamesPlayedBefore is 4 means this is the 5th game
  if (gamesPlayedBefore === 4 && !existing.includes("persistent")) {
    earned.push("persistent");
  }

  // Conqueror — completed a Hard game (stackable)
  if (result.difficulty === "hard") {
    earned.push("conqueror");
  }

  // Marathon — 20+ questions answered in one game (stackable)
  if (result.totalQuestions >= 20) {
    earned.push("marathon");
  }

  // Scholar — first time crossing 50 total correct answers (one-time)
  const totalCorrectAfter = totalCorrectBefore + result.correctInGame;
  if (
    totalCorrectBefore < 50 &&
    totalCorrectAfter >= 50 &&
    !existing.includes("scholar")
  ) {
    earned.push("scholar");
  }

  return earned;
}
