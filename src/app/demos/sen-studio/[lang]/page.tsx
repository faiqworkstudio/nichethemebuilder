import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { DemoNotice, SiteFooter, SiteHeader } from "@/demos/sen-studio/components/Chrome";
import { ProjectIndex } from "@/demos/sen-studio/components/ProjectIndex";
import { QuotePath } from "@/demos/sen-studio/components/QuotePath";
import { Faq, Hero, Process, Services, Studio } from "@/demos/sen-studio/components/Sections";
import { meta, nav } from "@/demos/sen-studio/content";
import { senMetadata } from "@/demos/sen-studio/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  return senMetadata({ lang, path: "", title: meta.title[lang], description: meta.description[lang] });
}

export default async function SenHome({ params }: Props) {
  // The layout has already rejected unknown locales.
  const lang = (await params).lang as Locale;
  return (
    <>
      <a href="#main" className="sen-skip">
        {nav.skip[lang]}
      </a>
      <DemoNotice lang={lang} />
      <SiteHeader lang={lang} />
      <main id="main" tabIndex={-1}>
        <Hero lang={lang} />
        <ProjectIndex lang={lang} />
        <Services lang={lang} />
        <Studio lang={lang} />
        <Process lang={lang} />
        <QuotePath lang={lang} />
        <Faq lang={lang} />
      </main>
      <div style={{ height: "var(--section-space)" }} aria-hidden="true" />
      <SiteFooter lang={lang} />
    </>
  );
}
