"use client";

import { useCallback, useState } from "react";
import { Country, Continent } from "@/data/types";
import { generateQuestion, QuizQuestion } from "@/lib/utils/quiz";
import { filterByContinent } from "@/lib/utils/countries";

export type GameStatus =
  | "idle"
  | "playing"
  | "correct"
  | "wrong"
  | "gameOver";

export type GameState = {
  status: GameStatus;
  score: number;
  lives: number;
  questionIndex: number;
  selectedAnswer: string | null;
  currentQuestion: QuizQuestion | null;
  usedSlugs: string[];
};

const INITIAL_LIVES = 3;
const POINTS_PER_CORRECT = 100;

function createInitialState(): GameState {
  return {
    status: "idle",
    score: 0,
    lives: INITIAL_LIVES,
    questionIndex: 0,
    selectedAnswer: null,
    currentQuestion: null,
    usedSlugs: [],
  };
}

export function useGameState(
  pool: Country[],
  continent?: Continent | null,
) {
  const [state, setState] = useState<GameState>(createInitialState);

  const filteredPool =
    continent ? filterByContinent(pool, continent) : pool;

  const startGame = useCallback(() => {
    const question = generateQuestion(filteredPool);
    setState({
      ...createInitialState(),
      status: "playing",
      currentQuestion: question,
      usedSlugs: question ? [question.correct.slug] : [],
    });
  }, [filteredPool]);

  const submitAnswer = useCallback(
    (slug: string) => {
      setState((prev) => {
        if (prev.status !== "playing" || !prev.currentQuestion) return prev;

        const isCorrect = slug === prev.currentQuestion.correct.slug;

        if (isCorrect) {
          return {
            ...prev,
            status: "correct",
            score: prev.score + POINTS_PER_CORRECT,
            selectedAnswer: slug,
          };
        }

        const newLives = prev.lives - 1;
        return {
          ...prev,
          status: newLives <= 0 ? "gameOver" : "wrong",
          lives: newLives,
          selectedAnswer: slug,
        };
      });
    },
    [],
  );

  const nextQuestion = useCallback(() => {
    setState((prev) => {
      if (prev.status !== "correct" && prev.status !== "wrong") return prev;

      const question = generateQuestion(filteredPool, prev.usedSlugs);

      if (!question) {
        return { ...prev, status: "gameOver" };
      }

      return {
        ...prev,
        status: "playing",
        questionIndex: prev.questionIndex + 1,
        selectedAnswer: null,
        currentQuestion: question,
        usedSlugs: [...prev.usedSlugs, question.correct.slug],
      };
    });
  }, [filteredPool]);

  return {
    state,
    startGame,
    submitAnswer,
    nextQuestion,
  };
}
