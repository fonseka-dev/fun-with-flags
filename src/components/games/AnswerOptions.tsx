import { Country } from "@/data/types";
import { GameStatus } from "@/lib/hooks/useGameState";

type AnswerOptionsProps = {
  options: Country[];
  correctSlug: string;
  selectedAnswer: string | null;
  status: GameStatus;
  onSelect: (slug: string) => void;
};

export function AnswerOptions({
  options,
  correctSlug,
  selectedAnswer,
  status,
  onSelect,
}: AnswerOptionsProps) {
  const isAnswered = status === "correct" || status === "wrong" || status === "timeout";

  function getOptionStyle(slug: string): string {
    if (!isAnswered) {
      return "bg-surface-container-highest hover:bg-primary hover:text-on-primary";
    }
    if (slug === correctSlug) {
      return "bg-secondary text-on-secondary";
    }
    // On timeout, no answer was selected — don't highlight anything red
    if (status !== "timeout" && slug === selectedAnswer && slug !== correctSlug) {
      return "bg-error text-on-error";
    }
    return "bg-surface-container-highest opacity-50";
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mt-8">
      {options.map((option) => (
        <button
          key={option.slug}
          onClick={() => !isAnswered && onSelect(option.slug)}
          disabled={isAnswered}
          className={`
            ${getOptionStyle(option.slug)}
            w-3/5 mx-auto p-5 rounded-xl relative flex items-center justify-center text-center group
            transition-bounce active:scale-95 shadow-ambient
          `}
        >
          <span className="text-lg font-extrabold">{option.name}</span>
          <span className="material-symbols-outlined absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            arrow_forward
          </span>
        </button>
      ))}
    </div>
  );
}
