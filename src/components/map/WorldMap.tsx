"use client";

import { useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { MapControls } from "./MapControls";

type WorldMapProps = {
  className?: string;
};

const MIN_SCALE = 1;
const MAX_SCALE = 5;
const SCALE_STEP = 0.5;

export function WorldMap({ className = "" }: WorldMapProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [tooltip, setTooltip] = useState<{
    name: string;
    x: number;
    y: number;
  } | null>(null);

  const handleZoomIn = useCallback(() => {
    setScale((s) => Math.min(s + SCALE_STEP, MAX_SCALE));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale((s) => Math.max(s - SCALE_STEP, MIN_SCALE));
  }, []);

  const handleReset = useCallback(() => {
    setScale(1);
  }, []);

  const handlePathClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const target = e.target as SVGPathElement;
      const slug = target.getAttribute("data-slug");
      if (slug) {
        router.push(`/catalog/${slug}`);
      }
    },
    [router],
  );

  const handlePathHover = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const target = e.target as SVGPathElement;
      const slug = target.getAttribute("data-slug");
      if (slug) {
        const name = target.getAttribute("data-name") || slug;
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          setTooltip({
            name,
            x: e.clientX - rect.left,
            y: e.clientY - rect.top - 40,
          });
        }
      }
    },
    [],
  );

  const handleMouseLeave = useCallback(() => {
    setTooltip(null);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-xl bg-surface-container-low ${className}`}
    >
      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute z-20 glass px-3 py-1 rounded-full text-sm font-bold text-on-surface pointer-events-none"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: "translateX(-50%)",
          }}
        >
          {tooltip.name}
        </div>
      )}

      {/* SVG Map */}
      <div
        className="w-full h-full transition-transform duration-300"
        style={{ transform: `scale(${scale})`, transformOrigin: "center" }}
        onClick={handlePathClick}
        onMouseMove={handlePathHover}
        onMouseLeave={handleMouseLeave}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <object
          data="/maps/world.svg"
          type="image/svg+xml"
          className="w-full h-full pointer-events-none"
          aria-label="Interactive world map — click a country to learn about it"
        >
          <p>
            Your browser does not support SVGs. Please use the catalog to browse
            countries.
          </p>
        </object>
      </div>

      <MapControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
    </div>
  );
}
