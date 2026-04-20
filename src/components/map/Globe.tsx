"use client";

import { Suspense, lazy, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useLocale, useTranslations } from "next-intl";
import { GlobeControls } from "./GlobeControls";
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
  const [showLabels, setShowLabels] = useState(false);
  const [isDaylight, setIsDaylight] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [globeMode, setGlobeMode] = useState<"realistic" | "political">("political");
  const [hoverMode, setHoverMode] = useState(false);
  const [geolocating, setGeolocating] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);
  const geoErrorTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cameraRef = useRef<RootState["camera"] | null>(null);
  const closePopupRef = useRef<(() => void) | null>(null);
  const locale = useLocale() as Locale;
  const t = useTranslations("globe");

  const handleReset = () => {
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 0, 2.5);
    }
  };

  const handleGeolocate = () => {
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
  };

  const handleCreated = (state: RootState) => {
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
  };

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
        <Suspense fallback={null}>
          <GlobeScene
            discoveredSlugs={discoveredSlugs}
            onCountrySelect={onCountrySelect}
            showLabels={showLabels}
            locale={locale}
            globeT={{
              capital: t("capital"),
              explore: t("explore"),
              markExplored: t("markExplored"),
              alreadyExplored: t("alreadyExplored"),
            }}
            isDaylight={isDaylight}
            autoRotate={autoRotate}
            discoverCountry={discoverCountry}
            closePopupRef={closePopupRef}
            globeMode={globeMode}
            hoverMode={hoverMode}
          />
        </Suspense>
      </Canvas>
      <GlobeControls
        onReset={handleReset}
        showLabels={showLabels}
        onToggleLabels={() => setShowLabels((v) => !v)}
        autoRotate={autoRotate}
        onToggleRotate={() => setAutoRotate((v) => !v)}
        isDaylight={isDaylight}
        onToggleDaylight={() => setIsDaylight((v) => !v)}
        globeMode={globeMode}
        onToggleMode={() => setGlobeMode((m) => m === "realistic" ? "political" : "realistic")}
        hoverMode={hoverMode}
        onToggleHoverMode={() => setHoverMode((v) => !v)}
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
