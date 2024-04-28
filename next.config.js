/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [{ hostname: "randomuser.me" }],
  },
};

export default config;
