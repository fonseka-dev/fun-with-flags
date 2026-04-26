"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Country, Difficulty, InsigniaId } from "@/data/types";
import { avatarUrl } from "@/data/types";
import { useGameState, TIMER_DURATIONS, SCORE_MULTIPLIERS } from "@/lib/hooks/useGameState";
import { useUserProgress } from "@/lib/hooks/useUserProgress";
import { evaluateInsignias, INSIGNIAS } from "@/lib/utils/insignias";
import { FlagDisplay } from "./FlagDisplay";
import { AnswerOptions } from "./AnswerOptions";
import { ScoreBoard } from "./ScoreBoard";
import { LivesDisplay } from "./LivesDisplay";
import { TimerDisplay } from "./TimerDisplay";
import { Button } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";

type FlagQuizProps = {
  pool: Country[];
  onGameOver?: (score: number, insignias: InsigniaId[], correctInGame: number) => void;
};

type GameOverSnapshot = {
  finalScore: number;
  isFinalScoreNewRecord: boolean;
  earnedInsignias: InsigniaId[];
  correctInGame: number;
};

const DIFFICULTIES: { key: Difficulty; descKey: string }[] = [
  { key: "easy", descKey: "easyDesc" },
  { key: "normal", descKey: "normalDesc" },
  { key: "hard", descKey: "hardDesc" },
];

const POINTS_PER_CORRECT = 100;

const DIFFICULTY_MULTIPLIER_LABEL: Record<Difficulty, string | null> = {
  easy: null,
  normal: null,
  hard: "difficultyMultiplierHard",
};

