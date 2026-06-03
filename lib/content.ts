import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BentoSize = "normal" | "wide" | "tall" | "feature";

export interface BentoItem {
  id: string;
  kicker?: string;
  title: string;
  body?: string;
  tags?: string[];
  size?: BentoSize;
  accent?: boolean;
}

export interface Hero {
  kicker: string;
  title: string;
  highlight?: string;
  subtitle: string;
}

export interface SiteContent {
  hero: Hero;
  bento: BentoItem[];
}

/**
 * Reads content.md from the project root and parses its YAML frontmatter
 * with gray-matter. The site's copy is therefore driven entirely by that file.
 */
export function getContent(): SiteContent {
  const filePath = path.join(process.cwd(), "content.md");
  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);

  const content = data as Partial<SiteContent>;

  if (!content.hero || !Array.isArray(content.bento)) {
    throw new Error(
      "content.md is missing the expected `hero` and `bento` frontmatter."
    );
  }

  return content as SiteContent;
}
