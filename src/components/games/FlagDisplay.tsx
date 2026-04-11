import Image from "next/image";
import { Country } from "@/data/types";

type FlagDisplayProps = {
  country: Country;
};

export function FlagDisplay({ country }: FlagDisplayProps) {
  return (
    <div className="relative group">
      <div className="bg-surface-container-lowest p-4 rounded-lg shadow-ambient-lg transform -rotate-2 group-hover:rotate-0 transition-bounce">
        <Image
          src={`https://flagcdn.com/w640/${country.flagCode}.png`}
          alt="Mystery flag — guess which country!"
          width={384}
          height={256}
          className="rounded-sm object-cover"
          priority
        />
      </div>
      <div className="absolute -bottom-4 -right-4 bg-tertiary-container text-on-tertiary-container w-16 h-16 rounded-full flex items-center justify-center shadow-ambient transform rotate-12">
        <span className="material-symbols-outlined text-3xl">help_center</span>
      </div>
    </div>
  );
}
