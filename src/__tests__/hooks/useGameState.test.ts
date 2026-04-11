import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useGameState } from "@/lib/hooks/useGameState";
import { countries } from "@/data/countries";

describe("useGameState", () => {
  it("starts in idle status", () => {
    const { result } = renderHook(() => useGameState(countries));
    expect(result.current.state.status).toBe("idle");
    expect(result.current.state.score).toBe(0);
    expect(result.current.state.lives).toBe(3);
  });

  it("transitions to playing on startGame", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => result.current.startGame());
    expect(result.current.state.status).toBe("playing");
    expect(result.current.state.currentQuestion).toBeDefined();
    expect(result.current.state.currentQuestion!.options).toHaveLength(4);
  });

  it("awards 100 points for a correct answer", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => result.current.startGame());
    const correctSlug = result.current.state.currentQuestion!.correct.slug;
    act(() => result.current.submitAnswer(correctSlug));
    expect(result.current.state.status).toBe("correct");
    expect(result.current.state.score).toBe(100);
    expect(result.current.state.lives).toBe(3);
  });

  it("loses a life for a wrong answer", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => result.current.startGame());
    const correctSlug = result.current.state.currentQuestion!.correct.slug;
    const wrongSlug = result.current.state.currentQuestion!.options.find(
      (o) => o.slug !== correctSlug,
    )!.slug;
    act(() => result.current.submitAnswer(wrongSlug));
    expect(result.current.state.status).toBe("wrong");
    expect(result.current.state.lives).toBe(2);
    expect(result.current.state.score).toBe(0);
  });

  it("advances to next question via nextQuestion", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => result.current.startGame());
    const correctSlug = result.current.state.currentQuestion!.correct.slug;
    act(() => result.current.submitAnswer(correctSlug));
    act(() => result.current.nextQuestion());
    expect(result.current.state.status).toBe("playing");
    expect(result.current.state.questionIndex).toBe(1);
  });

  it("transitions to gameOver when lives reach 0", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => result.current.startGame());

    // Lose 3 lives
    for (let i = 0; i < 3; i++) {
      const correctSlug = result.current.state.currentQuestion!.correct.slug;
      const wrongSlug = result.current.state.currentQuestion!.options.find(
        (o) => o.slug !== correctSlug,
      )!.slug;
      act(() => result.current.submitAnswer(wrongSlug));
      if (i < 2) {
        act(() => result.current.nextQuestion());
      }
    }
    expect(result.current.state.status).toBe("gameOver");
    expect(result.current.state.lives).toBe(0);
  });

  it("resets state on startGame after gameOver", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => result.current.startGame());

    for (let i = 0; i < 3; i++) {
      const correctSlug = result.current.state.currentQuestion!.correct.slug;
      const wrongSlug = result.current.state.currentQuestion!.options.find(
        (o) => o.slug !== correctSlug,
      )!.slug;
      act(() => result.current.submitAnswer(wrongSlug));
      if (i < 2) act(() => result.current.nextQuestion());
    }

    act(() => result.current.startGame());
    expect(result.current.state.status).toBe("playing");
    expect(result.current.state.score).toBe(0);
    expect(result.current.state.lives).toBe(3);
    expect(result.current.state.questionIndex).toBe(0);
  });
});
