"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Country, Continent, Difficulty } from "@/data/types";
import { generateQuestion, QuizQuestion } from "@/lib/utils/quiz";
import { filterByContinent } from "@/lib/utils/countries";

export type GameStatus =
  | "idle"
  | "playing"
  | "correct"
  | "wrong"
  | "timeout"
  | "gameOver";

export type GameState = {
  status: GameStatus;
  difficulty: Difficulty;
  score: number;
  lives: number;
  questionIndex: number;
  selectedAnswer: string | null;
  currentQuestion: QuizQuestion | null;
  usedSlugs: string[];
  timeLeft: number | null;
  currentStreak: number;
  maxStreak: number;
  questionStartedAt: number | null;
  fastAnswerCount: number;
};

const INITIAL_LIVES = 3;
const POINTS_PER_CORRECT = 100;
const AUTO_ADVANCE_DELAY = 2000;
const FAST_ANSWER_THRESHOLD_MS = 2000;

export const TIMER_DURATIONS: Record<Difficulty, number | null> = {
  easy: null,
  normal: 5,
  hard: 3,
};

export const SCORE_MULTIPLIERS: Record<Difficulty, number> = {
  easy: 0,
  normal: 1,
  hard: 2,
};

function createInitialState(): GameState {
  return {
    status: "idle",
    difficulty: "normal",
    score: 0,
    lives: INITIAL_LIVES,
    questionIndex: 0,
    selectedAnswer: null,
    currentQuestion: null,
    usedSlugs: [],
    timeLeft: null,
    currentStreak: 0,
    maxStreak: 0,
    questionStartedAt: null,
    fastAnswerCount: 0,
  };
}

export function useGameState(
  pool: Country[],
  continent?: Continent | null,
) {
  const [state, setState] = useState<GameState>(createInitialState);

  const filteredPool = useMemo(
    () => (continent ? filterByContinent(pool, continent) : pool),
    [pool, continent],
  );

  const selectDifficulty = useCallback((difficulty: Difficulty) => {
    setState((prev) => {
      if (prev.status !== "idle") return prev;
      return { ...prev, difficulty };
    });
  }, []);

  const startGame = useCallback(() => {
    setState((prev) => {
      const question = generateQuestion(filteredPool);
      return {
        ...createInitialState(),
        difficulty: prev.difficulty,
        status: "playing",
        currentQuestion: question,
        usedSlugs: question ? [question.correct.slug] : [],
        timeLeft: TIMER_DURATIONS[prev.difficulty],
        questionStartedAt: Date.now(),
      };
    });
  }, [filteredPool]);

  const exitGame = useCallback(() => {
    setState(createInitialState());
  }, []);

  const submitAnswer = useCallback((slug: string) => {
    setState((prev) => {
      if (prev.status !== "playing" || !prev.currentQuestion) return prev;

      const isCorrect = slug === prev.currentQuestion.correct.slug;

      if (isCorrect) {
        const timeTaken = Date.now() - (prev.questionStartedAt ?? Date.now());
        const isFast = timeTaken < FAST_ANSWER_THRESHOLD_MS;
        const newStreak = prev.currentStreak + 1;
        return {
          ...prev,
          status: "correct",
          score: prev.score + POINTS_PER_CORRECT,
          selectedAnswer: slug,
          timeLeft: null,
          currentStreak: newStreak,
          maxStreak: Math.max(prev.maxStreak, newStreak),
          fastAnswerCount: isFast ? prev.fastAnswerCount + 1 : prev.fastAnswerCount,
        };
      }

      // Always go to "wrong" first (even on last life) so the feedback delay is visible
      const newLives = prev.lives - 1;
      return {
        ...prev,
        status: "wrong",
        lives: newLives,
        selectedAnswer: slug,
        timeLeft: null,
        currentStreak: 0,
      };
    });
  }, []);

  // Destructure stable primitives for use as effect dependencies
  const { status, timeLeft } = state;

  // Countdown: decrement timeLeft by 1 every second while playing
  useEffect(() => {
    if (status !== "playing" || timeLeft === null || timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setState((prev) => {
        if (prev.status !== "playing" || prev.timeLeft === null || prev.timeLeft <= 0) return prev;
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [status, timeLeft]);

  // Timeout: when timeLeft reaches 0 while still playing, always go to "timeout" first
  useEffect(() => {
    if (status !== "playing" || timeLeft !== 0) return;

    // Defer setState to avoid synchronous state update within an effect
    const timer = setTimeout(() => {
      setState((prev) => {
        if (prev.status !== "playing" || prev.timeLeft !== 0) return prev;
        const newLives = prev.lives - 1;
        return {
          ...prev,
          status: "timeout",
          lives: newLives,
          currentStreak: 0,
        };
      });
    }, 0);

    return () => clearTimeout(timer);
  }, [status, timeLeft]);

  // Auto-advance: move to next question after feedback delay
  // If lives reached 0, route to gameOver instead of advancing
  useEffect(() => {
    if (status !== "correct" && status !== "wrong" && status !== "timeout") return;

    const timer = setTimeout(() => {
      setState((prev) => {
        if (prev.status !== "correct" && prev.status !== "wrong" && prev.status !== "timeout") {
          return prev;
        }

        // Last life was just spent — go to game over now that feedback was shown
        if (prev.lives <= 0) return { ...prev, status: "gameOver" };

        const question = generateQuestion(filteredPool, prev.usedSlugs);
        if (!question) return { ...prev, status: "gameOver" };

        return {
          ...prev,
          status: "playing",
          questionIndex: prev.questionIndex + 1,
          selectedAnswer: null,
          currentQuestion: question,
          usedSlugs: [...prev.usedSlugs, question.correct.slug],
          timeLeft: TIMER_DURATIONS[prev.difficulty],
          questionStartedAt: Date.now(),
        };
      });
    }, AUTO_ADVANCE_DELAY);

    return () => clearTimeout(timer);
  }, [status, filteredPool]);

  return {
    state,
    selectDifficulty,
    startGame,
    exitGame,
    submitAnswer,
  };
}
