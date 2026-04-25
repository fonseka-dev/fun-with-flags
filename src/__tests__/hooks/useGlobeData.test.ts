import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  useGlobeData,
  _resetGlobeDataCacheForTesting,
} from "@/lib/hooks/useGlobeData";
import * as geoModule from "@/lib/utils/geo";

// ---------------------------------------------------------------------------
// Mocks
// ---------------------------------------------------------------------------

vi.mock("three", () => {
  class BufferGeometry {
    setAttribute = vi.fn();
    setIndex = vi.fn();
    computeVertexNormals = vi.fn();
    isBufferGeometry = true;
  }
  return {
    BufferGeometry,
    BufferAttribute: vi.fn(),
    Float32BufferAttribute: vi.fn(),
  };
});

vi.mock("@/lib/utils/geo", () => ({
  loadLowResTopology: vi.fn(),
  loadWorldTopology: vi.fn(),
  buildCountryGeometry: vi.fn(),
  getCountryFlagCode: vi.fn(),
  latLngToCartesian: vi.fn(),
  _resetTopologyCacheForTesting: vi.fn(),
  _resetLowResTopologyCacheForTesting: vi.fn(),
}));

vi.mock("@/data/countries", () => ({
  countriesData: [
    { slug: "united-states", flagCode: "us", continent: "North America" },
  ],
}));

// Serialized fixture — matches SerializedCountry shape
const mockSerializedCountry = {
  slug: "united-states",
  flagCode: "us",
  continent: "North America",
  centroid: [1, 0, 0] as [number, number, number],
  positions: [1, 0, 0, 0, 1, 0, 0, 0, 1],
  indices: [0, 1, 2],
};

function makeFetchMock(opts: {
  loData?: object[];
  hiData?: object[];
  loOk?: boolean;
  hiOk?: boolean;
  hiDelay?: boolean;
}) {
  return vi.fn().mockImplementation((url: string) => {
    if (url.includes("globe-geometry-lo")) {
      const data = opts.loData ?? [mockSerializedCountry];
      return Promise.resolve({
        ok: opts.loOk ?? true,
        json: () => Promise.resolve(data),
      });
    }
    if (url.includes("globe-geometry-hi")) {
      if (opts.hiDelay) {
        return new Promise(() => {}); // never resolves
      }
      const data = opts.hiData ?? [mockSerializedCountry];
      return Promise.resolve({
        ok: opts.hiOk ?? true,
        json: () => Promise.resolve(data),
      });
    }
    return Promise.reject(new Error(`Unexpected fetch: ${url}`));
  });
}

beforeEach(() => {
  _resetGlobeDataCacheForTesting();
  vi.clearAllMocks();
  global.fetch = makeFetchMock({});
});

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("useGlobeData", () => {
  it("starts with loading=true when nothing is cached", () => {
    const { result } = renderHook(() => useGlobeData());
    expect(result.current.loading).toBe(true);
    expect(result.current.upgrading).toBe(false);
    expect(result.current.countries).toEqual([]);
  });

  it("sets loading=false and upgrading=true after low-res load", async () => {
    global.fetch = makeFetchMock({ hiDelay: true });

    const { result } = renderHook(() => useGlobeData());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.upgrading).toBe(true);
  });

  it("sets upgrading=false after hi-res load completes", async () => {
    const { result } = renderHook(() => useGlobeData());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.upgrading).toBe(false);
    });
  });

  it("countries is non-empty after low-res load", async () => {
    global.fetch = makeFetchMock({ hiDelay: true });

    const { result } = renderHook(() => useGlobeData());

    await waitFor(() => {
      expect(result.current.countries.length).toBeGreaterThan(0);
    });

    expect(result.current.countries[0].flagCode).toBe("us");
  });

  it("returns cached data immediately when hi-res cache is warm", async () => {
    const { result: r1, unmount: u1 } = renderHook(() => useGlobeData());
    await waitFor(() => expect(r1.current.upgrading).toBe(false));
    u1();

    vi.clearAllMocks();
    global.fetch = vi.fn(); // should not be called

    const { result: r2 } = renderHook(() => useGlobeData());

    expect(r2.current.loading).toBe(false);
    expect(r2.current.upgrading).toBe(false);
    expect(r2.current.countries.length).toBeGreaterThan(0);

    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("loadedCount increases as countries are loaded", async () => {
    const twoCountries = [
      mockSerializedCountry,
      { ...mockSerializedCountry, slug: "test2", flagCode: "gb" },
    ];
    global.fetch = makeFetchMock({ loData: twoCountries, hiDelay: true });

    const { result } = renderHook(() => useGlobeData());

    await waitFor(() => {
      expect(result.current.countries.length).toBeGreaterThan(0);
    });

    // After lo stage completes, loadedCount should be 2
    expect(result.current.loadedCount).toBe(2);
  });

  it("falls back to topology loading when precomputed files are unavailable", async () => {
    global.fetch = makeFetchMock({ loOk: false, hiOk: false });

    const mockFeature = {
      type: "Feature",
      id: "840",
      geometry: {
        type: "Polygon",
        coordinates: [[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]],
      },
      properties: {},
    } as unknown as import("geojson").Feature<
      import("geojson").Polygon | import("geojson").MultiPolygon
    >;

    vi.mocked(geoModule.loadLowResTopology).mockResolvedValue([mockFeature]);
    vi.mocked(geoModule.loadWorldTopology).mockResolvedValue([mockFeature]);
    vi.mocked(geoModule.buildCountryGeometry).mockReturnValue({
      isBufferGeometry: true,
    } as unknown as import("three").BufferGeometry);
    vi.mocked(geoModule.getCountryFlagCode).mockReturnValue("us");
    vi.mocked(geoModule.latLngToCartesian).mockReturnValue([0, 0, 1]);

    const { result } = renderHook(() => useGlobeData());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.upgrading).toBe(false);
    });

    expect(result.current.countries.length).toBeGreaterThan(0);
    expect(geoModule.loadLowResTopology).toHaveBeenCalled();
  });
});

