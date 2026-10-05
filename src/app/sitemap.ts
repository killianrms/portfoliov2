import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { SITE_URL, localePath } from "@/lib/i18n";

// Every page in both languages, each entry listing its translation.
function entry(path: string, priority: number, changeFrequency: "monthly" | "yearly"): MetadataRoute.Sitemap {
  const en = SITE_URL + (path === "/" ? "" : path);
  const fr = SITE_URL + localePath(path, "fr");
  const languages = { en, fr };
  return [
    { url: en, lastModified: new Date(), changeFrequency, priority, alternates: { languages } },
    { url: fr, lastModified: new Date(), changeFrequency, priority, alternates: { languages } },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...entry("/", 1, "monthly"),
    ...projects.filter((p) => !p.archived).flatMap((p) => entry(`/projects/${p.slug}`, 0.7, "monthly")),
    ...entry("/legal", 0.2, "yearly"),
  ];
}
