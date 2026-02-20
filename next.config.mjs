/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
    ],
    minimumCacheTTL: 0,  // Disable image cache bloat [web:24]
    formats: ['image/webp'],  // Single format [web:24]
  },
  experimental: {
    turbo: {
      resolveAlias: false
    }
  },
  optimizeFonts: false,
  compress: true,  // Build-time gzip (default, keep) [web:26]
  webpack: (config, { dev, isServer }) => {
    // Disable webpack cache in prod builds
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
  swcMinify: true,  // Faster minification (default)
};

export default nextConfig;
