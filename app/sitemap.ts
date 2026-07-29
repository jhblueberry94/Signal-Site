import type { MetadataRoute } from "next";
import { blogArticles, compareTools, forPersonas } from "@/lib/content";

const BASE_URL = "https://postsignal.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, priority: 1.0 },
    { url: `${BASE_URL}/pricing`, priority: 0.9 },
    { url: `${BASE_URL}/faq`, priority: 0.6 },
    { url: `${BASE_URL}/blog`, priority: 0.8 },
    { url: `${BASE_URL}/blog/linkedin-by-role`, priority: 0.6 },
    { url: `${BASE_URL}/compare`, priority: 0.7 },
    { url: `${BASE_URL}/for`, priority: 0.7 },
    { url: `${BASE_URL}/tools/linkedin-post-editor`, priority: 0.8 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogArticles.map((a) => ({
    url: `${BASE_URL}/blog/${a.slug}`,
    priority: 0.6,
  }));

  const compareRoutes: MetadataRoute.Sitemap = compareTools.map((t) => ({
    url: `${BASE_URL}/compare/${t.slug}`,
    priority: 0.6,
  }));

  const forRoutes: MetadataRoute.Sitemap = forPersonas.map((p) => ({
    url: `${BASE_URL}/for/${p.slug}`,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes, ...compareRoutes, ...forRoutes];
}
