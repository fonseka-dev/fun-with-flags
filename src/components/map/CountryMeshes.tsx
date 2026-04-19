import { useGlobeData } from "@/lib/hooks/useGlobeData";
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
  discoveredSlugs: string[];
  onCountrySelect?: (slug: string) => void;
};

export function CountryMeshes({
  discoveredSlugs,
  onCountrySelect,
}: CountryMeshesProps) {
  const { countries } = useGlobeData();

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
          >
            <meshStandardMaterial
              color={color}
              roughness={0.6}
              metalness={0.1}
            />
          </mesh>
        );
      })}
    </>
  );
}
