import type { BentoItem } from "@/lib/content";
import BentoCard from "./BentoCard";

export default function BentoGrid({ items }: { items: BentoItem[] }) {
  // A gap-less grid: the 4 normal boxes + 1 wide box tile a 3x2 rectangle on
  // desktop with no gaps between them. Cards stretch to fill their cell (the
  // grid's default align-items: stretch), so empty space sits *inside* a box
  // rather than as a gap between boxes. The container clips to a rounded
  // rectangle.
  return (
    <section className="grid grid-cols-1 overflow-hidden rounded-card border border-ink-600 md:grid-cols-3">
      {items.map((item, i) => (
        <BentoCard key={item.id} item={item} index={i} />
      ))}
    </section>
  );
}
