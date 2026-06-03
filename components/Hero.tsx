"use client";

import { motion } from "framer-motion";
import type { Hero as HeroData } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero({ hero }: { hero: HeroData }) {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-16">
      {/* Blueprint grid backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="mb-7 inline-flex items-center gap-2 border border-ink-600 bg-ink-800/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-paper-dim"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-paper" />
        {hero.kicker}
      </motion.p>

      <h1 className="max-w-4xl font-display text-[13vw] font-bold leading-[0.92] tracking-tightest sm:text-7xl lg:text-[5.5rem]">
        <motion.span
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.05 }}
          className="block"
        >
          {hero.title}
        </motion.span>
        {hero.highlight && (
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.16 }}
            className="block text-paper-dim"
          >
            {hero.highlight}
          </motion.span>
        )}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.28 }}
        className="mt-8 max-w-xl text-lg leading-relaxed text-paper-dim sm:text-xl"
      >
        {hero.subtitle}
      </motion.p>
    </section>
  );
}
