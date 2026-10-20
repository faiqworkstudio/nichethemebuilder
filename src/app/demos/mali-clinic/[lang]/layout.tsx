import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { studio } from "@/config/studio";
import { isLocale, locales } from "@/lib/i18n";
import { anuphan, trirong } from "@/demos/mali-clinic/fonts";
import "@/demos/mali-clinic/theme.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(studio.siteUrl),
  // A fictional clinic should not appear in search results next to real ones.
  robots: { index: false, follow: true },
};

export const viewport: Viewport = { themeColor: "#fbf2f0" };

export default async function MaliRootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={lang}>
      <body className={`mali ${trirong.variable} ${anuphan.variable}`}>{children}</body>
    </html>
  );
}
