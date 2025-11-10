/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ["cdn.sanity.io", "zomeru.com", "raw.githubusercontent.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
