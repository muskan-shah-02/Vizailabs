import type { MetadataRoute } from "next";

const BASE_URL = "https://dokydoc.vizailabs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { route: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { route: "/features", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/use-cases", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/pricing", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { route: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { route: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const useCaseSlugs = [
    "engineering",
    "business-analysis",
    "product",
    "compliance",
    "knowledge-management",
    "ai-assistant",
  ];

  return [
    ...staticRoutes.map(({ route, priority, changeFrequency }) => ({
      url: `${BASE_URL}${route}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...useCaseSlugs.map((slug) => ({
      url: `${BASE_URL}/use-cases/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
