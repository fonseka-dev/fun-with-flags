import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import OnboardingPage from "@/app/[locale]/onboarding/page";

const mockUseAuth = vi.fn();
const replace = vi.fn();

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

vi.mock("@/i18n/navigation", () => ({
  useRouter: () => ({ replace, push: vi.fn(), back: vi.fn() }),
  Link: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

vi.mock("@/lib/providers/AuthProvider", () => ({
  useAuth: () => mockUseAuth(),
}));

vi.mock("@/components/auth/AvatarPicker", () => ({
  AVATAR_SEEDS: ["seed-1"],
  AvatarPicker: () => <div data-testid="avatar-picker" />,
}));

function signedInNotOnboarded(overrides: Record<string, unknown> = {}) {
  return {
    isAnonymous: false,
    needsOnboarding: true,
    progress: { discoveredCountries: [] },
    progressLoaded: true,
    completeOnboardingFlow: vi.fn(),
    signOut: vi.fn(),
    ...overrides,
  };
}

describe("OnboardingPage", () => {
  beforeEach(() => {
    mockUseAuth.mockReset();
    replace.mockReset();
    cleanup();
  });

  it("does not redirect away while the auth/progress state is still unknown", () => {
    // Before Firebase reports back, the user looks anonymous and progress-less.
    mockUseAuth.mockReturnValue(
      signedInNotOnboarded({ isAnonymous: true, needsOnboarding: false, progressLoaded: false }),
    );

    render(<OnboardingPage />);

    expect(replace).not.toHaveBeenCalled();
  });

  it("offers a sign-out escape hatch so the user is never trapped", () => {
    const signOut = vi.fn();
    mockUseAuth.mockReturnValue(signedInNotOnboarded({ signOut }));

    render(<OnboardingPage />);

    screen.getByRole("button", { name: "signOut" }).click();

    expect(signOut).toHaveBeenCalled();
  });
});
