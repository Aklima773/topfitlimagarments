/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tell Next.js to treat these as external (not bundle them)
  serverExternalPackages: ['mongodb', 'bcryptjs'], 

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
    ],
    unoptimized: true, 
    minimumCacheTTL: 0,
    formats: ['image/webp'],
  },
  experimental: {
    turbo: {
      resolveAlias: false
    }
  },
  optimizeFonts: false,
  compress: true,
  webpack: (config, { dev, isServer }) => {
    if (config.cache && !dev) {
      config.cache = {
        type: 'memory',
        maxMemoryGenerations: 0
      };
    }
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 1000
    };
    return config;
  },
  swcMinify: true,
};

// Use ES Module export instead of module.exports
export default nextConfig;