import * as fs from "node:fs";
import * as path from "node:path";
import * as topojson from "topojson-client";
import { geoCentroid } from "d3-geo";
import type { Feature, Polygon, MultiPolygon } from "geojson";
import type { Topology, GeometryCollection } from "topojson-specification";
import {
  buildCountryGeometryData,
  getCountryFlagCode,
  latLngToCartesian,
} from "../src/lib/utils/geo";
import { countriesData } from "../src/data/countries";
import type { SerializedCountry } from "../src/data/types";

const GLOBE_RADIUS = 1.002;

function processResolution(
  inputPath: string,
  outputPath: string,
  label: string,
): void {
  console.log(`[${label}] Reading ${inputPath}…`);
  const raw = fs.readFileSync(inputPath, "utf-8");
  const topology = JSON.parse(raw) as Topology<{
    countries: GeometryCollection;
  }>;

  const { features } = topojson.feature(
    topology,
    topology.objects.countries,
  ) as unknown as { features: Feature<Polygon | MultiPolygon>[] };

  console.log(`[${label}] Processing ${features.length} features…`);

  const serialized: SerializedCountry[] = [];
  let skipped = 0;

  for (const feature of features) {
    const flagCode = getCountryFlagCode(feature);
    if (!flagCode) {
      skipped++;
      continue;
    }

    const entry = countriesData.find((c) => c.flagCode === flagCode);
    if (!entry) {
      skipped++;
      continue;
    }

    const data = buildCountryGeometryData(feature, GLOBE_RADIUS);
    if (!data) {
      skipped++;
      continue;
    }

    const [lng, lat] = geoCentroid(feature);
    const centroid = latLngToCartesian(lat, lng, GLOBE_RADIUS);

    serialized.push({
      slug: entry.slug,
      flagCode: entry.flagCode,
      continent: entry.continent,
      centroid,
      positions: data.positions,
      indices: data.indices,
    });
  }

  console.log(
    `[${label}] ${serialized.length} countries serialized, ${skipped} skipped.`,
  );

  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(serialized), "utf-8");
  const size = fs.statSync(outputPath).size;
  console.log(
    `[${label}] Written to ${outputPath} (${(size / 1024 / 1024).toFixed(2)} MB)`,
  );
}

const root = process.cwd();

processResolution(
  path.join(root, "public/geo/world-110m.json"),
  path.join(root, "public/geo/globe-geometry-lo.json"),
  "LO",
);

processResolution(
  path.join(root, "public/geo/world-50m.json"),
  path.join(root, "public/geo/globe-geometry-hi.json"),
  "HI",
);

console.log("Done.");
