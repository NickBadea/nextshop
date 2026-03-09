import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nextshopretail.ro",
      lastModified: new Date(),
    },
    {
      url: "https://nextshopretail.ro/produse",
      lastModified: new Date(),
    },
    {
      url: "https://nextshopretail.ro/cere-oferta",
      lastModified: new Date(),
    },
    {
      url: "https://nextshopretail.ro/contact",
      lastModified: new Date(),
    },
    {
      url: "https://nextshopretail.ro/cine-suntem",
      lastModified: new Date(),
    },
  ];
}