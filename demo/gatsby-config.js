require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    repository: 'https://github.com/newrelic/gatsby-theme-newrelic',
    siteUrl: 'https://developer.newrelic.com',
    titleTemplate: '%s | Gatsby Theme Demo Site',
    utmSource: 'demo-site',
    branch: 'develop',
  },
  plugins: [
    {
      resolve: '@newrelic/gatsby-theme-newrelic',
      options: {
        i18n: {
          translationsPath: `${__dirname}/src/i18n/translations`,
          additionalLocales: [{ name: '日本語', locale: 'jp' }],
        },
        layout: {
          component: require.resolve('./src/layouts'),
          contentPadding: '2rem',
          maxWidth: '1480px',
        },
        newrelic: {
          configs: {
            staging: {},
            production: {},
          },
        },
        splitio: {
          // Mocked features only used when in localhost mode
          // https://help.split.io/hc/en-us/articles/360020448791-JavaScript-SDK#localhost-mode
          features: {
            'developer-website_global-header-gh-buttons': 'on',
          },
          core: {
            authorizationKey: process.env.SPLITIO_AUTH_KEY || 'localhost',
          },
        },
        gaTrackingId: 'UA-3047412-33',
      },
    },
    'gatsby-plugin-mdx',
  ],
};