export function FlagQuiz({ pool, onGameOver }: FlagQuizProps) {
  const t = useTranslations("quiz");
  const { state, selectDifficulty, startGame, exitGame, submitAnswer } = useGameState(pool);
  const { progress } = useUserProgress();

  // Snapshot of game-over results — computed once during render (ref, not state)
  const snapshotRef = useRef<GameOverSnapshot | null>(null);
  const gameOverFiredRef = useRef(false);

  // Reset snapshot when a new game starts so next game-over can compute fresh
  if (state.status === "idle" || state.status === "playing") {
    snapshotRef.current = null;
    gameOverFiredRef.current = false;
  }

  // Compute snapshot on the first render in gameOver status (during render, no setState)
  if (state.status === "gameOver" && !snapshotRef.current) {
    const correctInGame = Math.round(state.score / POINTS_PER_CORRECT);
    const multiplier = SCORE_MULTIPLIERS[state.difficulty];
    const computed = state.score * multiplier;
    const isRecord = !!progress && computed > 0 && computed > (progress.quizHighScore ?? 0);
    const gameResult = {
      difficulty: state.difficulty,
      livesRemaining: state.lives,
      maxStreak: state.maxStreak,
      totalQuestions: state.questionIndex + 1,
      fastAnswerCount: state.fastAnswerCount,
      correctInGame,
    };
    const newInsignias = progress ? evaluateInsignias(gameResult, progress) : [];
    snapshotRef.current = {
      finalScore: computed,
      isFinalScoreNewRecord: isRecord,
      earnedInsignias: newInsignias,
      correctInGame,
    };
  }

  // Side effect: fire onGameOver once (no setState here)
  useEffect(() => {
    if (state.status !== "gameOver") return;
    if (gameOverFiredRef.current) return;
    const snap = snapshotRef.current;
    if (!snap) return;
    gameOverFiredRef.current = true;
    onGameOver?.(snap.finalScore, snap.earnedInsignias, snap.correctInGame);
  }, [state.status, onGameOver]);

  function handleExitGame() {
    // Save partial score before resetting (only if game was in progress and has score)
    if (state.score > 0 && !gameOverFiredRef.current) {
      gameOverFiredRef.current = true;
      const correctInGame = Math.round(state.score / POINTS_PER_CORRECT);
      const multiplier = SCORE_MULTIPLIERS[state.difficulty];
      const computed = state.score * multiplier;
      const gameResult = {
        difficulty: state.difficulty,
        livesRemaining: state.lives,
        maxStreak: state.maxStreak,
        totalQuestions: state.questionIndex + 1,
        fastAnswerCount: state.fastAnswerCount,
        correctInGame,
      };
      const newInsignias = progress ? evaluateInsignias(gameResult, progress) : [];
      onGameOver?.(computed, newInsignias, correctInGame);
    }
    exitGame();
  }

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
        <p className="text-white/80 text-lg text-center max-w-md leading-[1.6]">
          {t("subtitle")}
        </p>

        {/* Difficulty picker */}
        <div className="flex flex-col items-center gap-3 w-full max-w-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-white/70">
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

        <Button variant="inverted" onClick={startGame}>
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
    const snap = snapshotRef.current!;
    const isEasy = state.difficulty === "easy";
    const multiplierLabelKey = DIFFICULTY_MULTIPLIER_LABEL[state.difficulty];

    return (
      <div className="flex flex-col items-center justify-center py-12 gap-8 w-full">
        {/* Hero avatar */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-tertiary-container rounded-full ring-8 ring-on-tertiary/20 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatarUrl(progress?.avatarSeed ?? "explorer")}
            alt={progress?.nickname ?? "Explorer"}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
            {t("gameOver", { name: progress?.nickname ?? "Explorer" })}
          </h2>
          <p className="text-white/80 text-lg font-medium">
            {t("correctAnswered", { count: snap.correctInGame })}
          </p>
        </div>

        {/* Score section */}
        {isEasy ? (
          <div className="w-full max-w-md bg-white/10 rounded-xl p-8 text-center border border-white/10">
            <span
              className="material-symbols-outlined text-4xl text-white mb-3 block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              info
            </span>
            <p className="text-white/85 font-medium leading-[1.6]">
              {t("easyNoScore")}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            {/* Base score + multiplier */}
            <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col items-center justify-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                {t("basePoints")}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-black text-primary">
                  {state.score.toLocaleString()}
                </span>
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  stars
                </span>
              </div>
              {multiplierLabelKey && (
                <div className="pt-3 flex items-center gap-3 w-full border-t border-outline-variant/10">
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase">
                    {t(multiplierLabelKey)}
                  </span>
                  <span className="text-xl font-bold text-secondary">
                    ×{SCORE_MULTIPLIERS[state.difficulty]}
                  </span>
                </div>
              )}
            </div>

            {/* Total score */}
            <div className="bg-primary text-white p-8 rounded-xl flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-10 -mt-10" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-8 -mb-8" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">
                {t("totalScore")}
              </span>
              <span className="text-5xl font-black tracking-tighter">
                {snap.finalScore.toLocaleString()}
              </span>
              {snap.isFinalScoreNewRecord && (
                <span className="mt-2 text-primary-fixed font-bold text-sm uppercase tracking-widest">
                  {t("newRecord")}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Button variant="primary" onClick={startGame}>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined">replay</span>
              {t("playAgain")}
            </span>
          </Button>
          <Link href="/">
            <Button
              variant="ghost"
              className="bg-white/12 text-white border border-white/20 hover:bg-white/22 hover:text-white"
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined">home</span>
                {t("backToHome")}
              </span>
            </Button>
          </Link>
        </div>

        {/* Insignias row */}
        {snap.earnedInsignias.length > 0 && (
          <div className="w-full max-w-2xl">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">workspace_premium</span>
              {t("insigniasUnlocked")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {snap.earnedInsignias.map((id, idx) => {
                const insignia = INSIGNIAS[id];
                return (
                  <div
                    key={id}
                    className="animate-insignia-pop bg-surface-container-lowest p-4 rounded-xl flex items-center gap-3 shadow-sm"
                    style={{ animationDelay: `${idx * 120}ms` }}
                  >
                    <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center shrink-0">
                      <span
                        className={`material-symbols-outlined text-2xl ${insignia.colorClass}`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {insignia.icon}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface leading-tight text-sm">
                        {t(insignia.labelKey)}
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        {t(insignia.descKey)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Active game
  const { currentQuestion, score, lives, selectedAnswer, status, difficulty, timeLeft } = state;

  if (!currentQuestion) return null;

  const totalTime = TIMER_DURATIONS[difficulty];
  const showTimer = difficulty !== "easy" && timeLeft !== null;
  const isEasyMode = difficulty === "easy";

  return (
    <div className="flex flex-col items-center w-full">
      {/* Score + Timer + Lives header */}
      <div className="w-full flex justify-between items-center mb-4">
        {isEasyMode ? (
          <p className="text-sm text-white font-medium flex items-center gap-1">
            <span className="material-symbols-outlined text-base">info</span>
            {t("easyNoScoreShort")}
          </p>
        ) : (
          <ScoreBoard score={score} />
        )}
        {showTimer && (
          <TimerDisplay timeLeft={timeLeft} totalTime={totalTime!} />
        )}
        <div className="flex items-center gap-3">
          <LivesDisplay lives={lives} />
          <button
            onClick={handleExitGame}
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/15 text-white hover:bg-white/25 transition-colors"
            aria-label={t("exitGame")}
            title={t("exitGame")}
          >
            <span className="material-symbols-outlined text-xl">exit_to_app</span>
          </button>
        </div>
      </div>

      {/* Question card */}
      <div className="w-full bg-transparent rounded-xl p-4 md:p-6 flex flex-col items-center relative overflow-visible">
        <h1 className="text-xl md:text-2xl font-extrabold text-center mb-3 text-white">
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

