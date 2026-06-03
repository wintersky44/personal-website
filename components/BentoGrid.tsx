"use client";

import type { BentoItem } from "@/lib/content";
import BentoCard from "./BentoCard";

export default function BentoGrid({ items }: { items: BentoItem[] }) {
  return (
    <section className="grid auto-rows-[minmax(11rem,1fr)] grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3 [grid-auto-flow:dense]">
      {items.map((item, i) => (
        <BentoCard key={item.id} item={item} index={i} />
      ))}
    </section>
  );
}
