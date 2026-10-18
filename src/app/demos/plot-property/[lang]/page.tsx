import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { demoMetadata } from "@/lib/seo";
import { plotConfig } from "@/demos/plot-property/config";
import { meta, nav } from "@/demos/plot-property/content";
import { DemoNotice, Footer, Header } from "@/demos/plot-property/components/Chrome";
import { Faq, Hero, How, Listings, Renting } from "@/demos/plot-property/components/Sections";
import heroImage from "@/demos/plot-property/assets/facade.jpg";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  return demoMetadata({
    basePath: plotConfig.basePath,
    lang,
    title: meta.title[lang],
    description: meta.description[lang],
    siteName: { th: "พล็อต พร็อพเพอร์ตี้ (ตัวอย่าง)", en: "Plot Property (concept demo)" },
    image: heroImage,
  });
}

export default async function PlotHome({ params }: Props) {
  const lang = (await params).lang as Locale;
  return (
    <>
      <a href="#main" className="plot-skip">
        {nav.skip[lang]}
      </a>
      <DemoNotice lang={lang} />
      <Header lang={lang} />
      <main id="main" tabIndex={-1}>
        <Hero lang={lang} />
        <Listings lang={lang} />
        <Renting lang={lang} />
        <How lang={lang} />
        <Faq lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
