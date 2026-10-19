import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { demoMetadata } from "@/lib/seo";
import { ledgerConfig } from "@/demos/ledgerline/config";
import { meta, nav } from "@/demos/ledgerline/content";
import { DemoNotice, Footer, Masthead } from "@/demos/ledgerline/components/Chrome";
import { Faq, Hero, Intro, Month, Services, Stories } from "@/demos/ledgerline/components/Sections";
import heroImage from "@/demos/ledgerline/assets/signing.jpg";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  return demoMetadata({
    basePath: ledgerConfig.basePath,
    lang,
    title: meta.title[lang],
    description: meta.description[lang],
    siteName: { th: "เลดเจอร์ไลน์ แอดไวซอรี (ตัวอย่าง)", en: "Ledgerline Advisory (concept demo)" },
    image: heroImage,
  });
}

export default async function LedgerHome({ params }: Props) {
  const lang = (await params).lang as Locale;
  return (
    <>
      <a href="#main" className="ledger-skip">
        {nav.skip[lang]}
      </a>
      <DemoNotice lang={lang} />
      <Masthead lang={lang} />
      <main id="main" tabIndex={-1}>
        <Hero lang={lang} />
        <Stories lang={lang} />
        <Services lang={lang} />
        <Month lang={lang} />
        <Faq lang={lang} />
        <Intro lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
