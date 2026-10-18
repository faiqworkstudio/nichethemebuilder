import type { Metadata } from "next";
import { Bricolage_Grotesque, Caveat, Inter, Noto_Sans_Thai } from "next/font/google";
import { studio } from "@/config/studio";
import "@/studio/studio.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const hand = Caveat({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-hand", display: "swap" });
const thai = Noto_Sans_Thai({ subsets: ["thai"], weight: ["400", "500"], variable: "--font-thai", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(studio.siteUrl),
  title: `${studio.name} — Websites for Bangkok businesses (demo portfolio)`,
  description:
    "Working concept websites for Bangkok businesses by Klickdoe: Thai–English, quick on a phone, and built around the enquiry. Every demo business is fictional and clearly labelled.",
  openGraph: {
    title: `${studio.name} — Websites for Bangkok businesses`,
    description: "Working Thai–English concept websites for Bangkok businesses. Open one and try it.",
    type: "website",
    images: [{ url: "/showcase/sen-studio/desktop.jpg", width: 1440, height: 900 }],
  },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`kd ${display.variable} ${body.variable} ${hand.variable} ${thai.variable}`}>{children}</body>
    </html>
  );
}
