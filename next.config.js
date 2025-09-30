/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
        env: {
            NEXT_PUBLIC_CMS_URL: process.env.NEXT_PUBLIC_CMS_URL || 'https://soulrise-cms-production-fc73.up.railway.app',
            NEXT_PUBLIC_CMS_ADMIN_URL: process.env.NEXT_PUBLIC_CMS_ADMIN_URL || 'https://soulrise-cms-production-fc73.up.railway.app/admin',
        },
  webpack: (config, { isServer }) => {
    // Strapi 파일들을 Next.js 빌드에서 제외
    config.externals = config.externals || [];
    config.externals.push({
      'strapi-backend': 'commonjs strapi-backend'
    });
    
    return config;
  },
  experimental: {
    externalDir: true,
  }
}

module.exports = nextConfig