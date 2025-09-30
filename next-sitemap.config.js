/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://soulrise-cms-production-fc73.up.railway.app",
  generateRobotsTxt: true,
  exclude: ['/admin'],
  additionalPaths: async (config) => [
    await config.transform(config, '/solutions/soulcall'),
    await config.transform(config, '/solutions/eora'),
    await config.transform(config, '/solutions/tac-link'),
    await config.transform(config, '/products/tmw'),
  ],
};
