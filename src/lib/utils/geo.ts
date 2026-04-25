import * as topojson from "topojson-client";
import earcut from "earcut";
import {
  BufferGeometry,
  BufferAttribute,
  Float32BufferAttribute,
} from "three";
import Delaunator from "delaunator";
import { geoContains } from "d3-geo";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { Feature, MultiPolygon, Polygon, Position } from "geojson";

// ---------------------------------------------------------------------------
// Spherical ↔ Cartesian
// ---------------------------------------------------------------------------

const DEG2RAD = Math.PI / 180;

/**
 * Convert latitude/longitude (degrees) to Cartesian [x, y, z] on a sphere.
 *
 * Coordinate convention (right-hand, Y-up):
 *   x = r · cos(lat) · cos(lng)
 *   y = r · sin(lat)
 *   z = r · −cos(lat) · sin(lng)
 */
export function latLngToCartesian(
  lat: number,
  lng: number,
  radius: number,
): [number, number, number] {
  const latR = lat * DEG2RAD;
  const lngR = lng * DEG2RAD;
  const cosLat = Math.cos(latR);
  return [
    radius * cosLat * Math.cos(lngR),
    radius * Math.sin(latR),
    radius * -cosLat * Math.sin(lngR),
  ];
}

// ---------------------------------------------------------------------------
// Centroid
// ---------------------------------------------------------------------------

/**
 * Compute the spherical centroid of a GeoJSON polygon's coordinate ring and
 * return the Cartesian position on the given radius.
 */
export function computeCentroid(
  coordinates: Position[][],
  radius: number,
): [number, number, number] {
  let sumX = 0;
  let sumY = 0;
  let sumZ = 0;
  let count = 0;

  for (const ring of coordinates) {
    for (const [lng, lat] of ring) {
      const [x, y, z] = latLngToCartesian(lat, lng, 1);
      sumX += x;
      sumY += y;
      sumZ += z;
      count++;
    }
  }

  if (count === 0) return [radius, 0, 0];

  // Normalize to unit sphere, then scale to radius
  const len = Math.sqrt(
    (sumX / count) ** 2 + (sumY / count) ** 2 + (sumZ / count) ** 2,
  );
  if (len === 0) return [radius, 0, 0];

  return [
    (radius * sumX) / count / len,
    (radius * sumY) / count / len,
    (radius * sumZ) / count / len,
  ];
}

// ---------------------------------------------------------------------------
// Triangulation helpers
// ---------------------------------------------------------------------------

/**
 * Generate interior seed points for a polygon using a regular geographic grid,
 * filtered by geoContains to keep only points inside the polygon (holes excluded).
 *
 * Used to seed Delaunay triangulation so that large polygons get interior
 * triangles rather than the hollow-ring artefact that earcut+tangent-plane
 * projection produced for countries spanning more than ~90° from their centroid.
 *
 * @param rings - Normalised polygon rings (outer first, then holes). No closing vertices.
 * @param resolution - Grid spacing in degrees (5° matches three-globe defaults).
 */
