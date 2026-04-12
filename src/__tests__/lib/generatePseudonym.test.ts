import { describe, it, expect } from "vitest";
import { generatePseudonym } from "@/lib/firebase";

describe("generatePseudonym", () => {
  it("returns a string starting with 'Explorer #'", () => {
    const name = generatePseudonym("abc123defgh");
    expect(name).toMatch(/^Explorer #\d{4}$/);
  });

  it("returns a number between 1000 and 9999", () => {
    const name = generatePseudonym("abc123defgh");
    const num = parseInt(name.replace("Explorer #", ""), 10);
    expect(num).toBeGreaterThanOrEqual(1000);
    expect(num).toBeLessThanOrEqual(9999);
  });

  it("is deterministic — same uid always gives same name", () => {
    const uid = "xK9mLpQr3Tz";
    expect(generatePseudonym(uid)).toBe(generatePseudonym(uid));
  });

  it("produces different names for different uids", () => {
    const a = generatePseudonym("aaaa0000");
    const b = generatePseudonym("bbbb1111");
    expect(a).toMatch(/^Explorer #\d{4}$/);
    expect(b).toMatch(/^Explorer #\d{4}$/);
  });
});
