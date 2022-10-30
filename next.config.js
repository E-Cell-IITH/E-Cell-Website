/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites(){
   return [
    {
      source:'/caportal',
      destination:'/caprg/index.html'
    }
    ]
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
