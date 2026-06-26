import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";
import { services } from "@/content/services";

const base = "https://belmonte-seguros.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const blogPosts: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const seguroPages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}${s.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const solucaoPages: MetadataRoute.Sitemap = [
    "/solucoes/particulares",
    "/solucoes/empresas",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/sobre-nos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/simulacao`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogPosts,
    ...seguroPages,
    ...solucaoPages,
    {
      url: `${base}/politica-de-privacidade`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/informacao-legal`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
