module.exports = ({ newrelic, robots = {}, gdprTracking }) => {
  return {
    plugins: [
      'gatsby-plugin-emotion',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sitemap',
      'gatsby-plugin-use-dark-mode',
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
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
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'announcements',
          path: 'src/announcements',
        },
      },
      gdprTracking && {
        resolve: 'gatsby-plugin-gdpr-tracking',
        options: gdprTracking,
      },
    ].filter(Boolean),
  };
};
