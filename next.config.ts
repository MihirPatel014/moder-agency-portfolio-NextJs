import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.easyfrontend.com", // Existing domain
        pathname: "/pictures/**", // Path pattern for the existing domain
      },
      {
        protocol: "https",
        hostname: "mighty.tools", // Add this new domain
        pathname: "/mockmind-api/content/**", // Specify the correct path pattern for your image source
      },
    ],
  },
};

export default nextConfig;
