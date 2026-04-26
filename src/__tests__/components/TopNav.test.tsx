import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, within, cleanup } from "@testing-library/react";
import type { ComponentPropsWithoutRef } from "react";
import { TopNav } from "@/components/layout/TopNav";

const mockUseAuth = vi.fn();

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

vi.mock("@/i18n/navigation", () => ({
  usePathname: () => "/",
  Link: ({ href, className, children, ...props }: ComponentPropsWithoutRef<"a"> & { href: string }) => (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("@/lib/providers/AuthProvider", () => ({
  useAuth: () => mockUseAuth(),
}));

vi.mock("@/components/auth/AuthModal", () => ({
  AuthModal: () => null,
}));

vi.mock("@/components/auth/ProfileDialog", () => ({
  ProfileDialog: () => null,
}));

vi.mock("@/components/layout/LanguageToggle", () => ({
  LanguageToggle: () => <button type="button">Language</button>,
}));

vi.mock("@/components/ui/SearchInput", () => ({
  SearchInput: () => <input aria-label="search" />,
}));

describe("TopNav", () => {
  beforeEach(() => {
    mockUseAuth.mockReset();
    cleanup();
  });

  it("keeps language and profile controls while quick icon links are mobile-hidden", () => {
    mockUseAuth.mockReturnValue({
      isAnonymous: false,
      nickname: "Explorer Kid",
      avatarUrl: "https://example.com/avatar.png",
    });

    render(<TopNav />);

    expect(screen.getByRole("button", { name: "Language" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Open profile" })).toBeInTheDocument();

    const quickLinks = screen.getByLabelText("Quick links");
    expect(quickLinks).toHaveClass("hidden");
    expect(quickLinks).toHaveClass("md:flex");

    expect(within(quickLinks).getByRole("link", { name: "map" })).toBeInTheDocument();
    expect(within(quickLinks).getByRole("link", { name: "games" })).toBeInTheDocument();
  });

  it("keeps language and sign-in controls visible for anonymous users", () => {
    mockUseAuth.mockReturnValue({
      isAnonymous: true,
      nickname: "Explorer",
      avatarUrl: "https://example.com/avatar.png",
    });

    render(<TopNav />);

    expect(screen.getByRole("button", { name: "Language" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "signIn" })).toBeInTheDocument();

    const quickLinks = screen.getByLabelText("Quick links");
    expect(quickLinks).toHaveClass("hidden");
    expect(quickLinks).toHaveClass("md:flex");
  });
});
