import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    return [
      // The example briefing is a static, self-contained HTML report in public/.
      { source: "/example-report", destination: "/example-report/index.html" },
    ];
  },
};

export default nextConfig;
