import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { demoMetadata } from "@/lib/seo";
import { maliConfig } from "@/demos/mali-clinic/config";
import { meta, nav } from "@/demos/mali-clinic/content";
import { ConcernProvider } from "@/demos/mali-clinic/components/ConcernContext";
import { DemoNotice, Footer, Header } from "@/demos/mali-clinic/components/Chrome";
import { Doctors, Faq, FirstVisit, Hero, Promises, Treatments, VisitAndBook } from "@/demos/mali-clinic/components/Sections";
import heroImage from "@/demos/mali-clinic/assets/hands-jar.jpg";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  return demoMetadata({
    basePath: maliConfig.basePath,
    lang,
    title: meta.title[lang],
    description: meta.description[lang],
    siteName: { th: "มะลิ สกินคลินิก (ตัวอย่าง)", en: "Mali Skin Clinic (concept demo)" },
    image: heroImage,
  });
}

export default async function MaliHome({ params }: Props) {
  const lang = (await params).lang as Locale;
  return (
    <>
      <a href="#main" className="mali-skip">
        {nav.skip[lang]}
      </a>
      <DemoNotice lang={lang} />
      <Header lang={lang} />
      <ConcernProvider>
        <main id="main" tabIndex={-1}>
          <Hero lang={lang} />
          <FirstVisit lang={lang} />
          <Treatments lang={lang} />
          <Promises lang={lang} />
          <Doctors lang={lang} />
          <VisitAndBook lang={lang} />
          <Faq lang={lang} />
        </main>
      </ConcernProvider>
      <Footer lang={lang} />
    </>
  );
}
