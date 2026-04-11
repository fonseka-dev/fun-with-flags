type FlagMeaningProps = {
  description: string;
};

export function FlagMeaning({ description }: FlagMeaningProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            flag
          </span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight">
          Meaning of the Flag
        </h2>
      </div>
      <div className="bg-surface-container-lowest p-8 rounded-xl shadow-ambient leading-[1.6] text-lg text-on-surface">
        {description}
      </div>
    </section>
  );
}
