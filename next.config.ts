import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "api.microlink.io",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
      {
        protocol: "https",
        hostname: "*images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*assets.aceternity.com",
      },
    ],
  },
};

export default nextConfig;
