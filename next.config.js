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
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  async redirects() {
    return [
      {
        source: "/facebook",
        destination: "https://facebook.com/Zomeru",
        permanent: false,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/zomeruu",
        permanent: false,
      },
      {
        source: "/tiktok",
        destination: "https://tiktok.com/@zomeru_sama",
        permanent: false,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/zomeru_sama",
        permanent: false,
      },
      {
        source: "/linkedin",
        destination: "https://linkedin.com/in/zomergregorio",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/zomeru",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
