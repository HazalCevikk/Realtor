/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ap.rdcpix.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "ap.rdcpix.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
