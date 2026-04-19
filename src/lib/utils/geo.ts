import * as topojson from "topojson-client";
import { geoArea, geoCentroid } from "d3-geo";
import earcut from "earcut";
import {
  BufferGeometry,
  BufferAttribute,
  Float32BufferAttribute,
  Vector3,
} from "three";
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
 * Project 3D ring vertices onto a 2D tangent plane for earcut triangulation.
 * Uses the polygon centroid as origin and builds an orthonormal basis.
 */
function projectToTangentPlane(
  positions3D: Float64Array,
  centroid: Vector3,
): Float64Array {
  // Build orthonormal basis on the tangent plane
  const normal = centroid.clone().normalize();
  const up = new Vector3(0, 1, 0);
  let tangentU = new Vector3().crossVectors(up, normal);
  if (tangentU.lengthSq() < 1e-8) {
    tangentU = new Vector3().crossVectors(new Vector3(1, 0, 0), normal);
  }
  tangentU.normalize();
  const tangentV = new Vector3().crossVectors(normal, tangentU).normalize();

  const vertexCount = positions3D.length / 3;
  const result = new Float64Array(vertexCount * 2);
  const v = new Vector3();

  for (let i = 0; i < vertexCount; i++) {
    v.set(
      positions3D[i * 3] - centroid.x,
      positions3D[i * 3 + 1] - centroid.y,
      positions3D[i * 3 + 2] - centroid.z,
    );
    result[i * 2] = v.dot(tangentU);
    result[i * 2 + 1] = v.dot(tangentV);
  }

  return result;
}

function triangulateRing(
  ring: Position[],
  radius: number,
): { positions: number[]; indices: number[] } | null {
  // Remove closing vertex if it duplicates the first
  let coords = ring;
  if (
    coords.length > 1 &&
    coords[0][0] === coords[coords.length - 1][0] &&
    coords[0][1] === coords[coords.length - 1][1]
  ) {
    coords = coords.slice(0, -1);
  }
  if (coords.length < 3) return null;

  // Build 3D positions
  const positions3D = new Float64Array(coords.length * 3);
  let cx = 0,
    cy = 0,
    cz = 0;

  for (let i = 0; i < coords.length; i++) {
    const [lng, lat] = coords[i];
    const [x, y, z] = latLngToCartesian(lat, lng, radius);
    positions3D[i * 3] = x;
    positions3D[i * 3 + 1] = y;
    positions3D[i * 3 + 2] = z;
    cx += x;
    cy += y;
    cz += z;
  }

  const centroid = new Vector3(
    cx / coords.length,
    cy / coords.length,
    cz / coords.length,
  );

  // Project to 2D, triangulate
  const coords2D = projectToTangentPlane(positions3D, centroid);
  const indices = earcut(Array.from(coords2D), undefined, 2);
  if (indices.length === 0) return null;

  return { positions: Array.from(positions3D), indices };
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
    // Use only the outer ring (index 0) — skip holes for globe display
    const outerRing = polygon[0];
    if (!outerRing) continue;

    const result = triangulateRing(outerRing, radius);
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
 * Fetch the Natural Earth 110m TopoJSON and convert to GeoJSON features.
 */
export async function loadWorldTopology(): Promise<
  Feature<Polygon | MultiPolygon>[]
> {
  const response = await fetch("/geo/world-110m.json");
  const topology = (await response.json()) as Topology<{
    countries: GeometryCollection;
  }>;

  const { features } = topojson.feature(
    topology,
    topology.objects.countries,
  ) as unknown as { features: Feature<Polygon | MultiPolygon>[] };

  return features;
}
