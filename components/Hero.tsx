import type { Hero as HeroData } from "@/lib/content";

export default function Hero({ hero }: { hero: HeroData }) {
  return (
    <section className="relative isolate overflow-hidden pb-8 pt-10 sm:pb-12 sm:pt-16">
      {/* Blueprint grid backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />


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
