import Image from "next/image";
import { Country } from "@/data/types";

type FlagDisplayProps = {
  country: Country;
};

export function FlagDisplay({ country }: FlagDisplayProps) {
  return (
    <div className="relative group">
      <div className="bg-transparent p-4 rounded-lg shadow-ambient-lg transform -rotate-2 group-hover:rotate-0 transition-bounce">
        <Image
          src={`https://flagcdn.com/w640/${country.flagCode}.png`}
          alt="Mystery flag — guess which country!"
          width={384}
          height={256}
          className="rounded-lg object-cover"
          priority
        />
      </div>
    </div>
  );
}