export function getInteriorGeoPoints(
  rings: Position[][],
  resolution: number,
): Position[] {
  // Scan outer ring vertices directly — avoids geoBounds which returns inverted
  // bounds for antimeridian-crossing polygons (e.g. Russia), triggering a false
  // `maxLng < minLng` guard that made the function return [] for such countries.
  const outer = rings[0];
  let minLng = Infinity, maxLng = -Infinity, minLat = Infinity, maxLat = -Infinity;
  for (const [lng, lat] of outer) {
    if (lng < minLng) minLng = lng;
    if (lng > maxLng) maxLng = lng;
    if (lat < minLat) minLat = lat;
    if (lat > maxLat) maxLat = lat;
  }

  const lngSpan = maxLng - minLng;
  const latSpan = maxLat - minLat;

  // Skip tiny polygons — flat earcut handles them fine without interior seeding
  if (lngSpan < resolution && latSpan < resolution) return [];

  // d3-geo requires properly closed rings (first === last vertex) for correct
  // containment checks.
  const closedRings = rings.map((ring) => [...ring, ring[0]]);
  const polygon = { type: "Polygon" as const, coordinates: closedRings };
  const result: Position[] = [];

  if (lngSpan <= 180) {
    // Normal (non-antimeridian-crossing) polygon: single rectangular grid.
    for (let lat = minLat + resolution / 2; lat < maxLat; lat += resolution) {
      for (let lng = minLng + resolution / 2; lng < maxLng; lng += resolution) {
        if (geoContains(polygon, [lng, lat])) result.push([lng, lat]);
      }
    }
  } else {
    // Antimeridian-crossing polygon (lngSpan > 180°, e.g. Russia, Fiji, Kiribati).
    // The raw vertex range spans both sides of ±180°. Generate two sub-grids:
    //   • Western sub-range: [minLngPositive .. 180)
    //   • Eastern sub-range: (-180 .. maxLngNegative]
    // Both filtered by geoContains which handles antimeridian correctly.
    let minLngPos = Infinity, maxLngNeg = -Infinity;
    for (const [lng] of outer) {
      if (lng >= 0 && lng < minLngPos) minLngPos = lng;
      if (lng < 0 && lng > maxLngNeg) maxLngNeg = lng;
    }

    // Western sub-range [minLngPos..180)
    for (let lat = minLat + resolution / 2; lat < maxLat; lat += resolution) {
      for (let lng = minLngPos + resolution / 2; lng < 180; lng += resolution) {
        if (geoContains(polygon, [lng, lat])) result.push([lng, lat]);
      }
    }
    // Eastern sub-range (-180..maxLngNeg]
    for (let lat = minLat + resolution / 2; lat < maxLat; lat += resolution) {
      for (let lng = -180 + resolution / 2; lng <= maxLngNeg; lng += resolution) {
        if (geoContains(polygon, [lng, lat])) result.push([lng, lat]);
      }
    }
  }

  return result;
}

/**
 * Insert great-circle midpoints along edges that span more than 5° of arc.
 *
 * Uses haversine distance (antimeridian-safe) to measure each edge, then
 * SLERP (spherical linear interpolation) in 3D Cartesian to place midpoints
 * exactly on the great-circle path.
 *
 * Why SLERP instead of linear (lng, lat) interpolation:
 *   - Linear interpolation wraps incorrectly across ±180° longitude
 *     (e.g., 170°E → 170°W: linear sweeps through Europe; SLERP stays in Pacific)
 *   - Linear deviates from the great-circle path by 2–10° for long edges,
 *     causing self-intersections in the tangent-plane projection for large countries
 */
export function subdivideRing(ring: Position[]): Position[] {
  const THRESHOLD_RAD = 5 * DEG2RAD;
  if (ring.length < 2) return ring;
  const result: Position[] = [];

  for (let i = 0; i < ring.length; i++) {
    const a = ring[i];
    const b = ring[(i + 1) % ring.length];
    result.push(a);

    const aLat = a[1] * DEG2RAD, aLng = a[0] * DEG2RAD;
    const bLat = b[1] * DEG2RAD, bLng = b[0] * DEG2RAD;

    // Haversine central angle — always returns the shorter arc (antimeridian-safe)
    const dLat = bLat - aLat, dLng = bLng - aLng;
    const sinHalfDLat = Math.sin(dLat / 2), sinHalfDLng = Math.sin(dLng / 2);
    const hav =
      sinHalfDLat * sinHalfDLat +
      Math.cos(aLat) * Math.cos(bLat) * sinHalfDLng * sinHalfDLng;
    const angle = 2 * Math.asin(Math.sqrt(Math.min(1, hav)));

    if (angle > THRESHOLD_RAD) {
      const steps = Math.ceil(angle / THRESHOLD_RAD);

      // 3D unit vectors — standard geographic convention: z = cos(lat)·sin(lng)
      // (differs from latLngToCartesian which negates z for Three.js Y-up rendering;
      //  sign doesn't matter here since midpoints are converted back to lat/lng via atan2)
      const ax = Math.cos(aLat) * Math.cos(aLng);
      const ay = Math.sin(aLat);
      const az = Math.cos(aLat) * Math.sin(aLng);
      const bx = Math.cos(bLat) * Math.cos(bLng);
      const by = Math.sin(bLat);
      const bz = Math.cos(bLat) * Math.sin(bLng);

      const dot = Math.min(1, Math.max(-1, ax * bx + ay * by + az * bz));
      const theta = Math.acos(dot);
      const sinTheta = Math.sin(theta);
      if (sinTheta < 1e-10) continue; // coincident or antipodal points — great circle undefined

      for (let s = 1; s < steps; s++) {
        const t = s / steps;
        const wa = Math.sin((1 - t) * theta) / sinTheta;
        const wb = Math.sin(t * theta) / sinTheta;
        const cx = wa * ax + wb * bx;
        const cy = wa * ay + wb * by;
        const cz = wa * az + wb * bz;
        result.push([
          Math.atan2(cz, cx) / DEG2RAD,
          Math.atan2(cy, Math.sqrt(cx * cx + cz * cz)) / DEG2RAD,
        ]);
      }
    }
  }

  return result;
}

