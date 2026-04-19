"use client";

import { Suspense, lazy, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { GlobeControls } from "./GlobeControls";

const GlobeScene = lazy(() =>
  import("./GlobeScene").then((m) => ({ default: m.GlobeScene })),
);

type GlobeProps = {
  discoveredSlugs: string[];
  onCountrySelect?: (slug: string) => void;
};

export function Globe({ discoveredSlugs, onCountrySelect }: GlobeProps) {
  const [ready, setReady] = useState(false);
  const [showLabels, setShowLabels] = useState(false);
  const zoomRef = useRef<number>(0);

  useEffect(() => {
    setReady(true);
  }, []);

  const handleZoomIn = () => { zoomRef.current = 1; };
  const handleZoomOut = () => { zoomRef.current = -1; };
  const handleReset = () => { zoomRef.current = 2; };

  return (
    <div className="relative h-full w-full">
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0A0E27]">
          <div className="h-16 w-16 animate-pulse rounded-full border-4 border-white/20" />
        </div>
      )}
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 45 }}
        dpr={[1, 2]}
        style={{ background: "#0A0E27" }}
      >
        <Suspense fallback={null}>
          <GlobeScene
            discoveredSlugs={discoveredSlugs}
            onCountrySelect={onCountrySelect}
            showLabels={showLabels}
            zoomRef={zoomRef}
          />
        </Suspense>
      </Canvas>
      <GlobeControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        showLabels={showLabels}
        onToggleLabels={() => setShowLabels((v) => !v)}
      />
    </div>
  );
}
