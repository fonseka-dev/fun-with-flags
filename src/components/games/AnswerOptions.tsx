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
      return "bg-white/12 text-white border border-white/10 hover:bg-white/20 hover:text-white";
    }
    if (slug === correctSlug) {
      return "bg-emerald-400 text-slate-950 border border-emerald-200";
    }
    // On timeout, no answer was selected — don't highlight anything red
    if (status !== "timeout" && slug === selectedAnswer && slug !== correctSlug) {
      return "bg-rose-500 text-white border border-rose-300";
    }
    return "bg-white/10 text-white/55 border border-white/10";
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-6">
      {options.map((option) => (
        <button
          key={option.slug}
          onClick={() => !isAnswered && onSelect(option.slug)}
          disabled={isAnswered}
          className={`
            ${getOptionStyle(option.slug)}
            w-full p-5 rounded-2xl relative flex items-center justify-center text-center group
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