/**
 * Triangulate a polygon (outer ring + optional holes) onto a sphere.
 *
 * Algorithm (replaces the old tangent-plane projection + earcut approach):
 *
 *  1. Normalise + SLERP-subdivide each ring (antimeridian-safe great-circle edges).
 *  2. Seed interior points via a regular geographic grid (getInteriorGeoPoints).
 *  3a. No interior points (small polygon): earcut on flat [lng, lat] coords.
 *  3b. Has interior points (large polygon): Delaunay on [lng, lat] + geoContains
 *      centroid filter to discard exterior / hole triangles.
 *  4. Convert ALL points to 3D after triangulation — never project to a tangent plane.
 *
 * The old tangent-plane projection produced self-intersecting 2D outlines for
 * polygons spanning more than ~90° of arc from their centroid (e.g. USA, Russia,
 * Canada), causing earcut to return no triangles and leaving a hollow ring artefact.
 */
export function triangulatePolygon(
  rings: Position[][],
  radius: number,
): { positions: number[]; indices: number[] } | null {
  // Normalize rings: remove closing duplicate vertex, discard degenerate rings
  const normalized = rings
    .map((ring) => {
      let coords = ring;
      if (
        coords.length > 1 &&
        coords[0][0] === coords[coords.length - 1][0] &&
        coords[0][1] === coords[coords.length - 1][1]
      ) {
        coords = coords.slice(0, -1);
      }
      return coords;
    })
    .filter((r) => r.length >= 3);

  if (normalized.length === 0) return null;

  const subdivided = normalized.map(subdivideRing);

  // Flatten all ring points and track hole start indices (for the earcut path)
  const edgePoints: Position[] = [];
  const holeIndices: number[] = [];

  for (let ri = 0; ri < subdivided.length; ri++) {
    if (ri > 0) holeIndices.push(edgePoints.length);
    for (const pt of subdivided[ri]) {
      edgePoints.push(pt);
    }
  }

  // Seed interior points via a regular geographic grid filtered by geoContains.
  // These force Delaunay to produce triangles covering the polygon interior,
  // eliminating the hollow-ring artefact for large countries.
  const innerPoints = getInteriorGeoPoints(normalized, 5);
  const points = [...edgePoints, ...innerPoints];

  let indices: number[];

  if (innerPoints.length === 0) {
    // Small polygon: earcut on flat [lng, lat] — no tangent-plane projection.
    const flat = points.flatMap(([lng, lat]) => [lng, lat]);
    const raw = earcut(flat, holeIndices.length > 0 ? holeIndices : undefined, 2);
    if (raw.length === 0) return null;
    indices = raw;
  } else {
    // Large polygon: Delaunay triangulation in [lng, lat] space + geoContains filter.
    // Closed rings required by d3-geo for correct containment checks.
    const closedRings = normalized.map((ring) => [...ring, ring[0]]);
    const geoPolygon = { type: "Polygon" as const, coordinates: closedRings };
    const flat = new Float64Array(points.length * 2);
    for (let i = 0; i < points.length; i++) {
      flat[i * 2] = points[i][0];
      flat[i * 2 + 1] = points[i][1];
    }
    const delaunay = new Delaunator(flat);
    indices = [];
    for (let t = 0; t < delaunay.triangles.length; t += 3) {
      const a = delaunay.triangles[t];
      const b = delaunay.triangles[t + 1];
      const c = delaunay.triangles[t + 2];
      // Antimeridian-safe centroid: unwrap lngB and lngC relative to lngA so that
      // triangles straddling ±180° (e.g. Russia's eastern coast) get a correct
      // geographic centroid. Without unwrapping, a triangle with vertices at
      // +178°, −178°, −175° computes centroid = (178−178−175)/3 = −58° (Atlantic!),
      // causing geoContains to reject it and leaving a seam hole at the antimeridian.
      const lngA = points[a][0];
      const lngB = points[b][0];
      const lngC = points[c][0];
      const unwrappedB = lngB - lngA > 180 ? lngB - 360 : lngB - lngA < -180 ? lngB + 360 : lngB;
      const unwrappedC = lngC - lngA > 180 ? lngC - 360 : lngC - lngA < -180 ? lngC + 360 : lngC;
      const rawCentLng = (lngA + unwrappedB + unwrappedC) / 3;
      // Wrap back to [-180, 180] before passing to geoContains
      const centLng = ((rawCentLng + 180) % 360 + 360) % 360 - 180;
      const centLat = (points[a][1] + points[b][1] + points[c][1]) / 3;
      if (geoContains(geoPolygon, [centLng, centLat])) {
        indices.push(a, b, c);
      }
    }
    if (indices.length === 0) return null;
  }

  // Convert all points to 3D AFTER triangulation — never project to a tangent plane.
  const positions = points.flatMap(([lng, lat]) =>
    latLngToCartesian(lat, lng, radius),
  );

  return { positions, indices };
}

