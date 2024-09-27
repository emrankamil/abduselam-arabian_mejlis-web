/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "happy-ox-my-organization-emex-868f2096.koyeb.app",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
