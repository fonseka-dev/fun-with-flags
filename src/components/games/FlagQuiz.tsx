"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Country, Difficulty } from "@/data/types";
import { useGameState, TIMER_DURATIONS } from "@/lib/hooks/useGameState";
import { FlagDisplay } from "./FlagDisplay";
import { AnswerOptions } from "./AnswerOptions";
import { ScoreBoard } from "./ScoreBoard";
import { LivesDisplay } from "./LivesDisplay";
import { TimerDisplay } from "./TimerDisplay";
import { Button } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";

type FlagQuizProps = {
  pool: Country[];
  onGameOver?: (score: number) => void;
};

const DIFFICULTIES: { key: Difficulty; descKey: string }[] = [
  { key: "easy", descKey: "easyDesc" },
  { key: "normal", descKey: "normalDesc" },
  { key: "hard", descKey: "hardDesc" },
];

export function FlagQuiz({ pool, onGameOver }: FlagQuizProps) {
  const t = useTranslations("quiz");
  const { state, selectDifficulty, startGame, submitAnswer } = useGameState(pool);

  useEffect(() => {
    if (state.status === "gameOver" && onGameOver) {
      onGameOver(state.score);
    }
  }, [state.status, state.score, onGameOver]);

  // Idle screen
  if (state.status === "idle") {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-8">
        <span className="material-symbols-outlined text-8xl text-primary">
          flag
        </span>
        <h2 className="text-4xl font-extrabold text-on-background text-center">
          {t("title")}
        </h2>
        <p className="text-on-surface-variant text-lg text-center max-w-md leading-[1.6]">
          {t("subtitle")}
        </p>

        {/* Difficulty picker */}
        <div className="flex flex-col items-center gap-3 w-full max-w-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">
            {t("selectDifficulty")}
          </p>
          <div className="flex gap-3 w-full">
            {DIFFICULTIES.map(({ key, descKey }) => {
              const isSelected = state.difficulty === key;
              return (
                <button
                  key={key}
                  onClick={() => selectDifficulty(key)}
                  className={`
                    flex-1 flex flex-col items-center gap-1 py-3 px-2 rounded-xl
                    border-2 transition-bounce
                    ${isSelected
                      ? "bg-secondary-container text-on-secondary-container border-secondary"
                      : "bg-surface-container text-on-surface-variant border-transparent hover:bg-surface-container-highest"
                    }
                  `}
                >
                  <span className="text-sm font-extrabold capitalize">{t(key)}</span>
                  <span className="text-xs opacity-70">{t(descKey)}</span>
                </button>
              );
            })}
          </div>
        </div>

        <Button variant="primary" onClick={startGame}>
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined">play_arrow</span>
            {t("startGame")}
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
          {t("gameOver")}
        </h2>
        <p className="text-6xl font-extrabold text-primary">
          {state.score.toLocaleString()}
        </p>
        <p className="text-on-surface-variant text-lg">
          {t("questionsAnswered", { count: state.questionIndex + 1 })}
        </p>
        <div className="flex gap-4">
          <Button variant="primary" onClick={startGame}>
            {t("playAgain")}
          </Button>
          <Link href="/">
            <Button variant="ghost">{t("backToHome")}</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Active game
  const { currentQuestion, score, lives, selectedAnswer, status, difficulty, timeLeft } = state;

  if (!currentQuestion) return null;

  const totalTime = TIMER_DURATIONS[difficulty];
  const showTimer = difficulty !== "easy" && timeLeft !== null;

  return (
    <div className="flex flex-col items-center w-full">
      {/* Score + Timer + Lives header */}
      <div className="w-full flex justify-between items-end mb-10">
        <ScoreBoard score={score} />
        {showTimer && (
          <TimerDisplay timeLeft={timeLeft} totalTime={totalTime!} />
        )}
        <LivesDisplay lives={lives} />
      </div>

      {/* Question card */}
      <div className="w-full bg-surface-container-low rounded-xl p-8 md:p-12 flex flex-col items-center relative overflow-hidden">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-on-background">
          {t("whoAmI")}
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
    </div>
  );
}

