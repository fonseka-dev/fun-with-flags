"use client";

import { Country } from "@/data/types";
import { useGameState } from "@/lib/hooks/useGameState";
import { FlagDisplay } from "./FlagDisplay";
import { AnswerOptions } from "./AnswerOptions";
import { ScoreBoard } from "./ScoreBoard";
import { LivesDisplay } from "./LivesDisplay";
import { HintCard } from "./HintCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

type FlagQuizProps = {
  pool: Country[];
};

export function FlagQuiz({ pool }: FlagQuizProps) {
  const { state, startGame, submitAnswer, nextQuestion } = useGameState(pool);

  // Idle screen
  if (state.status === "idle") {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-8">
        <span className="material-symbols-outlined text-8xl text-primary">
          flag
        </span>
        <h2 className="text-4xl font-extrabold text-on-background text-center">
          Guess the Flag!
        </h2>
        <p className="text-on-surface-variant text-lg text-center max-w-md leading-[1.6]">
          Can you identify which country a flag belongs to? Test your knowledge
          across regions and continents!
        </p>
        <Button variant="primary" onClick={startGame}>
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined">play_arrow</span>
            Start Game
          </span>
        </Button>
      </div>
    );
  }

  // Game Over screen
  if (state.status === "gameOver") {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-8">
        <span className="material-symbols-outlined text-8xl text-tertiary">
          emoji_events
        </span>
        <h2 className="text-4xl font-extrabold text-on-background text-center">
          Game Over!
        </h2>
        <p className="text-6xl font-extrabold text-primary">
          {state.score.toLocaleString()}
        </p>
        <p className="text-on-surface-variant text-lg">
          You answered {state.questionIndex + 1} questions
        </p>
        <div className="flex gap-4">
          <Button variant="primary" onClick={startGame}>
            Play Again
          </Button>
          <Link href="/">
            <Button variant="ghost">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Active game
  const { currentQuestion, score, lives, selectedAnswer, status } = state;

  if (!currentQuestion) return null;

  return (
    <div className="flex flex-col items-center w-full">
      {/* Score + Lives header */}
      <div className="w-full flex justify-between items-end mb-10">
        <ScoreBoard score={score} />
        <LivesDisplay lives={lives} />
      </div>

      {/* Question card */}
      <div className="w-full bg-surface-container-low rounded-xl p-8 md:p-12 flex flex-col items-center relative overflow-hidden">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-on-background">
          Who am I?
        </h1>
        <FlagDisplay country={currentQuestion.correct} />
      </div>

      {/* Answer options */}
      <AnswerOptions
        options={currentQuestion.options}
        correctSlug={currentQuestion.correct.slug}
        selectedAnswer={selectedAnswer}
        status={status}
        onSelect={submitAnswer}
      />

      {/* Hint (shows after wrong answer) */}
      {status === "wrong" && (
        <HintCard hint={currentQuestion.correct.flagDescription} />
      )}

      {/* Next button (shows after answering) */}
      {(status === "correct" || status === "wrong") && (
        <div className="mt-8">
          <Button variant="primary" onClick={nextQuestion}>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined">arrow_forward</span>
              Next Question
            </span>
          </Button>
        </div>
      )}
    </div>
  );
}
