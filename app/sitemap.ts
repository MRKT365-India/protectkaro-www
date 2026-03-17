import type { MetadataRoute } from "next";
import { getAllPosts } from "../content/blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.protectkaro.com";
  const staticRoutes = ["", "/features", "/pricing", "/how-it-works", "/support", "/privacy", "/terms", "/blog"];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const blogEntries = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticEntries, ...blogEntries];
}
