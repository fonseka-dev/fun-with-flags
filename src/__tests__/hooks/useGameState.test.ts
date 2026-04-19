import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useGameState } from "@/lib/hooks/useGameState";
import { countries } from "@/data/countries";

describe("useGameState", () => {
  it("starts in idle status with default difficulty normal", () => {
    const { result } = renderHook(() => useGameState(countries));
    expect(result.current.state.status).toBe("idle");
    expect(result.current.state.score).toBe(0);
    expect(result.current.state.lives).toBe(3);
    expect(result.current.state.difficulty).toBe("normal");
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
    act(() => {
      result.current.selectDifficulty("easy");
      result.current.startGame();
    });
    const correctSlug = result.current.state.currentQuestion!.correct.slug;
    act(() => result.current.submitAnswer(correctSlug));
    expect(result.current.state.status).toBe("correct");
    expect(result.current.state.score).toBe(100);
    expect(result.current.state.lives).toBe(3);
  });

  it("loses a life for a wrong answer", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => {
      result.current.selectDifficulty("easy");
      result.current.startGame();
    });
    const correctSlug = result.current.state.currentQuestion!.correct.slug;
    const wrongSlug = result.current.state.currentQuestion!.options.find(
      (o) => o.slug !== correctSlug,
    )!.slug;
    act(() => result.current.submitAnswer(wrongSlug));
    expect(result.current.state.status).toBe("wrong");
    expect(result.current.state.lives).toBe(2);
    expect(result.current.state.score).toBe(0);
  });

  it("transitions to gameOver when lives reach 0", () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useGameState(countries));
    act(() => {
      result.current.selectDifficulty("easy");
      result.current.startGame();
    });

    for (let i = 0; i < 3; i++) {
      const correctSlug = result.current.state.currentQuestion!.correct.slug;
      const wrongSlug = result.current.state.currentQuestion!.options.find(
        (o) => o.slug !== correctSlug,
      )!.slug;
      act(() => result.current.submitAnswer(wrongSlug));
      if (i < 2) {
        // Allow auto-advance to fire
        act(() => vi.advanceTimersByTime(500));
      }
    }
    expect(result.current.state.status).toBe("gameOver");
    expect(result.current.state.lives).toBe(0);
    vi.useRealTimers();
  });

  it("resets state on startGame after gameOver", () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useGameState(countries));
    act(() => {
      result.current.selectDifficulty("easy");
      result.current.startGame();
    });

    for (let i = 0; i < 3; i++) {
      const correctSlug = result.current.state.currentQuestion!.correct.slug;
      const wrongSlug = result.current.state.currentQuestion!.options.find(
        (o) => o.slug !== correctSlug,
      )!.slug;
      act(() => result.current.submitAnswer(wrongSlug));
      if (i < 2) act(() => vi.advanceTimersByTime(500));
    }

    act(() => result.current.startGame());
    expect(result.current.state.status).toBe("playing");
    expect(result.current.state.score).toBe(0);
    expect(result.current.state.lives).toBe(3);
    expect(result.current.state.questionIndex).toBe(0);
    vi.useRealTimers();
  });
});

describe("useGameState — difficulty", () => {
  it("selectDifficulty updates difficulty when idle", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => result.current.selectDifficulty("hard"));
    expect(result.current.state.difficulty).toBe("hard");
  });

  it("selectDifficulty is ignored when not idle", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => result.current.startGame());
    act(() => result.current.selectDifficulty("easy"));
    expect(result.current.state.difficulty).toBe("normal"); // unchanged
  });

  it("easy mode starts with null timeLeft", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => {
      result.current.selectDifficulty("easy");
      result.current.startGame();
    });
    expect(result.current.state.timeLeft).toBeNull();
  });

  it("normal mode starts with timeLeft 5", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => {
      result.current.selectDifficulty("normal");
      result.current.startGame();
    });
    expect(result.current.state.timeLeft).toBe(5);
  });

  it("hard mode starts with timeLeft 3", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => {
      result.current.selectDifficulty("hard");
      result.current.startGame();
    });
    expect(result.current.state.timeLeft).toBe(3);
  });

  it("startGame preserves the selected difficulty", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => result.current.selectDifficulty("hard"));
    act(() => result.current.startGame());
    expect(result.current.state.difficulty).toBe("hard");
  });
});

