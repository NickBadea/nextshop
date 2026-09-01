import fs from "fs";
import path from "path";
import matter from "gray-matter";

const GUIDES_DIR = path.join(process.cwd(), "src/content/guides");

export type GuideMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage: string;
};

export type Guide = GuideMeta & {
  content: string;
};

export function getGuideBySlug(slug: string): Guide | null {
  const filePath = path.join(GUIDES_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    coverImage: data.coverImage,
    content,
  };
}
