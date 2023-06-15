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
    domains: ["res.cloudinary.com",'images.pexels.com', "raw.githubusercontent.com"],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'raw.githubusercontent.com',
    //     port: '',
    //     pathname: '/**',
    //   },
    // ],
  },
};

module.exports = nextConfig;
