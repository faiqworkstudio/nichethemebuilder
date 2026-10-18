import { Anuphan, Trirong } from "next/font/google";

// Trirong: a Thai + Latin serif with soft, calligraphic contrast for headings.
// Anuphan: a friendly, open Thai + Latin sans for reading and forms.
export const trirong = Trirong({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-mali-display",
  display: "swap",
});

export const anuphan = Anuphan({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-mali-body",
  display: "swap",
});
