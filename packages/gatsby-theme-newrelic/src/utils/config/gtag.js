const { buildConfigGetter } = require('../configBuilder');

module.exports = buildConfigGetter('googleTagManager', {
  envOptions: false,
  defaults: {
    minify: process.env.NODE_ENV !== 'development',
    options: { anonymize_ip: true },
  },
});
