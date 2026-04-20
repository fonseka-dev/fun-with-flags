import { forwardRef } from "react";
import { useTexture } from "@react-three/drei";
import type * as THREE from "three";

type GlobeSphereProps = {
  mode: "realistic" | "political";
};

export const GlobeSphere = forwardRef<THREE.Mesh, GlobeSphereProps>(function GlobeSphere({ mode }, ref) {
  const texture = useTexture("/textures/earth-day.jpg");
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 64, 64]} />
      {mode === "realistic" ? (
        <meshStandardMaterial map={texture} roughness={0.8} metalness={0.1} />
      ) : (
        <meshStandardMaterial color="#1a2340" roughness={0.8} metalness={0.1} />
      )}
    </mesh>
  );
});
