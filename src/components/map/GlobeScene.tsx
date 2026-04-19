import { useState, useMemo } from "react";
import { OrbitControls } from "@react-three/drei";
import { GlobeSphere } from "./GlobeSphere";
import { CountryMeshes } from "./CountryMeshes";
import { CountryPopup } from "./CountryPopup";
import { useGlobeData } from "@/lib/hooks/useGlobeData";
import { countriesData } from "@/data/countries";

type GlobeSceneProps = {
  discoveredSlugs: string[];
  onCountrySelect?: (slug: string) => void;
};

export function GlobeScene({ discoveredSlugs, onCountrySelect }: GlobeSceneProps) {
  const { countries } = useGlobeData();
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const handleCountrySelect = (slug: string) => {
    setSelectedSlug(slug);
    onCountrySelect?.(slug);
  };

  const popupData = useMemo(() => {
    if (!selectedSlug) return null;

    const processed = countries.find((c) => c.slug === selectedSlug);
    if (!processed) return null;

    const entry = countriesData.find((c) => c.slug === selectedSlug);
    if (!entry) return null;

    const t = entry.translations.en;
    const funFact =
      t.funFacts.length > 0
        ? t.funFacts[Math.floor(Math.random() * t.funFacts.length)]
        : null;

    return {
      slug: entry.slug,
      flagCode: entry.flagCode,
      name: t.name,
      capital: t.capital,
      continent: entry.continent,
      funFact,
      centroid: processed.centroid,
    };
  }, [selectedSlug, countries]);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 3, 5]} intensity={0.8} />
      <GlobeSphere />
      <CountryMeshes
        countries={countries}
        discoveredSlugs={discoveredSlugs}
        onCountrySelect={handleCountrySelect}
      />
      {popupData && (
        <CountryPopup
          {...popupData}
          onClose={() => setSelectedSlug(null)}
        />
      )}
      <OrbitControls
        enablePan={false}
        enableDamping={true}
        dampingFactor={0.05}
        minDistance={1.5}
        maxDistance={4}
        rotateSpeed={0.5}
        autoRotate={!selectedSlug}
        autoRotateSpeed={0.5}
      />
    </>
  );
}
