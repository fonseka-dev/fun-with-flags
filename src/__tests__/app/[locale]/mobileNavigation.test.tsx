import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import MapPage from "@/app/[locale]/map/page";
import CountryDetailPage from "@/app/[locale]/catalog/[countrySlug]/page";

/**
 * Regression test for "no way to navigate on mobile from the map".
 *
 * `BottomNav` (lg:hidden) is the only navigation below 768px — `TopNav`'s nav
 * links are `hidden md:flex`. It is rendered by `AppShell`, which the map and
 * country detail routes don't use. Both routes must mount the mobile menu so
 * users can always leave them.
 */

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
  useLocale: () => "en",
}));

vi.mock("next-intl/server", () => ({
  setRequestLocale: vi.fn(),
}));

vi.mock("@/i18n/navigation", () => ({
  usePathname: () => "/map",
  useRouter: () => ({ replace: vi.fn(), push: vi.fn(), back: vi.fn() }),
  Link: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

vi.mock("@/lib/providers/AuthProvider", () => ({
  useAuth: () => ({
    user: null,
    progress: null,
    loading: false,
    isAnonymous: true,
    nickname: "Explorer",
    avatarUrl: "https://example.com/avatar.png",
    discoverCountry: vi.fn(),
    saveQuizResult: vi.fn(),
  }),
}));

// The mobile menu is the thing under test — mark it so we can assert on it.
vi.mock("@/components/layout/BottomNav", () => ({
  BottomNav: () => <nav data-testid="bottom-nav" />,
}));

vi.mock("@/components/map/Globe", () => ({
  Globe: () => <div data-testid="globe" />,
}));

vi.mock("@/components/auth/AuthModal", () => ({
  AuthModal: () => null,
}));

vi.mock("@/components/auth/ProfileDialog", () => ({
  ProfileDialog: () => null,
}));

vi.mock("@/components/country/CountryDetailHeader", () => ({
  CountryDetailHeader: () => <header data-testid="country-header" />,
}));

vi.mock("@/components/country/CountryDetailContent", () => ({
  CountryDetailContent: () => <main data-testid="country-content" />,
}));

describe("mobile navigation", () => {
  beforeEach(cleanup);

  it("renders the main menu on the map route", () => {
    render(<MapPage />);

    expect(screen.getByTestId("bottom-nav")).toBeInTheDocument();
  });

  it("renders the main menu on the country detail route", async () => {
    const ui = await CountryDetailPage({
      params: Promise.resolve({ locale: "en", countrySlug: "mexico" }),
    });

    render(ui);

    expect(screen.getByTestId("bottom-nav")).toBeInTheDocument();
  });
});
