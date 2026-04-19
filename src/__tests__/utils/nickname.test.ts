import { describe, it, expect } from "vitest";
import { validateNickname } from "@/lib/utils/nickname";

describe("validateNickname", () => {
  it("returns null for a valid nickname", () => {
    expect(validateNickname("CaptainDiscovery")).toBeNull();
  });

  it("returns error for empty string", () => {
    expect(validateNickname("")).toBe("short");
  });

  it("returns error for single character", () => {
    expect(validateNickname("A")).toBe("short");
  });

  it("returns null for exactly 2 characters", () => {
    expect(validateNickname("Jo")).toBeNull();
  });

  it("returns null for exactly 20 characters", () => {
    expect(validateNickname("A".repeat(20))).toBeNull();
  });

  it("returns error for 21 characters", () => {
    expect(validateNickname("A".repeat(21))).toBe("long");
  });

  it("returns error for profanity", () => {
    // "ass" is in the bad-words default list
    expect(validateNickname("ass")).toBe("profanity");
  });

  it("trims whitespace before validation", () => {
    expect(validateNickname("  A  ")).toBe("short");
  });
});
