import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  useGlobeData,
  _resetGlobeDataCacheForTesting,
} from "@/lib/hooks/useGlobeData";
import * as geoModule from "@/lib/utils/geo";

// Minimal GeoJSON feature for testing
const mockFeature = {
  type: "Feature",
  id: "840",
  geometry: {
    type: "Polygon",
    coordinates: [[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]],
  },
  properties: {},
} as any;

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

beforeEach(() => {
  _resetGlobeDataCacheForTesting();
  vi.clearAllMocks();
  vi.mocked(geoModule.loadLowResTopology).mockResolvedValue([mockFeature]);
  vi.mocked(geoModule.loadWorldTopology).mockResolvedValue([mockFeature]);
  vi.mocked(geoModule.buildCountryGeometry).mockReturnValue({
    isBufferGeometry: true,
  } as any);
  vi.mocked(geoModule.getCountryFlagCode).mockReturnValue("us");
  vi.mocked(geoModule.latLngToCartesian).mockReturnValue([0, 0, 1]);
});

describe("useGlobeData", () => {
  it("starts with loading=true when nothing is cached", () => {
    const { result } = renderHook(() => useGlobeData());
    expect(result.current.loading).toBe(true);
    expect(result.current.upgrading).toBe(false);
    expect(result.current.countries).toEqual([]);
  });

  it("sets loading=false and upgrading=true after low-res load", async () => {
    // Delay hi-res so we can observe the intermediate state
    vi.mocked(geoModule.loadWorldTopology).mockImplementation(
      () => new Promise(() => {}), // never resolves
    );

    const { result } = renderHook(() => useGlobeData());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.upgrading).toBe(true);
  });

  it("sets upgrading=false after hi-res load completes", async () => {
    const { result } = renderHook(() => useGlobeData());

    await waitFor(() => {
      expect(result.current.upgrading).toBe(false);
    });

    expect(result.current.loading).toBe(false);
  });

  it("countries is non-empty after low-res load", async () => {
    // Delay hi-res so we observe state after stage 1
    vi.mocked(geoModule.loadWorldTopology).mockImplementation(
      () => new Promise(() => {}),
    );

    const { result } = renderHook(() => useGlobeData());

    await waitFor(() => {
      expect(result.current.countries.length).toBeGreaterThan(0);
    });

    expect(result.current.countries[0].flagCode).toBe("us");
  });
});
