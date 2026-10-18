import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Demos default to Thai; the English version lives at /en.
      { source: "/demos/sen-studio", destination: "/demos/sen-studio/th", permanent: false },
      { source: "/demos/mali-clinic", destination: "/demos/mali-clinic/th", permanent: false },
      { source: "/demos/soi-nine", destination: "/demos/soi-nine/th", permanent: false },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