// ---------------------------------------------------------------------------
// Build geometry for a GeoJSON Feature
// ---------------------------------------------------------------------------

/**
 * Convert a GeoJSON Feature (Polygon or MultiPolygon) to a Three.js
 * BufferGeometry with triangulated faces on a sphere of the given radius.
 */
export function buildCountryGeometry(
  feature: Feature<Polygon | MultiPolygon>,
  radius: number,
): BufferGeometry | null {
  const polygons: Position[][][] =
    feature.geometry.type === "MultiPolygon"
      ? feature.geometry.coordinates
      : [feature.geometry.coordinates];

  const allPositions: number[] = [];
  const allIndices: number[] = [];
  let indexOffset = 0;

  for (const polygon of polygons) {
    const result = triangulatePolygon(polygon, radius);
    if (!result) continue;

    allPositions.push(...result.positions);
    for (const idx of result.indices) {
      allIndices.push(idx + indexOffset);
    }
    indexOffset += result.positions.length / 3;
  }

  if (allPositions.length === 0) return null;

  const geometry = new BufferGeometry();
  geometry.setAttribute(
    "position",
    new Float32BufferAttribute(new Float32Array(allPositions), 3),
  );
  geometry.setIndex(new BufferAttribute(new Uint32Array(allIndices), 1));
  geometry.computeVertexNormals();

  return geometry;
}

// ---------------------------------------------------------------------------
// ISO 3166-1 numeric → alpha-2 mapping
// ---------------------------------------------------------------------------

/**
 * Comprehensive mapping from ISO 3166-1 numeric codes (as strings, matching
 * the world-atlas TopoJSON `id` field) to lowercase ISO 3166-1 alpha-2 codes.
 */
