import { buildConfigGetter } from '../configBuilder.mjs';

export default buildConfigGetter('tessen', {
  envOptions: true,
  defaults: {
    minify: process.env.NODE_ENV !== 'development',
    trackPageViews: false,
  },
});
