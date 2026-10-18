import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { demoMetadata } from "@/lib/seo";
import { soiConfig } from "@/demos/soi-nine/config";
import { meta, nav } from "@/demos/soi-nine/content";
import { DemoNotice, Footer, Header } from "@/demos/soi-nine/components/Chrome";
import { Faq, Hero, House, Journal, PlannerBar, Request, Rooms } from "@/demos/soi-nine/components/Sections";
import { StayProvider } from "@/demos/soi-nine/components/StayContext";
import heroImage from "@/demos/soi-nine/assets/teak-room.jpg";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  return demoMetadata({
    basePath: soiConfig.basePath,
    lang,
    title: meta.title[lang],
    description: meta.description[lang],
    siteName: { th: "บ้านซอยเก้า (ตัวอย่าง)", en: "Soi Nine House (concept demo)" },
    image: heroImage,
  });
}

export default async function SoiHome({ params }: Props) {
  const lang = (await params).lang as Locale;
  return (
    <>
      <a href="#main" className="soi-skip">
        {nav.skip[lang]}
      </a>
      <DemoNotice lang={lang} />
      <StayProvider>
        {/* The header is drawn over the hero photograph but stays outside <main>. */}
        <div className="soi-stage">
          <Header lang={lang} />
          <main id="main" tabIndex={-1}>
          <Hero lang={lang} />
          <PlannerBar lang={lang} />
          <Rooms lang={lang} />
          <House lang={lang} />
          <Journal lang={lang} />
          <Request lang={lang} />
          <Faq lang={lang} />
          </main>
        </div>
      </StayProvider>
      <Footer lang={lang} />
    </>
  );
}
