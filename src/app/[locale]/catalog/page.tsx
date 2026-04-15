import { Suspense } from "react";
import { CatalogContent } from "./CatalogContent";

export default function CatalogPage() {
  return (
    <Suspense>
      <CatalogContent />
    </Suspense>
  );
}
