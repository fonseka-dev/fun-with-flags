import { describe, it, expect } from "vitest";
import {
  latLngToCartesian,
  computeCentroid,
  getCountryFlagCode,
  ISO_NUMERIC_TO_ALPHA2,
} from "@/lib/utils/geo";
import type { Feature } from "geojson";

// ---------------------------------------------------------------------------
// latLngToCartesian
// ---------------------------------------------------------------------------

describe("latLngToCartesian", () => {
  const R = 1;

  it("maps (0°, 0°) to [r, 0, 0]", () => {
    const [x, y, z] = latLngToCartesian(0, 0, R);
    expect(x).toBeCloseTo(R, 5);
    expect(y).toBeCloseTo(0, 5);
    expect(z).toBeCloseTo(0, 5);
  });

  it("maps North Pole (90°N, 0°) to [0, r, 0]", () => {
    const [x, y, z] = latLngToCartesian(90, 0, R);
    expect(x).toBeCloseTo(0, 5);
    expect(y).toBeCloseTo(R, 5);
    expect(z).toBeCloseTo(0, 5);
  });

  it("maps South Pole (90°S, 0°) to [0, -r, 0]", () => {
    const [x, y, z] = latLngToCartesian(-90, 0, R);
    expect(x).toBeCloseTo(0, 5);
    expect(y).toBeCloseTo(-R, 5);
    expect(z).toBeCloseTo(0, 5);
  });

  it("maps (0°, 90°E) to [0, 0, -r] (right-hand, Y-up)", () => {
    const [x, y, z] = latLngToCartesian(0, 90, R);
    expect(x).toBeCloseTo(0, 5);
    expect(y).toBeCloseTo(0, 5);
    expect(z).toBeCloseTo(-R, 5);
  });

  it("maps (0°, 90°W) to [0, 0, r]", () => {
    const [x, y, z] = latLngToCartesian(0, -90, R);
    expect(x).toBeCloseTo(0, 5);
    expect(y).toBeCloseTo(0, 5);
    expect(z).toBeCloseTo(R, 5);
  });

  it("scales by radius", () => {
    const [x, y, z] = latLngToCartesian(0, 0, 5);
    expect(x).toBeCloseTo(5, 5);
    expect(y).toBeCloseTo(0, 5);
    expect(z).toBeCloseTo(0, 5);
  });

  it("result lies on the sphere surface", () => {
    const R2 = 1.002;
    const [x, y, z] = latLngToCartesian(48.8566, 2.3522, R2); // Paris
    const dist = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
    expect(dist).toBeCloseTo(R2, 4);
  });
});

// ---------------------------------------------------------------------------
// computeCentroid
// ---------------------------------------------------------------------------

describe("computeCentroid", () => {
  it("returns a point on the sphere surface", () => {
    const ring = [
      [0, 0],
      [10, 0],
      [10, 10],
      [0, 10],
      [0, 0],
    ];
    const [x, y, z] = computeCentroid([ring], 1);
    const dist = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
    expect(dist).toBeCloseTo(1, 3);
  });

  it("returns a sensible centroid for equatorial square", () => {
    const ring = [
      [-5, -5],
      [5, -5],
      [5, 5],
      [-5, 5],
      [-5, -5],
    ];
    const [x, y, z] = computeCentroid([ring], 1);
    // Centroid should be near (0°, 0°) → x ≈ 1, y ≈ 0, z ≈ 0
    expect(x).toBeGreaterThan(0.9);
    expect(Math.abs(y)).toBeLessThan(0.1);
    expect(Math.abs(z)).toBeLessThan(0.1);
  });
});

// ---------------------------------------------------------------------------
// getCountryFlagCode / ISO mapping
// ---------------------------------------------------------------------------

describe("getCountryFlagCode", () => {
  function featureWithId(id: string): Feature {
    return {
      type: "Feature",
      id,
      geometry: { type: "Point", coordinates: [0, 0] },
      properties: {},
    } as unknown as Feature;
  }

  it('maps "840" to "us" (United States)', () => {
    expect(getCountryFlagCode(featureWithId("840"))).toBe("us");
  });

  it('maps "826" to "gb" (United Kingdom)', () => {
    expect(getCountryFlagCode(featureWithId("826"))).toBe("gb");
  });

  it('maps "392" to "jp" (Japan)', () => {
    expect(getCountryFlagCode(featureWithId("392"))).toBe("jp");
  });

  it('maps "076" to "br" (Brazil)', () => {
    expect(getCountryFlagCode(featureWithId("076"))).toBe("br");
  });

  it("returns null for unknown id", () => {
    expect(getCountryFlagCode(featureWithId("999"))).toBeNull();
  });

  it("returns null for feature without id", () => {
    const feature = {
      type: "Feature" as const,
      geometry: { type: "Point" as const, coordinates: [0, 0] },
      properties: {},
    };
    expect(getCountryFlagCode(feature as Feature)).toBeNull();
  });
});

describe("ISO_NUMERIC_TO_ALPHA2", () => {
  it("has at least 195 entries", () => {
    expect(Object.keys(ISO_NUMERIC_TO_ALPHA2).length).toBeGreaterThanOrEqual(
      195,
    );
  });

  it("all values are lowercase 2-letter codes", () => {
    for (const code of Object.values(ISO_NUMERIC_TO_ALPHA2)) {
      expect(code).toMatch(/^[a-z]{2}$/);
    }
  });
});
