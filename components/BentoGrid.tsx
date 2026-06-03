"use client";

import type { BentoItem } from "@/lib/content";
import BentoCard from "./BentoCard";

export default function BentoGrid({ items }: { items: BentoItem[] }) {
  // Masonry via CSS multi-columns: boxes pack tightly with no vertical voids.
  // Each card hugs its content; the column-gap + bottom margin form the only
  // (uniform) spacing between boxes.
  return (
    <section className="columns-1 gap-3 sm:gap-4 md:columns-3 [&>*]:mb-3 sm:[&>*]:mb-4 [&>*]:break-inside-avoid">
      {items.map((item, i) => (
        <BentoCard key={item.id} item={item} index={i} />
      ))}
    </section>
  );
}
