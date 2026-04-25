import { describe, it, expect, vi, afterEach } from "vitest";
import {
  latLngToCartesian,
  computeCentroid,
  getCountryFlagCode,
  ISO_NUMERIC_TO_ALPHA2,
  subdivideRing,
  triangulatePolygon,
  getInteriorGeoPoints,
  loadWorldTopology,
  _resetTopologyCacheForTesting,
  buildCountryGeometryData,
} from "@/lib/utils/geo";
import type { Feature, Polygon, Position } from "geojson";

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

// ---------------------------------------------------------------------------
// subdivideRing
// ---------------------------------------------------------------------------

describe("subdivideRing", () => {
  it("returns the same ring when all segments are under 5°", () => {
    const ring: Position[] = [[0, 0], [1, 0], [0, 1]];
    const result = subdivideRing(ring);
    expect(result).toHaveLength(3);
  });

  it("inserts intermediate points for segments spanning > 5°", () => {
    const ring: Position[] = [[0, 0], [15, 0], [0, 1]];
    const result = subdivideRing(ring);
    expect(result.length).toBeGreaterThan(3);
  });

  it("handles a ring with fewer than 2 points without crashing", () => {
    const ring: Position[] = [[0, 0]];
    expect(() => subdivideRing(ring)).not.toThrow();
  });

  it("handles antimeridian crossing (170°E → 170°W) through ±180°, not through 0°", () => {
    // Linear interpolation bug: 170 to -170 gives |Δlng|=340°, sweeping through 0° (Europe)
    // SLERP fix: haversine distance = 20°, great-circle stays near ±180° (Pacific)
    const ring: Position[] = [[170, 0], [-170, 0], [0, 30]];
    const result = subdivideRing(ring);
    // Find the index of [-170, 0] — the end of the antimeridian edge
    const endIdx = result.findIndex((p) => p[0] === -170 && p[1] === 0);
    expect(endIdx).not.toBe(-1); // -170 endpoint must be present
    expect(endIdx).toBe(4); // ceil(20° / 5°) = 4 steps → 3 intermediates
    // All intermediate points should have |lng| > 165° (hugging ±180°, not crossing 0°)
    const intermediates = result.slice(1, endIdx);
    for (const pt of intermediates) {
      expect(Math.abs(pt[0])).toBeGreaterThan(165);
    }
  });
});

// ---------------------------------------------------------------------------
// triangulatePolygon
// ---------------------------------------------------------------------------

