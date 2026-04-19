import { describe, it, expect } from "vitest";
import {
  getRankTier,
  getMotivationKey,
  getXpToNextRank,
  TIER_THRESHOLDS,
} from "@/lib/utils/rankings";

describe("getRankTier", () => {
  it("returns novice for 0 pts", () => {
    expect(getRankTier(0)).toBe("novice");
  });

  it("returns novice at the boundary (499)", () => {
    expect(getRankTier(499)).toBe("novice");
  });

  it("returns explorer at 500", () => {
    expect(getRankTier(500)).toBe("explorer");
  });

  it("returns explorer at 1999", () => {
    expect(getRankTier(1999)).toBe("explorer");
  });

  it("returns pathfinder at 2000", () => {
    expect(getRankTier(2000)).toBe("pathfinder");
  });

  it("returns pathfinder at 4999", () => {
    expect(getRankTier(4999)).toBe("pathfinder");
  });

  it("returns scholar at 5000", () => {
    expect(getRankTier(5000)).toBe("scholar");
  });

  it("returns scholar at 9999", () => {
    expect(getRankTier(9999)).toBe("scholar");
  });

  it("returns grandmaster at 10000", () => {
    expect(getRankTier(10000)).toBe("grandmaster");
  });

  it("returns grandmaster for very high scores", () => {
    expect(getRankTier(99999)).toBe("grandmaster");
  });
});

describe("getXpToNextRank", () => {
  it("returns correct XP remaining in novice tier", () => {
    // 500 - 0 = 500 total needed, minus 0 earned = 500
    expect(getXpToNextRank(0)).toBe(500);
  });

  it("returns XP remaining mid-novice", () => {
    expect(getXpToNextRank(300)).toBe(200);
  });

  it("returns 0 at grandmaster (defend crown)", () => {
    expect(getXpToNextRank(10000)).toBe(0);
  });

  it("returns 0 well above grandmaster threshold", () => {
    expect(getXpToNextRank(50000)).toBe(0);
  });

  it("returns remaining XP at explorer boundary", () => {
    expect(getXpToNextRank(500)).toBe(1500); // 2000 - 500
  });

  it("returns remaining XP mid-pathfinder", () => {
    expect(getXpToNextRank(3000)).toBe(2000); // 5000 - 3000
  });
});

describe("getMotivationKey", () => {
  it("returns rank1 key for rank 1", () => {
    expect(getMotivationKey(1, 100)).toBe("rank1");
  });

  it("returns podium key for rank 2-3", () => {
    expect(getMotivationKey(2, 100)).toBe("podium");
    expect(getMotivationKey(3, 100)).toBe("podium");
  });

  it("returns top10pct key for top 10%", () => {
    // rank 5 out of 100 = 5% => top 10%
    expect(getMotivationKey(5, 100)).toBe("top10pct");
  });

  it("returns top25pct key for top 11-25%", () => {
    // rank 20 out of 100 = 20% => top 25%
    expect(getMotivationKey(20, 100)).toBe("top25pct");
  });

  it("returns top50pct key for top 26-50%", () => {
    // rank 40 out of 100 = 40% => top 50%
    expect(getMotivationKey(40, 100)).toBe("top50pct");
  });

  it("returns climbing key for rank > 50%", () => {
    expect(getMotivationKey(60, 100)).toBe("climbing");
  });

  it("returns noScore when rank is 0", () => {
    expect(getMotivationKey(0, 100)).toBe("noScore");
  });

  it("returns rank1 when total is 1", () => {
    expect(getMotivationKey(1, 1)).toBe("rank1");
  });
});

describe("TIER_THRESHOLDS", () => {
  it("exports correct thresholds", () => {
    expect(TIER_THRESHOLDS.novice).toBe(0);
    expect(TIER_THRESHOLDS.explorer).toBe(500);
    expect(TIER_THRESHOLDS.pathfinder).toBe(2000);
    expect(TIER_THRESHOLDS.scholar).toBe(5000);
    expect(TIER_THRESHOLDS.grandmaster).toBe(10000);
  });
});
