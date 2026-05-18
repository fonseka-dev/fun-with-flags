import { Country } from "@/data/types";

type FlagDisplayProps = {
  country: Country;
};

export function FlagDisplay({ country }: FlagDisplayProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/w640/${country.flagCode}.png`}
      alt="Mystery flag — guess which country!"
      width={384}
      height={256}
      className="rounded-lg object-contain w-auto h-auto max-w-full max-h-[350px]"
      loading="eager"
      fetchPriority="high"
    />
  );
}
