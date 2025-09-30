export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['245b1c440040599c6027f8ebd33e1c3de1749b77a8d0339176964aa4b24d30c40ade47cf6d58ce5f644760889f842f92217454bbe6d702a3eff5687f62d618c5']),
  },
  url: env('PUBLIC_URL'),
  proxy: env.bool('IS_PROXIED', true),
  cron: {
    enabled: env.bool('CRON_ENABLED', false),
  },
});
