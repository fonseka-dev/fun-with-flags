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
  let textColor: string;
  if (fraction > 0.5) {
    ringColor = "stroke-primary";
    textColor = "text-primary";
  } else if (fraction > 0.25) {
    ringColor = "stroke-tertiary";
    textColor = "text-tertiary";
  } else {
    ringColor = "stroke-error";
    textColor = "text-error";
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative" style={{ width: size, height: size }}>
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
            className="stroke-surface-container-highest"
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
          <span className={`text-xl font-extrabold leading-none ${textColor}`}>
            {timeLeft}s
          </span>
        </div>
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
        {t("timeLeft")}
      </span>
    </div>
  );
}
