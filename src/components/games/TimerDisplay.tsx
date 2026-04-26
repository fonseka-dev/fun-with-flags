import { useTranslations } from "next-intl";

type TimerDisplayProps = {
  timeLeft: number;
  totalTime: number;
};

export function TimerDisplay({ timeLeft, totalTime }: TimerDisplayProps) {
  const t = useTranslations("quiz");

  const size = 80;
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const fraction = totalTime > 0 ? timeLeft / totalTime : 0;
  const dashOffset = circumference * (1 - fraction);

  // Color transitions based on remaining time fraction
  let ringColor: string;
  if (fraction > 0.5) {
    ringColor = "stroke-cyan-300";
  } else if (fraction > 0.25) {
    ringColor = "stroke-amber-300";
  } else {
    ringColor = "stroke-rose-400";
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative rounded-full bg-white/10 ring-1 ring-white/15 shadow-ambient"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          className="-rotate-90"
          aria-hidden="true"
        >
          {/* Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            className="stroke-white/20"
          />
          {/* Progress ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            className={`${ringColor} transition-all duration-500`}
          />
        </svg>
        {/* Seconds label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-extrabold leading-none text-white">
            {timeLeft}s
          </span>
        </div>
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-white/75">
        {t("timeLeft")}
      </span>
    </div>
  );
}
