"use client";

import { Suspense, lazy, useState, useRef, useEffect, useMemo, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useLocale, useTranslations } from "next-intl";
import { GlobeControls } from "./GlobeControls";
import { CountryPopup } from "./CountryPopup";
import { countriesData } from "@/data/countries";
import { useGlobeData } from "@/lib/hooks/useGlobeData";
import type { Locale } from "@/data/types";
import type { RootState } from "@react-three/fiber";

const GlobeScene = lazy(() =>
  import("./GlobeScene").then((m) => ({ default: m.GlobeScene })),
);

const SESSION_KEY = "globe-camera";

type GlobeProps = {
  discoveredSlugs: string[];
  onCountrySelect?: (slug: string) => void;
  discoverCountry: (slug: string) => void;
};

export function Globe({ discoveredSlugs, onCountrySelect, discoverCountry }: GlobeProps) {
  const { countries, loading, upgrading } = useGlobeData();
  const [showLabels, setShowLabels] = useState(false);
  const [isDaylight, setIsDaylight] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [globeMode, setGlobeMode] = useState<"realistic" | "political">("political");
  const [hoverMode, setHoverMode] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [geolocating, setGeolocating] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);
  const geoErrorTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cameraRef = useRef<RootState["camera"] | null>(null);
  const closePopupRef = useRef<(() => void) | null>(null);
  const locale = useLocale() as Locale;
  const t = useTranslations("globe");

  // Keep closePopupRef in sync with selectedSlug setter
  useEffect(() => {
    closePopupRef.current = () => setSelectedSlug(null);
  });

  const popupData = useMemo(() => {
    if (!selectedSlug) return null;
    const entry = countriesData.find((c) => c.slug === selectedSlug);
    if (!entry) return null;
    const tr = entry.translations[locale];
    return {
      slug: entry.slug,
      flagCode: entry.flagCode,
      name: tr.name,
      capital: tr.capital,
      continent: entry.continent,
      funFact: tr.funFacts.length > 0 ? tr.funFacts[0] : null,
      isDiscovered: discoveredSlugs.includes(entry.slug),
    };
  }, [selectedSlug, locale, discoveredSlugs]);

  const handleReset = useCallback(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 0, 2.5);
    }
  }, []);

  const handleGeolocate = useCallback(() => {
    if (!navigator.geolocation) {
      if (geoErrorTimer.current) clearTimeout(geoErrorTimer.current);
      setGeoError(t("geolocationError"));
      geoErrorTimer.current = setTimeout(() => setGeoError(null), 3000);
      return;
    }
    setGeolocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const r = 2.0;
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lng + 180) * (Math.PI / 180);
        const x = -r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.cos(phi);
        const z = r * Math.sin(phi) * Math.sin(theta);
        if (cameraRef.current) {
          cameraRef.current.position.set(x, y, z);
        }
        setGeolocating(false);
      },
      () => {
        if (geoErrorTimer.current) clearTimeout(geoErrorTimer.current);
        setGeoError(t("geolocationError"));
        geoErrorTimer.current = setTimeout(() => setGeoError(null), 3000);
        setGeolocating(false);
      },
    );
  }, [t]);

  const globeT = useMemo(
    () => ({
      capital: t("capital"),
      explore: t("explore"),
      markExplored: t("markExplored"),
      alreadyExplored: t("alreadyExplored"),
    }),
    [t],
  );

  const handleClosePopup = useCallback(() => setSelectedSlug(null), []);
  const handleToggleLabels = useCallback(() => setShowLabels((v) => !v), []);
  const handleToggleRotate = useCallback(() => setAutoRotate((v) => !v), []);
  const handleToggleDaylight = useCallback(() => setIsDaylight((v) => !v), []);
  const handleToggleMode = useCallback(() => setGlobeMode((m) => m === "realistic" ? "political" : "realistic"), []);
  const handleToggleHoverMode = useCallback(() => setHoverMode((v) => !v), []);

  const handleCreated = useCallback((state: RootState) => {
    cameraRef.current = state.camera;
    try {
      const saved = sessionStorage.getItem(SESSION_KEY);
      if (saved) {
        const { x, y, z } = JSON.parse(saved);
        state.camera.position.set(x, y, z);
      }
    } catch {
      // sessionStorage unavailable — ignore
    }
  }, []);

  useEffect(() => {
    return () => {
      try {
        const cam = cameraRef.current;
        if (cam) {
          sessionStorage.setItem(
            SESSION_KEY,
            JSON.stringify({ x: cam.position.x, y: cam.position.y, z: cam.position.z }),
          );
        }
      } catch {
        // ignore
      }
    };
  }, []);

  return (
    <div className="relative h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 45 }}
        dpr={[1, 2]}
        style={{ background: "#0A0E27" }}
        onCreated={handleCreated}
        onPointerMissed={() => closePopupRef.current?.()}
      >
        <Suspense fallback={
          <Html center>
            <span className="material-symbols-outlined animate-spin text-5xl text-white/60">
              public
            </span>
          </Html>
        }>
          <GlobeScene
            countries={countries}
            upgrading={upgrading}
            discoveredSlugs={discoveredSlugs}
            onCountrySelect={onCountrySelect}
            showLabels={showLabels}
            locale={locale}
            globeT={globeT}
            isDaylight={isDaylight}
            autoRotate={autoRotate}
            discoverCountry={discoverCountry}
            closePopupRef={closePopupRef}
            globeMode={globeMode}
            hoverMode={hoverMode}
            selectedSlug={selectedSlug}
            setSelectedSlug={setSelectedSlug}
          />
        </Suspense>
      </Canvas>
      {loading && (
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-12">
          <span className="rounded-full bg-black/40 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
            {t("loadingCountries")}
          </span>
        </div>
      )}
      {popupData && (
        <div className="pointer-events-none absolute left-6 top-1/2 z-30 -translate-y-1/2">
          <div className="pointer-events-auto">
            <CountryPopup
              {...popupData}
              locale={locale}
              capitalLabel={t("capital")}
              exploreLabel={t("explore")}
              markExploredLabel={t("markExplored")}
              alreadyExploredLabel={t("alreadyExplored")}
              onMarkExplored={discoverCountry}
              onClose={handleClosePopup}
            />
          </div>
        </div>
      )}
      <GlobeControls
        onReset={handleReset}
        showLabels={showLabels}
        onToggleLabels={handleToggleLabels}
        autoRotate={autoRotate}
        onToggleRotate={handleToggleRotate}
        isDaylight={isDaylight}
        onToggleDaylight={handleToggleDaylight}
        globeMode={globeMode}
        onToggleMode={handleToggleMode}
        hoverMode={hoverMode}
        onToggleHoverMode={handleToggleHoverMode}
        onGeolocate={handleGeolocate}
        geolocating={geolocating}
      />
      {geoError && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 text-white text-sm px-4 py-2 rounded-xl backdrop-blur-md pointer-events-none">
          {geoError}
        </div>
      )}
    </div>
  );
}
