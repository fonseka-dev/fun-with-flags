import { useTexture } from "@react-three/drei";

export function GlobeSphere() {
  const texture = useTexture("/textures/earth-day.jpg");
  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} roughness={0.8} metalness={0.1} />
    </mesh>
  );
}
