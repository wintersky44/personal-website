"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import type { BentoItem, BentoSize } from "@/lib/content";

// Static class strings so Tailwind can see and keep them at build time.
const sizeClasses: Record<BentoSize, string> = {
  normal: "md:col-span-1 md:row-span-1",
  wide: "md:col-span-2 md:row-span-1",
  tall: "md:col-span-1 md:row-span-2",
  feature: "md:col-span-2 md:row-span-2",
};

export default function BentoCard({
  item,
  index,
}: {
  item: BentoItem;
  index: number;
}) {
  const size = item.size ?? "normal";
  const accent = Boolean(item.accent);

  // Pointer-following spotlight.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  const spotlight = useMotionTemplate`radial-gradient(240px circle at ${mx}px ${my}px, ${
    accent ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.10)"
  }, transparent 72%)`;

  const isFeature = size === "feature";

  return (
    // Outer wrapper is the grid cell. The CSS `reveal` animation guarantees the
    // card becomes visible without relying on JS; framer-motion below only adds
    // the (optional) hover spotlight and lift.
    <div
      className={[sizeClasses[size], "reveal"].join(" ")}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <motion.article
        onMouseMove={handleMouseMove}
        whileHover={{ y: -4 }}
        className={[
          "group relative isolate flex h-full flex-col overflow-hidden border p-6 transition-colors duration-300 sm:p-7",
          accent
            ? "border-transparent bg-paper text-ink"
            : "border-ink-600 bg-ink-800 text-paper hover:border-paper/30",
        ].join(" ")}
      >
        {/* Spotlight overlay */}
        <motion.div
          aria-hidden
          style={{ background: spotlight }}
          className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        {item.kicker && (
          <span
            className={[
              "font-mono text-[10px] uppercase tracking-[0.2em]",
              accent ? "text-ink/60" : "text-paper-dim",
            ].join(" ")}
          >
            {item.kicker}
          </span>
        )}

        <div className={item.kicker ? "mt-6" : ""}>
          <h3
            className={[
              "font-display font-bold tracking-tightest",
              isFeature ? "text-3xl sm:text-4xl" : "text-2xl",
            ].join(" ")}
          >
            {item.title}
          </h3>

          {item.body && (
            <p
              className={[
                "mt-3 leading-relaxed",
                isFeature ? "text-base sm:text-lg" : "text-sm sm:text-base",
                accent ? "text-ink/80" : "text-paper-dim",
              ].join(" ")}
            >
              {item.body}
            </p>
          )}

          {item.tags && item.tags.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className={[
                    "rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide transition-colors",
                    accent
                      ? "border-ink/20 text-ink/70"
                      : "border-ink-600 text-paper-dim group-hover:border-paper/25 group-hover:text-paper",
                  ].join(" ")}
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.article>
    </div>
  );
}
