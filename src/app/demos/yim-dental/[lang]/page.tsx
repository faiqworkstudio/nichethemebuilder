import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { demoMetadata } from "@/lib/seo";
import { yimConfig } from "@/demos/yim-dental/config";
import { meta, nav } from "@/demos/yim-dental/content";
import { DemoNotice, Footer, Header } from "@/demos/yim-dental/components/Chrome";
import { Book, Faq, Hero, Library, Nervous, Paying, Team, Urgent } from "@/demos/yim-dental/components/Sections";
import { YimProvider } from "@/demos/yim-dental/components/YimContext";
import heroImage from "@/demos/yim-dental/assets/room-orange.jpg";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  return demoMetadata({
    basePath: yimConfig.basePath,
    lang,
    title: meta.title[lang],
    description: meta.description[lang],
    siteName: { th: "ยิ้ม ทันตกรรม (ตัวอย่าง)", en: "Yim Dental Clinic (concept demo)" },
    image: heroImage,
  });
}

export default async function YimHome({ params }: Props) {
  const lang = (await params).lang as Locale;
  return (
    <>
      <a href="#main" className="yim-skip">
        {nav.skip[lang]}
      </a>
      <DemoNotice lang={lang} />
      <Header lang={lang} />
      <YimProvider>
        <main id="main" tabIndex={-1}>
          <Hero lang={lang} />
          <Urgent lang={lang} />
          <Nervous lang={lang} />
          <Library lang={lang} />
          <Team lang={lang} />
          <Paying lang={lang} />
          <Book lang={lang} />
          <Faq lang={lang} />
        </main>
      </YimProvider>
      <Footer lang={lang} />
    </>
  );
}
