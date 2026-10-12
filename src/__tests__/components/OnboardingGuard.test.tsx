import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, cleanup, act } from "@testing-library/react";
import { AuthProvider } from "@/lib/providers/AuthProvider";
import { OnboardingGuard } from "@/components/auth/OnboardingGuard";
import type { UserProgress } from "@/data/types";

/**
 * Regression test for the "Explore from the map popup dumps you into
 * onboarding" bug.
 *
 * Hard reloading a page (the popup uses a plain <a>, so it does a full
 * document load) makes Firebase fire onAuthStateChanged twice: once with
 * `null` before the persisted session is restored, then again with the
 * signed-in Google user. The progress document is only fetched after that
 * second callback, so there is a window where we know the user is
 * non-anonymous but do not yet know whether they finished onboarding.
 * The guard must not redirect during that window.
 */

type AuthCallback = (user: unknown) => void;

let authCallbacks: AuthCallback[] = [];

const googleUser = {
  uid: "google-uid-1",
  isAnonymous: false,
  displayName: null,
};

const baseProgress: UserProgress = {
  uid: "google-uid-1",
  nickname: "George",
  isAnonymous: false,
  avatarSeed: "seed-1",
  onboardingComplete: true,
  tier: "free",
  discoveredCountries: ["mexico"],
  quizHighScore: 120,
  quizGamesPlayed: 3,
  totalCorrectAnswers: 24,
  earnedInsignias: [],
  lastPlayedAt: new Date(0),
};

const onboardedProgress: UserProgress = { ...baseProgress, onboardingComplete: true };
const needsOnboardingProgress: UserProgress = {
  ...baseProgress,
  onboardingComplete: false,
};

let resolveAnonymousSession: (user: unknown) => void;
let resolveProgress: (progress: UserProgress | null) => void;

vi.mock("firebase/auth", () => ({
  onAuthStateChanged: (_auth: unknown, cb: AuthCallback) => {
    authCallbacks.push(cb);
    return () => {};
  },
}));

vi.mock("@/lib/firebase", () => ({
  isFirebaseConfigured: () => true,
  getAuthClient: () => ({}),
  signInAnonymouslyIfNeeded: () => new Promise((resolve) => {
    resolveAnonymousSession = resolve;
  }),
  initUserProgress: () => Promise.resolve(),
  getUserProgress: () => new Promise<UserProgress | null>((resolve) => {
    resolveProgress = resolve;
  }),
  linkAnonymousWithGoogle: vi.fn(),
  signOutUser: vi.fn(),
  addDiscoveredCountry: vi.fn(() => Promise.resolve()),
  saveQuizResult: vi.fn(() => Promise.resolve()),
  updateUserTier: vi.fn(() => Promise.resolve()),
  updateAvatar: vi.fn(() => Promise.resolve()),
  completeOnboarding: vi.fn(() => Promise.resolve()),
  generatePseudonym: () => "Explorer #1234",
  upsertLeaderboardEntry: vi.fn(() => Promise.resolve()),
}));

const replace = vi.fn();

vi.mock("@/i18n/navigation", () => ({
  usePathname: () => "/catalog/mexico",
  useRouter: () => ({ replace, push: vi.fn(), back: vi.fn() }),
  Link: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

/** Flush pending microtasks so the provider's async callbacks advance. */
const flush = () => act(async () => { await Promise.resolve(); await Promise.resolve(); });

describe("OnboardingGuard", () => {
  beforeEach(() => {
    authCallbacks = [];
    replace.mockReset();
    cleanup();
  });

  afterEach(() => {
    cleanup();
  });

  it("does not redirect to onboarding while the progress document is still loading", async () => {
    render(
      <AuthProvider>
        <OnboardingGuard />
      </AuthProvider>,
    );

    expect(authCallbacks).toHaveLength(1);
    const onAuthStateChanged = authCallbacks[0];

    // 1) Firebase's first callback: no user yet, session still restoring.
    await act(async () => {
      void onAuthStateChanged(null);
      await Promise.resolve();
    });

    // 2) Session restored → provider sets the user, then starts fetching progress.
    await act(async () => {
      void onAuthStateChanged(googleUser);
      await Promise.resolve();
    });
    await flush();

    // 3) The anonymous fallback resolves → provider clears `loading` while the
    //    progress fetch is still in flight.
    await act(async () => {
      resolveAnonymousSession(googleUser);
      await Promise.resolve();
    });
    await flush();

    expect(replace).not.toHaveBeenCalledWith("/onboarding");

    // 4) Progress finally lands: the user HAS completed onboarding, so no redirect.
    await act(async () => {
      resolveProgress(onboardedProgress);
      await Promise.resolve();
    });
    await flush();

    expect(replace).not.toHaveBeenCalledWith("/onboarding");
  });

  it("still redirects a signed-in user who has not completed onboarding", async () => {
    render(
      <AuthProvider>
        <OnboardingGuard />
      </AuthProvider>,
    );

    const onAuthStateChanged = authCallbacks[0];

    await act(async () => {
      void onAuthStateChanged(googleUser);
      await Promise.resolve();
    });
    await flush();

    await act(async () => {
      resolveProgress(needsOnboardingProgress);
      await Promise.resolve();
    });
    await flush();

    expect(replace).toHaveBeenCalledWith("/onboarding");
  });
});
