"use client";

import { Suspense } from "react";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";

const dailySuggestions = [
  { title: "Sydney Opera House", subtitle: "Australia", category: "Landmark", color: "secondary" },
  { title: "Mount Fuji", subtitle: "Japan", category: "Nature", color: "primary" },
  { title: "Machu Picchu", subtitle: "Peru", category: "History", color: "tertiary" },
  { title: "Oia Village", subtitle: "Greece", category: "Culture", color: "secondary" },
];

function DashboardContent() {
  return (
    <AppShell showSidebar>
      <section className="space-y-12">
        {/* Welcome Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-sm font-bold">
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            Explorer
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-background leading-none">
            Welcome back,
            <br />
            <span className="text-primary">Adventurer!</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-[1.6]">
            The world is waiting for you. Ready to discover your next
            destination?
          </p>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Interactive Map Card */}
          <Link
            href="/map"
            className="md:col-span-8 bg-surface-container-low rounded-xl overflow-hidden group cursor-pointer shadow-ambient hover:shadow-ambient-lg transition-bounce flex flex-col"
          >
            <div className="p-8 pb-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Interactive Map</h3>
                  <p className="text-on-surface-variant">
                    Tap to fly anywhere on Earth
                  </p>
                </div>
                <div className="bg-primary-container p-4 rounded-full text-on-primary-container">
                  <span
                    className="material-symbols-outlined text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    explore
                  </span>
                </div>
              </div>
            </div>
            <div className="relative mt-8 h-64 w-full overflow-hidden bg-surface-container">
              <div className="w-full h-full flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined text-8xl opacity-20">
                  public
                </span>
              </div>
            </div>
          </Link>

          {/* Journey Progress */}
          <div className="md:col-span-4 bg-tertiary-container text-on-tertiary-container rounded-xl p-8 flex flex-col justify-between shadow-ambient">
            <div>
              <h3 className="text-2xl font-bold mb-1">Your Journey</h3>
              <p className="opacity-80">0 / 195 Countries Found</p>
            </div>
            <div className="relative py-8 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-6xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  emoji_events
                </span>
              </div>
            </div>
            <Button
              variant="ghost"
              fullWidth
              className="bg-on-tertiary-container text-tertiary-container hover:brightness-90"
              disabled
            >
              View Passport
            </Button>
          </div>

          {/* Explore the World */}
          <Link
            href="/catalog"
            className="md:col-span-6 bg-surface-container-highest rounded-xl p-8 group cursor-pointer relative overflow-hidden h-72 flex flex-col justify-between transition-bounce hover:scale-[1.01]"
          >
            <div className="z-10">
              <h3 className="text-3xl font-bold mb-2">Explore the World</h3>
              <p className="text-on-surface-variant max-w-[200px]">
                Dive into cultures, flags, and landmarks.
              </p>
            </div>
            <div className="z-10 self-start">
              <span className="material-symbols-outlined text-primary text-6xl">
                auto_stories
              </span>
            </div>
          </Link>

          {/* Play & Learn */}
          <Link
            href="/games/guess-the-flag"
            className="md:col-span-6 bg-secondary-container rounded-xl p-8 group cursor-pointer relative overflow-hidden h-72 flex flex-col justify-between transition-bounce hover:scale-[1.01]"
          >
            <div className="z-10">
              <h3 className="text-3xl font-bold mb-2">Play &amp; Learn</h3>
              <p className="text-on-secondary-container max-w-[200px]">
                Win trophies in regional trivia!
              </p>
            </div>
            <div className="z-10 self-start">
              <span className="material-symbols-outlined text-secondary text-6xl">
                videogame_asset
              </span>
            </div>
          </Link>
        </div>

        {/* Discover Daily */}
        <section className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-ambient">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">Discover Daily</h2>
            <Link
              href="/catalog"
              className="text-primary font-bold flex items-center gap-2 hover:underline"
            >
              More Suggestions
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailySuggestions.map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-low p-4 rounded-lg shadow-ambient hover:-translate-y-2 transition-bounce"
              >
                <div className="w-full h-32 bg-surface-container rounded-lg mb-4 flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-outline-variant">
                    image
                  </span>
                </div>
                <span
                  className={`text-xs font-bold uppercase tracking-widest text-${item.color}`}
                >
                  {item.category}
                </span>
                <h4 className="font-bold text-lg mt-1">{item.title}</h4>
                <p className="text-on-surface-variant text-sm">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </AppShell>
  );
}

export default function HomePage() {
  return (
    <Suspense>
      <DashboardContent />
    </Suspense>
  );
}
