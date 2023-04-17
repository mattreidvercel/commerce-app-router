/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn11.bigcommerce.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
