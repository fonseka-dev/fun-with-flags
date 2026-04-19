import { OrbitControls } from "@react-three/drei";
import { GlobeSphere } from "./GlobeSphere";
import { CountryMeshes } from "./CountryMeshes";

type GlobeSceneProps = {
  discoveredSlugs: string[];
  onCountrySelect?: (slug: string) => void;
};

export function GlobeScene({ discoveredSlugs, onCountrySelect }: GlobeSceneProps) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 3, 5]} intensity={0.8} />
      <GlobeSphere />
      <CountryMeshes
        discoveredSlugs={discoveredSlugs}
        onCountrySelect={onCountrySelect}
      />
      <OrbitControls
        enablePan={false}
        enableDamping={true}
        dampingFactor={0.05}
        minDistance={1.5}
        maxDistance={4}
        rotateSpeed={0.5}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </>
  );
}
