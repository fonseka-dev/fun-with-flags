type HintCardProps = {
  hint: string;
};

export function HintCard({ hint }: HintCardProps) {
  return (
    <div className="mt-12 w-full max-w-2xl bg-tertiary-container/20 p-6 rounded-xl flex gap-6 items-center">
      <div className="bg-tertiary rounded-full p-4 flex-shrink-0">
        <span
          className="material-symbols-outlined text-on-tertiary text-3xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          lightbulb
        </span>
      </div>
      <div>
        <h3 className="text-xl font-bold text-tertiary mb-1">
          Explorer&apos;s Hint
        </h3>
        <p className="text-on-surface leading-[1.6]">{hint}</p>
      </div>
    </div>
  );
}
