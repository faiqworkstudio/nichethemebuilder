import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai, Poppins } from "next/font/google";
import { studio } from "@/config/studio";
import "@/studio/studio.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const notoThai = Noto_Sans_Thai({ subsets: ["thai"], weight: ["400", "500"], variable: "--font-thai", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(studio.siteUrl),
  title: `${studio.name} — Demo website portfolio`,
  description:
    "Concept websites for Bangkok businesses by Klickdoe: bilingual Thai–English, mobile-first and built around real enquiries. Each demo is a fictional business, clearly labelled.",
  openGraph: {
    title: `${studio.name} — Demo website portfolio`,
    description: "Bilingual, mobile-first concept websites for Bangkok businesses.",
    type: "website",
    images: [{ url: "/showcase/sen-studio/desktop.jpg", width: 1440, height: 900 }],
  },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`kd ${poppins.variable} ${inter.variable} ${notoThai.variable}`}>{children}</body>
    </html>
  );
}
