/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ["cdn.sanity.io", "zomeru.com", "raw.githubusercontent.com"],
  },
  compiler: {
    styledComponents: true,
  },
  // Note: redirects() doesn't work with static export
  // You'll need to handle these redirects via client-side routing or create static redirect pages
};

module.exports = nextConfig;