describe("triangulatePolygon", () => {
  it("returns null for empty rings array", () => {
    expect(triangulatePolygon([], 1)).toBeNull();
  });

  it("returns null for a degenerate ring with < 3 points", () => {
    const rings: Position[][] = [[[0, 0], [1, 0]]];
    expect(triangulatePolygon(rings, 1)).toBeNull();
  });

  it("triangulates a simple convex polygon (outer ring only)", () => {
    // CW winding matches topojson-client real data convention (d3-geo interior = CW)
    const outerRing: Position[] = [
      [0, 0], [0, 2], [2, 2], [2, 0], [0, 0],
    ];
    const result = triangulatePolygon([outerRing], 1);
    expect(result).not.toBeNull();
    expect(result!.indices.length).toBe(6);
    expect(result!.positions.length).toBe(12);
  });

  it("triangulates a polygon with a hole and returns valid triangle indices", () => {
    // CW outer ring + CCW hole ring matches topojson-client convention
    const outerRing: Position[] = [[-4, -4], [-4, 4], [4, 4], [4, -4]];
    const holeRing: Position[] = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
    const result = triangulatePolygon([outerRing, holeRing], 1);
    expect(result).not.toBeNull();
    expect(result!.indices.length).toBeGreaterThan(0);
    expect(result!.indices.length % 3).toBe(0);
  });

  // Regression: large polygons used to produce an empty result because
  // projectToTangentPlane caused self-intersections for polygons spanning >90°.
  it("triangulates a large polygon (~USA bounding box, 60°×25°) with interior triangles", () => {
    // CW winding: up, right, down, left — matches real topojson exterior ring convention
    const outerRing: Position[] = [
      [-125, 24], [-125, 49], [-65, 49], [-65, 24], [-125, 24],
    ];
    const result = triangulatePolygon([outerRing], 1);
    expect(result).not.toBeNull();
    // Must have interior triangles — not just 2 like a simple quad
    expect(result!.indices.length).toBeGreaterThan(6);
    expect(result!.indices.length % 3).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// getInteriorGeoPoints
// ---------------------------------------------------------------------------

describe("getInteriorGeoPoints", () => {
  it("returns [] for a tiny polygon whose bbox is smaller than the resolution", () => {
    // 2°×2° square, CW winding — well under 5° threshold
    const rings: Position[][] = [[[0, 0], [0, 2], [2, 2], [2, 0]]];
    expect(getInteriorGeoPoints(rings, 5)).toHaveLength(0);
  });

  it("returns interior points for a large polygon (USA-sized ~60°×25°)", () => {
    // CW winding matches real topojson exterior ring convention
    const rings: Position[][] = [[
      [-125, 24], [-125, 49], [-65, 49], [-65, 24],
    ]];
    const pts = getInteriorGeoPoints(rings, 5);
    expect(pts.length).toBeGreaterThan(0);
    // All points must lie within a generous spherical bbox.
    // Note: geoBounds returns the SPHERICAL extent — the great-circle top edge at 49°N
    // bulges northward, so some interior points may legitimately exceed 49°N.
    for (const [lng, lat] of pts) {
      expect(lng).toBeGreaterThan(-130);
      expect(lng).toBeLessThan(-60);
      expect(lat).toBeGreaterThan(20);
      expect(lat).toBeLessThan(60);
    }
  });

  it("returns interior points for a Russia-like antimeridian-crossing polygon", () => {
    // Russia's ring has vertices near ±180° on BOTH sides (the antimeridian is
    // Russia's eastern coastline in Natural Earth data). The ring has no explicit
    // ±180 vertex; instead there's an edge from +179° to −179° which d3-geo detects
    // as a genuine antimeridian crossing (delta_lng = -358, |358| > 180).
    //
    // geoBounds on this CW ring returns [[27,41],[-168,82]] — inverted bounds where
    // maxLng=-168 < minLng=27. The old guard `if (maxLng < minLng) return []` fired
    // here → hollow ring bug. After the fix, interior points must be produced.
    const rings: Position[][] = [[
      [27, 41], [100, 41], [179, 41], [-179, 41], [-168, 41],
      [-168, 72], [-179, 72], [179, 72], [100, 72], [27, 72],
    ]];
    const pts = getInteriorGeoPoints(rings, 10);
    // Must produce interior seed points — not bail out with []
    expect(pts.length).toBeGreaterThan(0);
    // All returned points must be valid geographic coordinates
    for (const [lng, lat] of pts) {
      expect(lng).toBeGreaterThanOrEqual(-180);
      expect(lng).toBeLessThanOrEqual(180);
      expect(lat).toBeGreaterThan(35);
      expect(lat).toBeLessThan(90);
    }
  });
});

// ---------------------------------------------------------------------------
// triangulatePolygon — antimeridian regression
// ---------------------------------------------------------------------------

describe("triangulatePolygon — antimeridian regression", () => {
  it("returns non-null for a Russia-like polygon crossing ±180°", () => {
    // Same Russia-like ring: vertices near ±179° on both sides of antimeridian.
    // With old code: geoBounds returns inverted → getInteriorGeoPoints returns []
    // → earcut on SLERP-subdivided ring sees coordinate jump at ±179° as
    //   self-intersecting → returns [] → triangulatePolygon returns null.
    // After the fix this must succeed.
    const rings: Position[][] = [[
      [27, 41], [100, 41], [179, 41], [-179, 41], [-168, 41],
      [-168, 72], [-179, 72], [179, 72], [100, 72], [27, 72],
    ]];
    const result = triangulatePolygon(rings, 1);
    // Before the fix this returned null. After the fix it must succeed.
    expect(result).not.toBeNull();
    expect(result!.positions.length).toBeGreaterThan(0);
    expect(result!.indices.length).toBeGreaterThan(0);
  });
});

// ---------------------------------------------------------------------------
// loadWorldTopology — module-level cache
// ---------------------------------------------------------------------------

describe("loadWorldTopology", () => {
  let fetchSpy: ReturnType<typeof vi.spyOn>;

  afterEach(() => {
    fetchSpy.mockRestore();
    _resetTopologyCacheForTesting();
  });

  it("returns the same object reference on repeated calls (cache)", async () => {
    fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue({
      json: async () => ({
        type: "Topology",
        objects: { countries: { type: "GeometryCollection", geometries: [] } },
        arcs: [],
      }),
    } as unknown as Response);

    const result1 = await loadWorldTopology();
    const result2 = await loadWorldTopology();
    const result3 = await loadWorldTopology();

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(result2).toBe(result1);
    expect(result3).toBe(result1);
  });
});

// ---------------------------------------------------------------------------
// buildCountryGeometryData
// ---------------------------------------------------------------------------

describe("buildCountryGeometryData", () => {
  it("returns positions and indices arrays for a simple polygon", () => {
    const feature: Feature<Polygon> = {
      type: "Feature",
      id: "840",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-5, -5],
            [5, -5],
            [5, 5],
            [-5, 5],
            [-5, -5],
          ],
        ],
      },
      properties: {},
    };

    const result = buildCountryGeometryData(feature, 1.0);
    expect(result).not.toBeNull();
    expect(result!.positions.length).toBeGreaterThan(0);
    expect(result!.positions.length % 3).toBe(0);
    expect(result!.indices.length).toBeGreaterThan(0);
    expect(result!.indices.length % 3).toBe(0);
  });

  it("returns null for a feature with empty geometry", () => {
    const feature: Feature<Polygon> = {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[]],
      },
      properties: {},
    };

    const result = buildCountryGeometryData(feature, 1.0);
    expect(result).toBeNull();
  });
});
