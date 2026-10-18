import { Krub, Pridi } from "next/font/google";

// Pridi: a warm Thai + Latin serif with soft terminals, for headings and the menu.
// Krub: a friendly Thai + Latin sans with slightly squared curves, for reading.
export const pridi = Pridi({ subsets: ["thai", "latin"], weight: ["300", "400", "500"], variable: "--font-thara-display", display: "swap" });
export const krub = Krub({ subsets: ["thai", "latin"], weight: ["400", "500", "600"], variable: "--font-thara-body", display: "swap" });
