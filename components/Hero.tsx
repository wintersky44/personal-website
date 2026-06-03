import type { Hero as HeroData } from "@/lib/content";

export default function Hero({ hero }: { hero: HeroData }) {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-16">
      {/* Blueprint grid backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />

      <p className="reveal mb-7 inline-flex items-center gap-2 border border-ink-600 bg-ink-800/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-paper" />
        {hero.kicker}
      </p>

      <h1 className="max-w-4xl font-display text-[13vw] font-bold leading-[0.92] tracking-tightest sm:text-7xl lg:text-[5.5rem]">
        <span className="reveal block" style={{ animationDelay: "0.05s" }}>
          {hero.title}
        </span>
        {hero.highlight && (
          <span
            className="reveal block text-paper-dim"
            style={{ animationDelay: "0.16s" }}
          >
            {hero.highlight}
          </span>
        )}
      </h1>

      <p
        className="reveal mt-8 max-w-xl text-lg leading-relaxed text-paper-dim sm:text-xl"
        style={{ animationDelay: "0.28s" }}
      >
        {hero.subtitle}
      </p>
    </section>
  );
}
