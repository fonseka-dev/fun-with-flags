import { useState, useMemo, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { StarField } from "./StarField";
import { GlobeSphere } from "./GlobeSphere";
import { CountryMeshes } from "./CountryMeshes";
import { CountryPopup } from "./CountryPopup";
import { CountryLabels } from "./CountryLabels";
import { useGlobeData } from "@/lib/hooks/useGlobeData";
import { countriesData } from "@/data/countries";
import type { Locale } from "@/data/types";

function ZoomController({ zoomRef }: { zoomRef: RefObject<number> }) {
  useFrame(({ camera }) => {
    const cmd = zoomRef.current;
    if (cmd === 1) {
      camera.position.z = Math.max(camera.position.z - 0.1, 1.5);
      zoomRef.current = 0;
    } else if (cmd === -1) {
      camera.position.z = Math.min(camera.position.z + 0.1, 4);
      zoomRef.current = 0;
    } else if (cmd === 2) {
      camera.position.set(0, 0, 2.5);
      zoomRef.current = 0;
    }
  });
  return null;
}

type GlobeSceneProps = {
  discoveredSlugs: string[];
  onCountrySelect?: (slug: string) => void;
  showLabels: boolean;
  zoomRef: RefObject<number>;
  locale: Locale;
  globeT: { capital: string; explore: string; markExplored: string; alreadyExplored: string };
  isDaylight: boolean;
  autoRotate: boolean;
  discoverCountry: (slug: string) => void;
};

export function GlobeScene({ discoveredSlugs, onCountrySelect, showLabels, zoomRef, locale, globeT, isDaylight, autoRotate, discoverCountry }: GlobeSceneProps) {
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

    const tr = entry.translations[locale];
    const funFact =
      tr.funFacts.length > 0
        ? tr.funFacts[0]
        : null;

    return {
      slug: entry.slug,
      flagCode: entry.flagCode,
      name: tr.name,
      capital: tr.capital,
      continent: entry.continent,
      funFact,
      centroid: processed.centroid,
      isDiscovered: discoveredSlugs.includes(entry.slug),
    };
  }, [selectedSlug, countries, locale, discoveredSlugs]);

  return (
    <>
      <StarField />
      <ambientLight intensity={isDaylight ? 1.0 : 0.15} />
      <directionalLight position={[5, 3, 5]} intensity={isDaylight ? 0.3 : 1.0} />
      <GlobeSphere />
      <CountryMeshes
        countries={countries}
        discoveredSlugs={discoveredSlugs}
        onCountrySelect={handleCountrySelect}
      />
      <CountryLabels countries={countries} visible={showLabels} locale={locale} />
      {popupData && (
        <CountryPopup
          {...popupData}
          locale={locale}
          capitalLabel={globeT.capital}
          exploreLabel={globeT.explore}
          markExploredLabel={globeT.markExplored}
          alreadyExploredLabel={globeT.alreadyExplored}
          onMarkExplored={discoverCountry}
          onClose={() => setSelectedSlug(null)}
        />
      )}
      <ZoomController zoomRef={zoomRef} />
      <OrbitControls
        enablePan={false}
        enableDamping={true}
        dampingFactor={0.05}
        minDistance={1.5}
        maxDistance={4}
        rotateSpeed={0.5}
        autoRotate={autoRotate && !selectedSlug}
        autoRotateSpeed={0.5}
      />
    </>
  );
}
