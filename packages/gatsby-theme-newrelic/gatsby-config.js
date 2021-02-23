module.exports = ({ layout, newrelic, robots = {}, sitemap = true }) => {
  return {
    plugins: [
      'gatsby-plugin-emotion',
      'gatsby-plugin-react-helmet',
      sitemap && 'gatsby-plugin-sitemap',
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
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'announcements',
          path: 'src/announcements',
        },
      },
    ].filter(Boolean),
  };
};
