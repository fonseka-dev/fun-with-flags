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
  const targetZRef = useRef<number>(2.5);
  const cameraRef = useRef<RootState["camera"] | null>(null);
  const closePopupRef = useRef<(() => void) | null>(null);
  const locale = useLocale() as Locale;
  const t = useTranslations("globe");

  const handleZoomIn = () => {
    const currentZ = cameraRef.current?.position.z ?? 2.5;
    targetZRef.current = Math.max(currentZ - 0.5, 1.5);
  };
  const handleZoomOut = () => {
    const currentZ = cameraRef.current?.position.z ?? 2.5;
    targetZRef.current = Math.min(currentZ + 0.5, 4.0);
  };
  const handleReset = () => {
    targetZRef.current = 2.5;
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 0, 2.5);
    }
  };

  const handleCreated = (state: RootState) => {
    cameraRef.current = state.camera;
    try {
      const saved = sessionStorage.getItem(SESSION_KEY);
      if (saved) {
        const { x, y, z } = JSON.parse(saved);
        state.camera.position.set(x, y, z);
        targetZRef.current = z;
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
            targetZRef={targetZRef}
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
          />
        </Suspense>
      </Canvas>
      <GlobeControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        showLabels={showLabels}
        onToggleLabels={() => setShowLabels((v) => !v)}
        autoRotate={autoRotate}
        onToggleRotate={() => setAutoRotate((v) => !v)}
        isDaylight={isDaylight}
        onToggleDaylight={() => setIsDaylight((v) => !v)}
        globeMode={globeMode}
        onToggleMode={() => setGlobeMode((m) => m === "realistic" ? "political" : "realistic")}
      />
    </div>
  );
}
