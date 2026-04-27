import type { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://nextshopretail.ro";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/produse`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cere-oferta`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cine-suntem`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rafturi-craiova`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const { data: categories } = await supabase
    .from("categories")
    .select("slug");

  const { data: products } = await supabase
    .from("products")
    .select(`
      slug,
      category:categories (
        slug
      )
    `);

  const categoryPages: MetadataRoute.Sitemap =
    categories?.map((category: any) => ({
      url: `${baseUrl}/produse/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })) || [];

  const productPages: MetadataRoute.Sitemap =
    products?.map((product: any) => ({
      url: `${baseUrl}/produse/${product.category?.slug}/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })) || [];

  return [...staticPages, ...categoryPages, ...productPages];
}