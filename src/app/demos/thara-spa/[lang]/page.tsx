import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { demoMetadata } from "@/lib/seo";
import { tharaConfig } from "@/demos/thara-spa/config";
import { meta, nav } from "@/demos/thara-spa/content";
import { BookingProvider } from "@/demos/thara-spa/components/BookingContext";
import { DemoNotice, Footer, Header } from "@/demos/thara-spa/components/Chrome";
import { Book, FaqAndFind, GoodToKnow, Hero, Menu, Visit } from "@/demos/thara-spa/components/Sections";
import heroImage from "@/demos/thara-spa/assets/overhead.jpg";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  return demoMetadata({
    basePath: tharaConfig.basePath,
    lang,
    title: meta.title[lang],
    description: meta.description[lang],
    siteName: { th: "ธารา นวดไทยและสปา (ตัวอย่าง)", en: "Thara Thai Massage & Spa (concept demo)" },
    image: heroImage,
  });
}

export default async function TharaHome({ params }: Props) {
  const lang = (await params).lang as Locale;
  return (
    <>
      <a href="#main" className="thara-skip">
        {nav.skip[lang]}
      </a>
      <DemoNotice lang={lang} />
      <Header lang={lang} />
      <BookingProvider>
        <main id="main" tabIndex={-1}>
          <Hero lang={lang} />
          <Menu lang={lang} />
          <Visit lang={lang} />
          <GoodToKnow lang={lang} />
          <Book lang={lang} />
          <FaqAndFind lang={lang} />
        </main>
      </BookingProvider>
      <Footer lang={lang} />
    </>
  );
}
