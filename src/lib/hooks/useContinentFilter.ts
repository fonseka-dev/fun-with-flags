"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import { Continent } from "@/data/types";

export function useContinentFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeContinent = (searchParams.get("continent") as Continent) || null;

  const setContinent = useCallback(
    (continent: Continent | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (continent) {
        params.set("continent", continent);
      } else {
        params.delete("continent");
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, router, pathname],
  );

  return { activeContinent, setContinent };
}
