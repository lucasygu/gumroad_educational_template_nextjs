import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure images for external domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Exclude ref directory from compilation
  webpack: (config, { isServer }) => {
    // Ignore files in ref directory
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/ref/**', '**/node_modules/**']
    };
    return config;
  },
  // Only include src directory for TypeScript checking
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    dirs: ['src'], // Only run ESLint on src directory
  },
};

export default nextConfig;
