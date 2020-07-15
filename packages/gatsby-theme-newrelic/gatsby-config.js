module.exports = ({ gaTrackingId, newrelic, robots = {} }) => {
  return {
    plugins: [
      'gatsby-plugin-emotion',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sitemap',
      'gatsby-plugin-use-dark-mode',
      gaTrackingId && {
        resolve: 'gatsby-plugin-google-analytics',
        options: {
          trackingId: gaTrackingId,
          head: true,
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
        options: {
          configs: newrelic,
        },
      },
    ].filter(Boolean),
  };
};
