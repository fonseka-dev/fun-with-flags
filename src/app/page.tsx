export default function HomePage() {
  return (
    <main className="min-h-screen bg-background p-12">
      <h1 className="text-5xl font-extrabold text-on-background tracking-tight mb-4">
        Explorer&apos;s Atlas
      </h1>
      <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
        Design system verification — this text should be dark navy (#272b51), not black.
      </p>
      <div className="flex gap-4 flex-wrap">
        <button className="gradient-primary text-on-primary py-4 px-8 rounded-full font-bold shadow-ambient transition-bounce hover:scale-105 active:scale-95">
          Primary Button
        </button>
        <button className="bg-secondary text-on-secondary py-4 px-8 rounded-full font-bold shadow-ambient transition-bounce hover:scale-105 active:scale-95">
          Secondary Button
        </button>
      </div>
      <div className="mt-8 bg-surface-container-low rounded-xl p-8">
        <div className="bg-surface-container-highest rounded-xl p-6">
          <p className="text-on-surface font-semibold">
            Nested tonal layering: surface → surface-container-low → surface-container-highest
          </p>
        </div>
      </div>
    </main>
  );
}
