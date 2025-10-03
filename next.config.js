/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcMinify: true,
  },
   env: {

    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "Carlo2024",

    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "school",

  },
  images: {

    // Remote image patterns (recommended):

    remotePatterns: [

      {

        protocol: 'https',

        hostname: 'res.cloudinary.com',

        port: '',

        pathname: '/**',

      },

      {

        protocol: 'https',

        hostname: 'd1yei2z3i6k35z.cloudfront.net',

        port: '',

        pathname: '/**',

      },

      {

        protocol: 'https',

        hostname: 'img.clerk.com',

        port: '',

        pathname: '/**',

      },

    ],

  },

};


module.exports = nextConfig;
