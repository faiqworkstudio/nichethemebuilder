import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { studio } from "@/config/studio";
import { isLocale, locales } from "@/lib/i18n";
import { notoSans, taviraj } from "@/demos/ledgerline/fonts";
import "@/demos/ledgerline/theme.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(studio.siteUrl),
  // A fictional firm should not appear in search results next to real ones.
  robots: { index: false, follow: true },
};

export const viewport: Viewport = { themeColor: "#fbfaf7" };

export default async function LedgerRootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={lang}>
      <body className={`ledger ${taviraj.variable} ${notoSans.variable}`}>{children}</body>
    </html>
  );
}