export const ISO_NUMERIC_TO_ALPHA2: Record<string, string> = {
  "004": "af", // Afghanistan
  "008": "al", // Albania
  "010": "aq", // Antarctica
  "012": "dz", // Algeria
  "016": "as", // American Samoa
  "020": "ad", // Andorra
  "024": "ao", // Angola
  "028": "ag", // Antigua and Barbuda
  "031": "az", // Azerbaijan
  "032": "ar", // Argentina
  "036": "au", // Australia
  "040": "at", // Austria
  "044": "bs", // Bahamas
  "048": "bh", // Bahrain
  "050": "bd", // Bangladesh
  "051": "am", // Armenia
  "052": "bb", // Barbados
  "056": "be", // Belgium
  "060": "bm", // Bermuda
  "064": "bt", // Bhutan
  "068": "bo", // Bolivia
  "070": "ba", // Bosnia and Herzegovina
  "072": "bw", // Botswana
  "076": "br", // Brazil
  "084": "bz", // Belize
  "090": "sb", // Solomon Islands
  "096": "bn", // Brunei
  "100": "bg", // Bulgaria
  "104": "mm", // Myanmar
  "108": "bi", // Burundi
  "112": "by", // Belarus
  "116": "kh", // Cambodia
  "120": "cm", // Cameroon
  "124": "ca", // Canada
  "132": "cv", // Cape Verde
  "140": "cf", // Central African Republic
  "144": "lk", // Sri Lanka
  "148": "td", // Chad
  "152": "cl", // Chile
  "156": "cn", // China
  "158": "tw", // Taiwan
  "170": "co", // Colombia
  "174": "km", // Comoros
  "175": "yt", // Mayotte
  "178": "cg", // Congo (Republic)
  "180": "cd", // Congo (DRC)
  "184": "ck", // Cook Islands
  "188": "cr", // Costa Rica
  "191": "hr", // Croatia
  "192": "cu", // Cuba
  "196": "cy", // Cyprus
  "203": "cz", // Czech Republic
  "204": "bj", // Benin
  "208": "dk", // Denmark
  "212": "dm", // Dominica
  "214": "do", // Dominican Republic
  "218": "ec", // Ecuador
  "222": "sv", // El Salvador
  "226": "gq", // Equatorial Guinea
  "231": "et", // Ethiopia
  "232": "er", // Eritrea
  "233": "ee", // Estonia
  "234": "fo", // Faroe Islands
  "238": "fk", // Falkland Islands
  "242": "fj", // Fiji
  "246": "fi", // Finland
  "250": "fr", // France
  "258": "pf", // French Polynesia
  "260": "tf", // French Southern Territories
  "262": "dj", // Djibouti
  "266": "ga", // Gabon
  "268": "ge", // Georgia
  "270": "gm", // Gambia
  "275": "ps", // Palestine
  "276": "de", // Germany
  "288": "gh", // Ghana
  "296": "ki", // Kiribati
  "300": "gr", // Greece
  "304": "gl", // Greenland
  "308": "gd", // Grenada
  "316": "gu", // Guam
  "320": "gt", // Guatemala
  "324": "gn", // Guinea
  "328": "gy", // Guyana
  "332": "ht", // Haiti
  "336": "va", // Vatican City
  "340": "hn", // Honduras
  "344": "hk", // Hong Kong
  "348": "hu", // Hungary
  "352": "is", // Iceland
  "356": "in", // India
  "360": "id", // Indonesia
  "364": "ir", // Iran
  "368": "iq", // Iraq
  "372": "ie", // Ireland
  "376": "il", // Israel
  "380": "it", // Italy
  "384": "ci", // Côte d'Ivoire
  "388": "jm", // Jamaica
  "392": "jp", // Japan
  "398": "kz", // Kazakhstan
  "400": "jo", // Jordan
  "404": "ke", // Kenya
  "408": "kp", // North Korea
  "410": "kr", // South Korea
  "414": "kw", // Kuwait
  "417": "kg", // Kyrgyzstan
  "418": "la", // Laos
  "422": "lb", // Lebanon
  "426": "ls", // Lesotho
  "428": "lv", // Latvia
  "430": "lr", // Liberia
  "434": "ly", // Libya
  "438": "li", // Liechtenstein
  "440": "lt", // Lithuania
  "442": "lu", // Luxembourg
  "450": "mg", // Madagascar
  "454": "mw", // Malawi
  "458": "my", // Malaysia
  "462": "mv", // Maldives
  "466": "ml", // Mali
  "470": "mt", // Malta
  "478": "mr", // Mauritania
  "480": "mu", // Mauritius
  "484": "mx", // Mexico
  "492": "mc", // Monaco
  "496": "mn", // Mongolia
  "498": "md", // Moldova
  "499": "me", // Montenegro
  "504": "ma", // Morocco
  "508": "mz", // Mozambique
  "512": "om", // Oman
  "516": "na", // Namibia
  "520": "nr", // Nauru
  "524": "np", // Nepal
  "528": "nl", // Netherlands
  "531": "cw", // Curaçao
  "533": "aw", // Aruba
  "540": "nc", // New Caledonia
  "548": "vu", // Vanuatu
  "554": "nz", // New Zealand
  "558": "ni", // Nicaragua
  "562": "ne", // Niger
  "566": "ng", // Nigeria
  "570": "nu", // Niue
  "578": "no", // Norway
  "583": "fm", // Micronesia
  "584": "mh", // Marshall Islands
  "585": "pw", // Palau
  "586": "pk", // Pakistan
  "591": "pa", // Panama
  "598": "pg", // Papua New Guinea
  "600": "py", // Paraguay
  "604": "pe", // Peru
  "608": "ph", // Philippines
  "616": "pl", // Poland
  "620": "pt", // Portugal
  "624": "gw", // Guinea-Bissau
  "626": "tl", // Timor-Leste
  "630": "pr", // Puerto Rico
  "634": "qa", // Qatar
  "642": "ro", // Romania
  "643": "ru", // Russia
  "646": "rw", // Rwanda
  "659": "kn", // Saint Kitts and Nevis
  "662": "lc", // Saint Lucia
  "670": "vc", // Saint Vincent and the Grenadines
  "674": "sm", // San Marino
  "678": "st", // São Tomé and Príncipe
  "682": "sa", // Saudi Arabia
  "686": "sn", // Senegal
  "688": "rs", // Serbia
  "690": "sc", // Seychelles
  "694": "sl", // Sierra Leone
  "702": "sg", // Singapore
  "703": "sk", // Slovakia
  "704": "vn", // Vietnam
  "705": "si", // Slovenia
  "706": "so", // Somalia
  "710": "za", // South Africa
  "716": "zw", // Zimbabwe
  "724": "es", // Spain
  "728": "ss", // South Sudan
  "729": "sd", // Sudan
  "732": "eh", // Western Sahara
  "740": "sr", // Suriname
  "748": "sz", // Eswatini
  "752": "se", // Sweden
  "756": "ch", // Switzerland
  "760": "sy", // Syria
  "762": "tj", // Tajikistan
  "764": "th", // Thailand
  "768": "tg", // Togo
  "776": "to", // Tonga
  "780": "tt", // Trinidad and Tobago
  "784": "ae", // United Arab Emirates
  "788": "tn", // Tunisia
  "792": "tr", // Turkey
  "795": "tm", // Turkmenistan
  "798": "tv", // Tuvalu
  "800": "ug", // Uganda
  "804": "ua", // Ukraine
  "807": "mk", // North Macedonia
  "818": "eg", // Egypt
  "826": "gb", // United Kingdom
  "834": "tz", // Tanzania
  "840": "us", // United States
  "854": "bf", // Burkina Faso
  "858": "uy", // Uruguay
  "860": "uz", // Uzbekistan
  "862": "ve", // Venezuela
  "882": "ws", // Samoa
  "887": "ye", // Yemen
  "894": "zm", // Zambia
  "926": "xk", // Kosovo (user-assigned)
};

