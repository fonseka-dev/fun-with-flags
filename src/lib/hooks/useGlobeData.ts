"use client";

import { useState, useEffect, useMemo } from "react";
import { geoCentroid } from "d3-geo";
import type { BufferGeometry } from "three";
import type { Feature, Polygon, MultiPolygon } from "geojson";
import {
  latLngToCartesian,
  buildCountryGeometry,
  getCountryFlagCode,
  loadWorldTopology,
} from "@/lib/utils/geo";
import { countriesData } from "@/data/countries";
import type { Continent } from "@/data/types";

export type ProcessedCountry = {
  slug: string;
  flagCode: string;
  continent: Continent;
  centroid: [number, number, number];
  geometry: BufferGeometry;
};

const GLOBE_RADIUS = 1.002;

function featureCentroid(
  feature: Feature<Polygon | MultiPolygon>,
  radius: number,
): [number, number, number] {
  const [lng, lat] = geoCentroid(feature);
  return latLngToCartesian(lat, lng, radius);
}

export function useGlobeData() {
  const [features, setFeatures] = useState<
    Feature<Polygon | MultiPolygon>[] | null
  >(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    loadWorldTopology().then((f) => {
      if (!cancelled) {
        setFeatures(f);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const countries = useMemo<ProcessedCountry[]>(() => {
    if (!features) return [];

    const result: ProcessedCountry[] = [];

    for (const feature of features) {
      const flagCode = getCountryFlagCode(feature);
      if (!flagCode) continue;

      const entry = countriesData.find((c) => c.flagCode === flagCode);
      if (!entry) continue;

      const geometry = buildCountryGeometry(feature, GLOBE_RADIUS);
      if (!geometry) continue;

      const centroid = featureCentroid(feature, GLOBE_RADIUS);

      result.push({
        slug: entry.slug,
        flagCode: entry.flagCode,
        continent: entry.continent,
        centroid,
        geometry,
      });
    }

    return result;
  }, [features]);

  return { countries, loading };
}
