import { forwardRef } from "react";
import { useTexture } from "@react-three/drei";
import type * as THREE from "three";

export const GlobeSphere = forwardRef<THREE.Mesh>(function GlobeSphere(_, ref) {
  const texture = useTexture("/textures/earth-day.jpg");
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} roughness={0.8} metalness={0.1} />
    </mesh>
  );
});
