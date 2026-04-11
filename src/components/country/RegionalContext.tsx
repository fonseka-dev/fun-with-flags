import { Country } from "@/data/types";
import { getContinentMeta } from "@/data/continents";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

type RegionalContextProps = {
  country: Country;
};

export function RegionalContext({ country }: RegionalContextProps) {
  const continentMeta = getContinentMeta(country.continent);

  return (
    <div className="bg-primary p-8 rounded-xl text-on-primary relative overflow-hidden group">
      <div className="absolute -right-8 -bottom-8 opacity-20 group-hover:scale-110 transition-transform duration-700">
        <span className="material-symbols-outlined text-[12rem]">map</span>
      </div>
      <h3 className="text-2xl font-bold mb-4 relative z-10">
        Regional Context
      </h3>
      <div className="relative z-10 w-full h-32 bg-white/20 backdrop-blur-sm rounded-lg mb-4 flex items-center justify-center">
        <span className="material-symbols-outlined text-4xl opacity-60">
          {continentMeta.icon}
        </span>
        <span className="ml-2 text-sm font-bold bg-white text-primary px-3 py-1 rounded-full">
          {country.region}
        </span>
      </div>
      <Link href={`/catalog?continent=${country.continent}`}>
        <Button
          variant="ghost"
          fullWidth
          className="bg-white text-primary hover:bg-on-primary"
        >
          <span className="flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">explore</span>
            Explore Region
          </span>
        </Button>
      </Link>
    </div>
  );
}
