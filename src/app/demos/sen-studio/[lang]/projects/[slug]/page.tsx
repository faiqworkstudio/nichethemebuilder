import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { DemoNotice, SiteFooter, SiteHeader } from "@/demos/sen-studio/components/Chrome";
import { ProjectDetail } from "@/demos/sen-studio/components/ProjectDetail";
import { nav, sections } from "@/demos/sen-studio/content";
import { getProject, projects } from "@/demos/sen-studio/projects";
import { senMetadata } from "@/demos/sen-studio/seo";

type Props = { params: Promise<{ lang: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = (await params) as { lang: Locale; slug: string };
  const project = getProject(slug);
  if (!project) return {};
  const concept = sections.projects.concept[lang];
  return senMetadata({
    lang,
    path: `/projects/${slug}`,
    title: `${project.title[lang]} — ${concept} | ${lang === "th" ? "เส้น สตูดิโอ" : "Sen Studio"}`,
    description: `${concept}: ${project.short[lang]}. ${project.location[lang]}, ${project.area} m².`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { lang, slug } = (await params) as { lang: Locale; slug: string };
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <a href="#main" className="sen-skip">
        {nav.skip[lang]}
      </a>
      <DemoNotice lang={lang} />
      <SiteHeader lang={lang} onHome={false} />
      <main id="main" tabIndex={-1}>
        <ProjectDetail lang={lang} project={project} />
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
