import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { studio } from "@/config/studio";
import { isLocale, locales } from "@/lib/i18n";
import { krub, pridi } from "@/demos/thara-spa/fonts";
import "@/demos/thara-spa/theme.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(studio.siteUrl),
  // A fictional spa should not appear in search results next to real ones.
  robots: { index: false, follow: true },
};

export const viewport: Viewport = { themeColor: "#f6efe4" };

export default async function TharaRootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={lang}>
      <body className={`thara ${pridi.variable} ${krub.variable}`}>{children}</body>
    </html>
  );
}
