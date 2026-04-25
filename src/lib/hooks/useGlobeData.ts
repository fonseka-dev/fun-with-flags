"use client";

import { useState, useEffect } from "react";
import { geoCentroid } from "d3-geo";
import type { BufferGeometry } from "three";
import type { Feature, Polygon, MultiPolygon } from "geojson";
import {
  latLngToCartesian,
  buildCountryGeometry,
  getCountryFlagCode,
  loadWorldTopology,
  loadLowResTopology,
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

function processFeatures(
  features: Feature<Polygon | MultiPolygon>[],
): ProcessedCountry[] {
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
}

// Module-level geometry caches — populated once, reused on every subsequent mount
let _loCache: ProcessedCountry[] | null = null;
let _hiCache: ProcessedCountry[] | null = null;

/** @internal Test-only */
export function _resetGlobeDataCacheForTesting(): void {
  _loCache = null;
  _hiCache = null;
}

export function useGlobeData() {
  const [countries, setCountries] = useState<ProcessedCountry[]>(
    () => _hiCache ?? _loCache ?? [],
  );
  const [loading, setLoading] = useState(!_loCache && !_hiCache);
  const [upgrading, setUpgrading] = useState(!!_loCache && !_hiCache);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      // Stage 1: low-res
      if (!_loCache) {
        const loFeatures = await loadLowResTopology();
        if (cancelled) return;
        _loCache = processFeatures(loFeatures);
      }
      if (!cancelled) {
        setCountries(_loCache!);
        setLoading(false);
        setUpgrading(true);
      }

      // Stage 2: hi-res
      if (!_hiCache) {
        const hiFeatures = await loadWorldTopology();
        if (cancelled) return;
        _hiCache = processFeatures(hiFeatures);
      }
      if (!cancelled) {
        setCountries(_hiCache!);
        setUpgrading(false);
      }
    }

    if (!_hiCache) {
      load();
    }

    return () => {
      cancelled = true;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { countries, loading, upgrading };
}
