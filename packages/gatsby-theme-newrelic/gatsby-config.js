module.exports = ({
  layout,
  newrelic,
  swiftype,
  robots = {},
  gaTrackingId,
}) => {
  return {
    plugins: [
      'gatsby-plugin-emotion',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sitemap',
      'gatsby-plugin-use-dark-mode',
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      layout &&
        layout.component && {
          resolve: `gatsby-plugin-layout`,
          options: {
            component: layout.component,
          },
        },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: 'src/images',
        },
      },
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          policy: [{ userAgent: '*', allow: '/' }],
          ...robots,
        },
      },
      newrelic && {
        resolve: 'gatsby-plugin-newrelic',
        options: newrelic,
      },
      swiftype && {
        resolve: 'gatsby-source-swiftype',
        options: swiftype,
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'announcements',
          path: 'src/announcements',
        },
      },
      {
        resolve: 'gatsby-plugin-gdpr-tracking',
        options: {
          debug: false,
          googleAnalytics: {
            trackingId: gaTrackingId,
            autoStart: false,
            anonymize: true,
            controlCookieName: 'newrelic-gdpr-consent',
          },
          environments: ['production', 'development'],
        },
      },
    ].filter(Boolean),
  };
};
