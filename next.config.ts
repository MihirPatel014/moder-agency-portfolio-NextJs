import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.easyfrontend.com", // Add your image host
        pathname: "/pictures/**",
      },
    ],
  },
};

export default nextConfig;
