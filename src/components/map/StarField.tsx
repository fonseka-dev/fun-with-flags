import { memo } from "react";
import { Stars } from "@react-three/drei";

function StarFieldImpl() {
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
export const StarField = memo(StarFieldImpl);
