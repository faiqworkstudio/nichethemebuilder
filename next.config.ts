import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Demo 01 defaults to Thai; the English version lives at /en.
      { source: "/demos/sen-studio", destination: "/demos/sen-studio/th", permanent: false },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
