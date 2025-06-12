import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store, max-age=0",
        },
      ],
    },
  ],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "2025wp.mostra-lona.com.br",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;