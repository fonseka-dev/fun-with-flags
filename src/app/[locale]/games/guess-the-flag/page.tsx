import { Suspense } from "react";
import { GameContent } from "./GameContent";

export default function GuessTheFlagPage() {
  return (
    <Suspense>
      <GameContent />
    </Suspense>
  );
}
