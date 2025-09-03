/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ["vercel.com"], // allow the Deploy button image
  },
};

export default nextConfig;
