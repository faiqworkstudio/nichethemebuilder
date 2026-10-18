import { IBM_Plex_Mono, IBM_Plex_Sans_Thai } from "next/font/google";

// IBM Plex Sans Thai covers both Thai and Latin, so headings and body text
// keep one voice across languages. Plex Mono is used only for Latin/number
// annotations (sheet codes, dimensions), never for Thai text.
export const plexThai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plex-thai",
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});
