import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { GlassCard } from "@/components/ui/GlassCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface p-12">
      <h1 className="text-5xl font-extrabold text-on-background tracking-tight mb-8">
        Explorer&apos;s Atlas
      </h1>
      <div className="flex gap-4 mb-8 flex-wrap">
        <Button variant="primary">Explore</Button>
        <Button variant="secondary">Play</Button>
        <Button variant="ghost">Learn More</Button>
      </div>
      <div className="flex gap-2 mb-8 flex-wrap">
        <Chip label="Africa" icon="terrain" active />
        <Chip label="Asia" icon="temple_buddhist" />
        <Chip label="Europe" icon="castle" />
      </div>
      <GlassCard className="p-8 max-w-md">
        <p className="text-on-surface font-semibold">
          Glassmorphism card with backdrop blur
        </p>
      </GlassCard>
    </main>
  );
}
