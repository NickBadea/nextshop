import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  keyword: string;
  coverImage: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

function readSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllPosts(): BlogPostMeta[] {
  return readSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), "utf8");
      const { data } = matter(raw);

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        keyword: data.keyword,
        coverImage: data.coverImage,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

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
    keyword: data.keyword,
    coverImage: data.coverImage,
    content,
  };
}
