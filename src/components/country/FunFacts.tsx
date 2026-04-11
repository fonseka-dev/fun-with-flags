import { FunFact } from "@/data/types";

type FunFactsProps = {
  facts: FunFact[];
};

export function FunFacts({ facts }: FunFactsProps) {
  return (
    <section>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
          <span
            className="material-symbols-outlined text-secondary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            lightbulb
          </span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight">Fun Facts</h2>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {facts.map((fact) => (
          <div
            key={fact.title}
            className="flex gap-6 items-start bg-surface-container-lowest p-6 rounded-xl shadow-ambient hover:translate-x-2 transition-bounce"
          >
            <div className="w-16 h-16 bg-surface-container flex-shrink-0 rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl text-secondary">
                {fact.icon}
              </span>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1 text-on-surface">
                {fact.title}
              </h4>
              <p className="text-on-surface-variant leading-[1.6]">
                {fact.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
