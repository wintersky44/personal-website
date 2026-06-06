import { getContent } from "@/lib/content";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  const { hero, bento } = getContent();

  return (
    <main className="relative mx-auto min-h-screen w-full max-w-6xl px-5 pb-28 sm:px-8">
      {/* Top bar */}
      <nav className="flex items-center justify-between py-6 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-dim">
      </nav>

      <Hero hero={hero} />
      <div className="mt-2 mb-8">
        <h2 className="mt-1 text-3xl sm:text-4xl font-display font-medium tracking-tightest text-paper">
          Some thoughts
        </h2>
      </div>
      <BentoGrid items={bento} />

      <footer className="mt-20 flex flex-col items-start justify-between gap-3 border-t border-ink-600 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-dim sm:flex-row sm:items-center">
      </footer>
    </main>
  );
}
