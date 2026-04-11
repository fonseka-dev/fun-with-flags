import { Continent } from "./types";

export type ContinentMeta = {
  name: Continent;
  icon: string;
  color: string;
  mapColor: string;
};

export const continents: ContinentMeta[] = [
  { name: "Africa", icon: "terrain", color: "secondary", mapColor: "#176a21" },
  { name: "Asia", icon: "temple_buddhist", color: "tertiary", mapColor: "#755700" },
  { name: "Europe", icon: "castle", color: "primary", mapColor: "#0052d0" },
  { name: "North America", icon: "forest", color: "primary", mapColor: "#e07b00" },
  { name: "South America", icon: "landscape", color: "primary", mapColor: "#c24b00" },
  { name: "Oceania", icon: "tsunami", color: "primary", mapColor: "#008080" },
];

export function getContinentMeta(name: Continent): ContinentMeta {
  const meta = continents.find((c) => c.name === name);
  if (!meta) throw new Error(`Unknown continent: ${name}`);
  return meta;
}
