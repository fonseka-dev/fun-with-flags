import { useRef, type RefObject } from "react";
import { OrbitControls } from "@react-three/drei";
import { StarField } from "./StarField";
import { GlobeSphere } from "./GlobeSphere";
import { CountryMeshes } from "./CountryMeshes";
import { CountryLabels } from "./CountryLabels";
import type { ProcessedCountry } from "@/lib/hooks/useGlobeData";
import type * as THREE from "three";
import type { Locale } from "@/data/types";

type GlobeSceneProps = {
  countries: ProcessedCountry[];
  upgrading: boolean;
  discoveredSlugs: string[];
  onCountrySelect?: (slug: string) => void;
  showLabels: boolean;
  locale: Locale;
  globeT: { capital: string; explore: string; markExplored: string; alreadyExplored: string };
  isDaylight: boolean;
  autoRotate: boolean;
  discoverCountry: (slug: string) => void;
  closePopupRef: RefObject<(() => void) | null>;
  globeMode: "realistic" | "political";
  hoverMode: boolean;
  selectedSlug: string | null;
  setSelectedSlug: (slug: string | null) => void;
};

export function GlobeScene({ countries, upgrading, discoveredSlugs, onCountrySelect, showLabels, locale, globeT, isDaylight, autoRotate, discoverCountry, closePopupRef, globeMode, hoverMode, selectedSlug, setSelectedSlug }: GlobeSceneProps) {
  const sphereRef = useRef<THREE.Mesh>(null);

  const handleCountrySelect = (slug: string) => {
    setSelectedSlug(slug);
    onCountrySelect?.(slug);
  };

  return (
    <>
      <StarField />
      <ambientLight intensity={globeMode === "realistic" ? 1.0 : isDaylight ? 1.0 : 0.4} />
      <directionalLight position={[5, 3, 5]} intensity={isDaylight ? 0.3 : 1.0} />
      <GlobeSphere ref={sphereRef} mode={globeMode} />
      <CountryMeshes
        countries={countries}
        discoveredSlugs={discoveredSlugs}
        onCountrySelect={handleCountrySelect}
        mode={globeMode}
        hoverMode={hoverMode}
        onCountryHover={(slug) => {
          setSelectedSlug(slug);
          if (slug) onCountrySelect?.(slug);
        }}
      />
      <CountryLabels countries={countries} visible={showLabels} locale={locale} sphereRef={sphereRef} />
      <OrbitControls
        enablePan={false}
        enableZoom={true}
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
