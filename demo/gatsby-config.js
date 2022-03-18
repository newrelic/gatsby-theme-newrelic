require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    repository: 'https://github.com/newrelic/gatsby-theme-newrelic',
    siteUrl: 'https://developer.newrelic.com',
    titleTemplate: '%s | Gatsby Theme Demo Site',
    branch: 'develop',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: '@newrelic/gatsby-theme-newrelic',
      options: {
        i18n: {
          translationsPath: `${__dirname}/src/i18n/translations`,
          additionalLocales: ['jp', 'kr'],
        },
        layout: {
          component: require.resolve('./src/layouts'),
          contentPadding: '2rem',
          maxWidth: '1480px',
          mobileBreakpoint: '760px',
        },
        newrelic: {
          configs: {
            development: {
              instrumentationType: 'proAndSPA',
              accountId: '10956800',
              trustKey: '1',
              agentID: '35094665',
              licenseKey: 'NRJS-649173eb1a7b28cd6ab',
              // New Relic Gatsby Theme - Demo Site
              applicationID: '35094665',
              beacon: 'staging-bam.nr-data.net',
              errorBeacon: 'staging-bam.nr-data.net',
            },
          },
        },
        tessen: {
          tessenVersion: '1.14.0',
          product: 'THEME',
          subproduct: 'TTHEME',
          // segment key for dev only source
          segmentWriteKey: 'oMdv2YZCnzuC1iTVi9iCnFn6F9ycYb5v',
          trackPageViews: true,
          pageView: {
            eventName: 'pageView',
            category: 'ThemePageView',
          },
        },
        splitio: {
          // Mocked features only used when in localhost mode
          // https://help.split.io/hc/en-us/articles/360020448791-JavaScript-SDK#localhost-mode
          features: {
            deven_signupbutton_text: {
              treatment: 'start_now',
              config: '{ "text": "Start now" }',
            },
          },
          core: {
            authorizationKey: process.env.SPLITIO_AUTH_KEY || 'localhost',
          },
          debug: false,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>',
            },
          },
        ],
      },
    },
  ],
};
