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
};

const INITIAL_LIVES = 3;
const POINTS_PER_CORRECT = 100;

export const TIMER_DURATIONS: Record<Difficulty, number | null> = {
  easy: null,
  normal: 5,
  hard: 3,
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
      };
    });
  }, [filteredPool]);

  const submitAnswer = useCallback((slug: string) => {
    setState((prev) => {
      if (prev.status !== "playing" || !prev.currentQuestion) return prev;

      const isCorrect = slug === prev.currentQuestion.correct.slug;

      if (isCorrect) {
        return {
          ...prev,
          status: "correct",
          score: prev.score + POINTS_PER_CORRECT,
          selectedAnswer: slug,
          timeLeft: null,
        };
      }

      const newLives = prev.lives - 1;
      return {
        ...prev,
        status: newLives <= 0 ? "gameOver" : "wrong",
        lives: newLives,
        selectedAnswer: slug,
        timeLeft: null,
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

  // Timeout: when timeLeft reaches 0 while still playing, treat as a wrong answer
  useEffect(() => {
    if (status !== "playing" || timeLeft !== 0) return;

    // Defer setState to avoid synchronous state update within an effect
    const timer = setTimeout(() => {
      setState((prev) => {
        if (prev.status !== "playing" || prev.timeLeft !== 0) return prev;
        const newLives = prev.lives - 1;
        return {
          ...prev,
          status: newLives <= 0 ? "gameOver" : "timeout",
          lives: newLives,
        };
      });
    }, 0);

    return () => clearTimeout(timer);
  }, [status, timeLeft]);

  // Auto-advance: move to next question 500ms after answer feedback
  useEffect(() => {
    if (status !== "correct" && status !== "wrong" && status !== "timeout") return;

    const timer = setTimeout(() => {
      setState((prev) => {
        if (prev.status !== "correct" && prev.status !== "wrong" && prev.status !== "timeout") {
          return prev;
        }

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
        };
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [status, filteredPool]);

  return {
    state,
    selectDifficulty,
    startGame,
    submitAnswer,
  };
}
