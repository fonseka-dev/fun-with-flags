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
  const isAnswered = status === "correct" || status === "wrong";

  function getOptionStyle(slug: string): string {
    if (!isAnswered) {
      return "bg-surface-container-highest hover:bg-primary hover:text-on-primary";
    }
    if (slug === correctSlug) {
      return "bg-secondary text-on-secondary";
    }
    if (slug === selectedAnswer && slug !== correctSlug) {
      return "bg-error text-on-error";
    }
    return "bg-surface-container-highest opacity-50";
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-10">
      {options.map((option) => (
        <button
          key={option.slug}
          onClick={() => !isAnswered && onSelect(option.slug)}
          disabled={isAnswered}
          className={`
            ${getOptionStyle(option.slug)}
            p-6 rounded-xl flex items-center justify-between group
            transition-bounce active:scale-95 shadow-ambient
          `}
        >
          <span className="text-2xl font-extrabold">{option.name}</span>
          <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">
            arrow_forward
          </span>
        </button>
      ))}
    </div>
  );
}
