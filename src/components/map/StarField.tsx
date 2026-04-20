import { Stars } from "@react-three/drei";

export function StarField() {
  return (
    <Stars
      radius={100}
      depth={50}
      count={6000}
      factor={6}
      saturation={0}
      fade
      speed={0.3}
    />
  );
}
