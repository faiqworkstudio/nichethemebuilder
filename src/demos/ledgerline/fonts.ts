import { Noto_Sans_Thai, Taviraj } from "next/font/google";

// Taviraj: a Thai + Latin text serif with real italics — the editorial voice.
// Noto Sans Thai: quiet, highly legible Thai + Latin sans for UI and notes.
export const taviraj = Taviraj({ subsets: ["thai", "latin"], weight: ["300", "400", "500"], style: ["normal", "italic"], variable: "--font-ledger-serif", display: "swap" });
export const notoSans = Noto_Sans_Thai({ subsets: ["thai", "latin"], weight: ["400", "500", "600"], variable: "--font-ledger-sans", display: "swap" });
