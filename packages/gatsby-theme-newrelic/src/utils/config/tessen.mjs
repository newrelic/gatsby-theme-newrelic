const { buildConfigGetter } = require('../configBuilder');

export default buildConfigGetter('tessen', {
  envOptions: true,
  defaults: {
    minify: process.env.NODE_ENV !== 'development',
    trackPageViews: false,
  },
});
