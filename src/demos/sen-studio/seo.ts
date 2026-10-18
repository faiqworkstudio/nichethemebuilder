import { demoMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";
import { senConfig } from "./config";
import heroImage from "./assets/ari-bedroom.jpg";

export const senMetadata = (args: { lang: Locale; path: string; title: string; description: string }) =>
  demoMetadata({
    ...args,
    basePath: senConfig.basePath,
    siteName: { th: "เส้น สตูดิโอ (ตัวอย่าง)", en: "Sen Studio (concept demo)" },
    image: heroImage,
  });
