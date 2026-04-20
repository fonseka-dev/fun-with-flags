export function GlobeSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color="#4A90D9" roughness={0.8} metalness={0.1} />
    </mesh>
  );
}
