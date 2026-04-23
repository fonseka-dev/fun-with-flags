"use client";

import { useEffect, useState } from "react";
import * as topojson from "topojson-client";
import { geoMercator, geoPath } from "d3-geo";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { Feature, Polygon, MultiPolygon } from "geojson";
import { getCountryFlagCode } from "@/lib/utils/geo";
import { countriesData } from "@/data/countries";
import type { Continent } from "@/data/types";

const CONTINENT_COLORS: Record<Continent, string> = {
  Africa: "#4CAF50",
  Asia: "#FF6B6B",
  Europe: "#5C6BC0",
  "North America": "#FFB74D",
  "South America": "#26A69A",
  Oceania: "#AB47BC",
};

const OCEAN_COLOR = "#c8d8e8";
const UNKNOWN_COLOR = "#d8d8d8";

const WIDTH = 568;
const HEIGHT = 256;

const projection = geoMercator()
  .center([-3.7, 40.4])
  .scale(680)
  .translate([WIDTH / 2, HEIGHT / 2]);

const pathGenerator = geoPath(projection);

type GeoFeature = Feature<Polygon | MultiPolygon>;

export function MiniMap() {
  const [features, setFeatures] = useState<GeoFeature[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch("/geo/world-110m.json")
      .then((r) => r.json())
      .then((topology: Topology<{ countries: GeometryCollection }>) => {
        if (cancelled) return;
        const { features: f } = topojson.feature(
          topology,
          topology.objects.countries,
        ) as unknown as { features: GeoFeature[] };
        setFeatures(f);
        setLoading(false);
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-surface-container">
        <span
          className="material-symbols-outlined text-5xl text-on-surface-variant opacity-30 animate-pulse"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          public
        </span>
      </div>
    );
  }

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      width="100%"
      height="100%"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <rect width={WIDTH} height={HEIGHT} fill={OCEAN_COLOR} />
      {features.map((feature, i) => {
        const flagCode = getCountryFlagCode(feature);
        const entry = flagCode
          ? countriesData.find((c) => c.flagCode === flagCode)
          : undefined;
        const fill = entry?.continent
          ? CONTINENT_COLORS[entry.continent as Continent]
          : UNKNOWN_COLOR;
        const d = pathGenerator(feature);
        if (!d) return null;
        return (
          <path
            key={i}
            d={d}
            fill={fill}
            stroke="white"
            strokeWidth={0.4}
            opacity={0.9}
          />
        );
      })}
    </svg>
  );
}
