import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";
import HighlightedCode from "@/components/HighlightedCode";
import { alternates, isLanguage, ogImage } from "@/lib/i18n";

// Every project page is prerendered at build time, in both languages.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Params = Promise<{ lang: string; slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project || !isLanguage(lang)) return {};
  const title = project.title[lang];
  const description = project.shortDescription[lang];
  const links = alternates(`/projects/${project.slug}`, lang);
  return {
    title,
    description,
    alternates: links,
    robots: project.archived ? { index: false } : undefined,
    openGraph: { type: "article", url: links.canonical, title, description, images: ogImage(lang) },
    twitter: { title, description },
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  // "Next project" cycles through the non-archived ones.
  const active = projects.filter((p) => !p.archived);
  const next = active[(active.findIndex((p) => p.slug === slug) + 1) % active.length];

  return (
    <ProjectDetail
      project={project}
      next={{ slug: next.slug, title: next.title }}
      codeBlocks={project.codeHighlights.map((h) => (
        <HighlightedCode key={h.title.fr} code={h.code} language={h.language} />
      ))}
    />
  );
}
