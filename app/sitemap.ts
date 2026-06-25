import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";

const base = "https://belmonte-seguros.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const blogPosts: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogPosts,
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
