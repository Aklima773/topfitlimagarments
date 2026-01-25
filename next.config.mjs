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
  },
  experimental: {
    turbo: {
      resolveAlias: false  // Disable Turbopack
    }
  },
  // Disable font optimization (causes EPERM)
  optimizeFonts: false,
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 1000
    };
    return config;
  }
};

export default nextConfig;
