import { IBM_Plex_Mono, IBM_Plex_Sans_Thai, IBM_Plex_Sans_Thai_Looped, Instrument_Sans } from "next/font/google";

// Per-script stack: English renders in Instrument Sans (clean, warm, slightly
// humanist), Thai falls through glyph-by-glyph to IBM Plex Sans Thai for
// headings and its looped sibling for easy-reading body text. Plex Mono is
// used only for Latin/number annotations (sheet codes, dimensions).
export const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sen-latin",
  display: "swap",
});

export const plexThai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plex-thai",
  display: "swap",
});

export const plexThaiLooped = IBM_Plex_Sans_Thai_Looped({
  subsets: ["thai"],
  weight: ["400", "500"],
  variable: "--font-plex-thai-looped",
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});
