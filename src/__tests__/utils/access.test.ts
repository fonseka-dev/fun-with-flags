import { describe, it, expect } from "vitest";
import { hasAccess, FEATURE_TIERS } from "@/lib/utils/access";
import type { UserTier, Feature } from "@/lib/utils/access";

describe("hasAccess", () => {
  it("free user can access free features", () => {
    expect(hasAccess("free", "leaderboard")).toBe(true);
  });

  it("premium user can access free features", () => {
    expect(hasAccess("premium", "leaderboard")).toBe(true);
  });

  it("free user cannot access premium-only features", () => {
    expect(hasAccess("free", "advancedQuiz")).toBe(false);
  });

  it("premium user can access premium-only features", () => {
    expect(hasAccess("premium", "advancedQuiz")).toBe(true);
  });

  it("FEATURE_TIERS covers all Feature keys", () => {
    const features: Feature[] = ["advancedQuiz", "leaderboard"];
    for (const f of features) {
      expect(FEATURE_TIERS[f]).toBeDefined();
    }
  });
});
