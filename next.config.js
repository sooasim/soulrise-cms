/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    env: {
        NEXT_PUBLIC_CMS_URL: process.env.NEXT_PUBLIC_CMS_URL || 'https://soulrise-cms-production.up.railway.app',
    },
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
            net: false,
            tls: false,
        };
        return config;
    },
    experimental: {
        externalDir: true,
    }
}

module.exports = nextConfig
