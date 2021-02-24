const { buildConfigGetter } = require('../config');

module.exports = buildConfigGetter('tessen', {
  envOptions: true,
  defaults: {
    minify: process.env.NODE_ENV !== 'development',
    trackPageViews: false,
  },
});