/**
 * Look up the lowercase alpha-2 flag code for a TopoJSON feature.
 * Returns null if the feature has no mappable id.
 */
export function getCountryFlagCode(
  feature: Feature,
): string | null {
  const id = (feature as Feature & { id?: string }).id as string | undefined;
  if (!id) return null;
  return ISO_NUMERIC_TO_ALPHA2[id] ?? null;
}

// ---------------------------------------------------------------------------
// Load world topology
// ---------------------------------------------------------------------------

/**
 * Fetch the Natural Earth world topology and convert to GeoJSON features.
 *
 * Resolution: world-50m.json (~200 KB, 50 km coastline tolerance)
 * Upgraded from world-110m.json on 2026-04-21 to reduce polygon edge lengths,
 * which improves SLERP subdivision quality and reduces triangulation artifacts.
 *
 * Both resolution files are kept in public/geo/ for easy rollback.
 *
 * ── To revert to 110m (lower quality, ~100 KB, faster triangulation) ────────
 *   Change the URL below from "/geo/world-50m.json" to "/geo/world-110m.json"
 *   Trade-offs:
 *     world-110m  ~100 KB  110 km tolerance  faster triangulation  jagged coasts
 *     world-50m   ~200 KB   50 km tolerance  better triangulation  smooth coasts  ← current
 *     world-10m  ~1000 KB   10 km tolerance  too large for browser use
 * ────────────────────────────────────────────────────────────────────────────
 */
let _topologyCache: Feature<Polygon | MultiPolygon>[] | null = null;

/** @internal Test-only — resets the module-level topology cache */
export function _resetTopologyCacheForTesting(): void {
  _topologyCache = null;
}

export async function loadWorldTopology(): Promise<
  Feature<Polygon | MultiPolygon>[]
> {
  if (_topologyCache) return _topologyCache;

  const response = await fetch("/geo/world-50m.json");
  const topology = (await response.json()) as Topology<{
    countries: GeometryCollection;
  }>;

  const { features } = topojson.feature(
    topology,
    topology.objects.countries,
  ) as unknown as { features: Feature<Polygon | MultiPolygon>[] };

  _topologyCache = features;
  return _topologyCache;
}
