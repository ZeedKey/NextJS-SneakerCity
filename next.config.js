/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://fakestoreapi.com/img", "fakestoreapi.com"],
  },
};

module.exports = nextConfig;
