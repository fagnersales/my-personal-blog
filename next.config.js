/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://cdn.discordapp.com"
      }
    ]
  }
}

module.exports = nextConfig
