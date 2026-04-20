import { useMemo, type RefObject } from "react";
import { Html } from "@react-three/drei";
import type { ProcessedCountry } from "@/lib/hooks/useGlobeData";
import { countriesData } from "@/data/countries";
import type { Locale } from "@/data/types";
import type * as THREE from "three";

type CountryLabelsProps = {
  countries: ProcessedCountry[];
  visible: boolean;
  locale: Locale;
  sphereRef: RefObject<THREE.Mesh | null>;
};

export function CountryLabels({ countries, visible, locale, sphereRef }: CountryLabelsProps) {

  const nameBySlug = useMemo(
    () => new Map(countriesData.map((c) => [c.slug, c.translations[locale].name])),
    [locale],
  );

  if (!visible) return null;

  return (
    <>
      {countries.map((c) => (
        <Html
          key={c.slug}
          position={c.centroid}
          center
          sprite
          zIndexRange={[0, 0]}
          occlude={[sphereRef as RefObject<THREE.Object3D>]}
        >
          <span
            className="pointer-events-none select-none whitespace-nowrap text-[10px] font-bold text-white"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}
          >
            {nameBySlug.get(c.slug) ?? c.slug}
          </span>
        </Html>
      ))}
    </>
  );
}
