import { getContent } from "@/lib/content";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  // Parsed from content.md on the server — the source of truth for all copy.
  const { hero, bento } = getContent();

  return (
    <main className="relative mx-auto min-h-screen w-full max-w-6xl px-5 pb-28 sm:px-8">
      {/* Top bar */}
      <nav className="flex items-center justify-between py-6 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-dim">
        <span>2026</span>
      </nav>

      <Hero hero={hero} />
      <BentoGrid items={bento} />

      <footer className="mt-20 flex flex-col items-start justify-between gap-3 border-t border-ink-600 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-dim sm:flex-row sm:items-center">
        <span>Currently — thinking.</span>
        <span>Built from content.md</span>
      </footer>
    </main>
  );
}
