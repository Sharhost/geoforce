import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://geoforce.of.by", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
