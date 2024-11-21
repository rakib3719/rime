/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "i.ibb.co", 
      ],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**", 
        },
      ],
    },
  };
  
  export default nextConfig;
  