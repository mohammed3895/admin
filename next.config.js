/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      { hostname: "randomuser.me" },
      { hostname: "images.unsplash.com" },
    ],
  },
  transpilePackages: ["lucide-react"],
};

export default config;
