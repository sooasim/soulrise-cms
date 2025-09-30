/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', // 개발 모드에서는 주석 처리
    // trailingSlash: true,
    images: {
        unoptimized: true
    },
  env: {
    NEXT_PUBLIC_CMS_URL: process.env.NEXT_PUBLIC_CMS_URL || 'https://soulrise-cms-production.up.railway.app',
    NEXT_PUBLIC_CMS_ADMIN_URL: process.env.NEXT_PUBLIC_CMS_ADMIN_URL || 'https://soulrise-cms-production.up.railway.app/admin',
  }
}

module.exports = nextConfig