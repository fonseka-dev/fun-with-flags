import * as THREE from "three";
import type { ThreeEvent } from "@react-three/fiber";
import type { ProcessedCountry } from "@/lib/hooks/useGlobeData";
import type { Continent } from "@/data/types";

const CONTINENT_COLORS: Record<Continent, string> = {
  Africa: "#4CAF50",
  Asia: "#FF6B6B",
  Europe: "#5C6BC0",
  "North America": "#FFB74D",
  "South America": "#26A69A",
  Oceania: "#AB47BC",
};

const UNDISCOVERED_COLOR = "#C0C0C0";

type CountryMeshesProps = {
  countries: ProcessedCountry[];
  discoveredSlugs: string[];
  onCountrySelect?: (slug: string) => void;
  mode: "realistic" | "political";
};

export function CountryMeshes({
  countries,
  discoveredSlugs,
  onCountrySelect,
  mode,
}: CountryMeshesProps) {
  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    const mat = (e.object as THREE.Mesh).material as THREE.MeshStandardMaterial;
    mat.emissive.set("#333333");
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
    const mat = (e.object as THREE.Mesh).material as THREE.MeshStandardMaterial;
    mat.emissive.set("#000000");
    document.body.style.cursor = "default";
  };

  return (
    <>
      {countries.map((country) => {
        const discovered = discoveredSlugs.includes(country.slug);
        const color = discovered
          ? CONTINENT_COLORS[country.continent]
          : UNDISCOVERED_COLOR;

        return (
          <mesh
            key={country.slug}
            geometry={country.geometry}
            userData={{ slug: country.slug }}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            onClick={(e) => {
              e.stopPropagation();
              onCountrySelect?.(country.slug);
            }}
          >
          <meshStandardMaterial
              color={color}
              roughness={0.6}
              metalness={0.1}
              transparent={mode === "realistic"}
              opacity={mode === "realistic" ? 0 : 1}
            />
          </mesh>
        );
      })}
    </>
  );
}
