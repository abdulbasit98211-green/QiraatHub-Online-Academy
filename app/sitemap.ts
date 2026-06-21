import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { courses } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/courses`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/teachers`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    {
      url: `${site.url}/book-free-trial`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const courseRoutes: MetadataRoute.Sitemap = courses.map((c) => ({
    url: `${site.url}/courses/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...courseRoutes];
}
