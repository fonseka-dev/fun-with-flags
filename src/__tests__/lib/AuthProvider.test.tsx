import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import React from "react";
import { AuthProvider, useAuth } from "@/lib/providers/AuthProvider";

vi.mock("@/lib/firebase", () => ({
  isFirebaseConfigured: () => false,
  getAuthClient: vi.fn(),
  signInAnonymouslyIfNeeded: vi.fn(),
  getUserProgress: vi.fn(() => Promise.resolve(null)),
  initUserProgress: vi.fn(() => Promise.resolve()),
  linkAnonymousWithGoogle: vi.fn(),
  signOutUser: vi.fn(),
  addDiscoveredCountry: vi.fn(() => Promise.resolve()),
  updateQuizScore: vi.fn(() => Promise.resolve()),
  updateUserTier: vi.fn(() => Promise.resolve()),  // <-- add this
  generatePseudonym: vi.fn(() => "Explorer #1234"),
}));

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>{children}</AuthProvider>
);

describe("useAuth", () => {
  it("throws when used outside AuthProvider", () => {
    expect(() => renderHook(() => useAuth())).toThrow(
      "useAuth must be used within an AuthProvider",
    );
  });

  it("returns loading=false when Firebase is not configured", async () => {
    const { result } = renderHook(() => useAuth(), { wrapper });
    // isFirebaseConfigured returns false → loading should resolve to false
    await vi.waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });

  it("exposes tier='free' and hasAccess when Firebase is not configured", async () => {
    const { result } = renderHook(() => useAuth(), { wrapper });
    await vi.waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    expect(result.current.tier).toBe("free");
    expect(typeof result.current.hasAccess).toBe("function");
    // free tier cannot access advancedQuiz
    expect(result.current.hasAccess("advancedQuiz")).toBe(false);
    // free tier can access leaderboard
    expect(result.current.hasAccess("leaderboard")).toBe(true);
  });
});
