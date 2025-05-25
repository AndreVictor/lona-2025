import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //output: "export",

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
};

export default nextConfig;