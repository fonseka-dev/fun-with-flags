import { describe, it, expect } from "vitest";
import { hasAccess, FEATURE_TIERS } from "@/lib/utils/access";
import type { Feature } from "@/lib/utils/access";
import type { UserTier } from "@/data/types";

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

  it("both tiers are covered for features accessible to all", () => {
    const freeTiers: UserTier[] = ["free", "premium"];
    for (const tier of freeTiers) {
      expect(hasAccess(tier, "leaderboard")).toBe(true);
    }
  });
});
