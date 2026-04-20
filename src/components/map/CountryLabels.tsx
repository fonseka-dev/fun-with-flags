import { useMemo } from "react";
import { Html } from "@react-three/drei";
import type { ProcessedCountry } from "@/lib/hooks/useGlobeData";
import { countriesData } from "@/data/countries";
import type { Locale } from "@/data/types";

type CountryLabelsProps = {
  countries: ProcessedCountry[];
  visible: boolean;
  locale: Locale;
};

export function CountryLabels({ countries, visible, locale }: CountryLabelsProps) {

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
          distanceFactor={6}
          sprite
          zIndexRange={[0, 0]}
        >
          <span
            className="pointer-events-none whitespace-nowrap text-[10px] font-bold text-white"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}
          >
            {nameBySlug.get(c.slug) ?? c.slug}
          </span>
        </Html>
      ))}
    </>
  );
}
