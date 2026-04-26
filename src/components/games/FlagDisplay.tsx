import Image from "next/image";
import { Country } from "@/data/types";

type FlagDisplayProps = {
  country: Country;
};

export function FlagDisplay({ country }: FlagDisplayProps) {
  return (
    <div className="relative group w-full max-w-[32rem]">
      <div className="bg-transparent min-h-[260px] max-h-[380px] p-4 md:p-5 rounded-[1.5rem] shadow-ambient-lg flex items-center justify-center transform -rotate-2 group-hover:rotate-0 transition-bounce">
        <Image
          src={`https://flagcdn.com/w640/${country.flagCode}.png`}
          alt="Mystery flag — guess which country!"
          width={384}
          height={256}
          className="rounded-lg object-contain w-auto h-auto max-w-full max-h-[350px]"
          priority
        />
      </div>
    </div>
  );
}