describe("useGameState — timer", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("counts down timeLeft by 1 each second", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => {
      result.current.selectDifficulty("normal");
      result.current.startGame();
    });
    expect(result.current.state.timeLeft).toBe(5);

    act(() => vi.advanceTimersByTime(1000));
    expect(result.current.state.timeLeft).toBe(4);

    act(() => vi.advanceTimersByTime(1000));
    expect(result.current.state.timeLeft).toBe(3);
  });

  it("stops the timer when answer is submitted (easy mode stays null)", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => {
      result.current.selectDifficulty("easy");
      result.current.startGame();
    });

    const correctSlug = result.current.state.currentQuestion!.correct.slug;
    act(() => result.current.submitAnswer(correctSlug));

    expect(result.current.state.timeLeft).toBeNull();
    act(() => vi.advanceTimersByTime(2000));
    expect(result.current.state.timeLeft).toBeNull(); // still null in easy mode
  });

  it("transitions to timeout and deducts a life when timer expires", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => {
      result.current.selectDifficulty("hard");
      result.current.startGame();
    });
    expect(result.current.state.timeLeft).toBe(3);
    expect(result.current.state.lives).toBe(3);

    // Advance 3 ticks to reach timeLeft=0, then flush the deferred timeout handler
    act(() => vi.advanceTimersByTime(1000));
    act(() => vi.advanceTimersByTime(1000));
    act(() => vi.advanceTimersByTime(1000));
    act(() => vi.advanceTimersByTime(0));

    expect(result.current.state.status).toBe("timeout");
    expect(result.current.state.lives).toBe(2);
  });

  it("transitions to gameOver when last life lost on timeout", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => {
      result.current.selectDifficulty("hard");
      result.current.startGame();
    });

    // Lose 2 lives via wrong answers first
    for (let i = 0; i < 2; i++) {
      const correctSlug = result.current.state.currentQuestion!.correct.slug;
      const wrongSlug = result.current.state.currentQuestion!.options.find(
        (o) => o.slug !== correctSlug,
      )!.slug;
      act(() => result.current.submitAnswer(wrongSlug));
      act(() => vi.advanceTimersByTime(500)); // auto-advance
    }
    expect(result.current.state.lives).toBe(1);

    // Now let the timer expire on the last life
    act(() => vi.advanceTimersByTime(1000));
    act(() => vi.advanceTimersByTime(1000));
    act(() => vi.advanceTimersByTime(1000));
    act(() => vi.advanceTimersByTime(0));

    expect(result.current.state.status).toBe("gameOver");
    expect(result.current.state.lives).toBe(0);
  });
});

describe("useGameState — auto-advance", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("auto-advances to next question 500ms after correct answer", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => {
      result.current.selectDifficulty("easy");
      result.current.startGame();
    });
    const correctSlug = result.current.state.currentQuestion!.correct.slug;
    act(() => result.current.submitAnswer(correctSlug));
    expect(result.current.state.status).toBe("correct");

    act(() => vi.advanceTimersByTime(500));
    expect(result.current.state.status).toBe("playing");
    expect(result.current.state.questionIndex).toBe(1);
  });

  it("auto-advances to next question 500ms after wrong answer", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => {
      result.current.selectDifficulty("easy");
      result.current.startGame();
    });
    const correctSlug = result.current.state.currentQuestion!.correct.slug;
    const wrongSlug = result.current.state.currentQuestion!.options.find(
      (o) => o.slug !== correctSlug,
    )!.slug;
    act(() => result.current.submitAnswer(wrongSlug));
    expect(result.current.state.status).toBe("wrong");

    act(() => vi.advanceTimersByTime(500));
    expect(result.current.state.status).toBe("playing");
    expect(result.current.state.questionIndex).toBe(1);
  });

  it("auto-advances after timeout", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => {
      result.current.selectDifficulty("hard");
      result.current.startGame();
    });

    // Expire timer (flush the deferred timeout setState with +0ms)
    act(() => vi.advanceTimersByTime(1000));
    act(() => vi.advanceTimersByTime(1000));
    act(() => vi.advanceTimersByTime(1000));
    act(() => vi.advanceTimersByTime(0));
    expect(result.current.state.status).toBe("timeout");

    // Auto-advance fires
    act(() => vi.advanceTimersByTime(500));
    expect(result.current.state.status).toBe("playing");
    expect(result.current.state.questionIndex).toBe(1);
  });

  it("does not advance before 500ms", () => {
    const { result } = renderHook(() => useGameState(countries));
    act(() => {
      result.current.selectDifficulty("easy");
      result.current.startGame();
    });
    const correctSlug = result.current.state.currentQuestion!.correct.slug;
    act(() => result.current.submitAnswer(correctSlug));

    act(() => vi.advanceTimersByTime(300));
    expect(result.current.state.status).toBe("correct"); // still showing feedback
  });
});
