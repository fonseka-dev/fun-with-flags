import { Stars } from "@react-three/drei";

export function StarField() {
  return (
    <Stars
      radius={100}
      depth={50}
      count={1500}
      factor={3}
      saturation={0}
      fade
      speed={0.5}
    />
  );
}
