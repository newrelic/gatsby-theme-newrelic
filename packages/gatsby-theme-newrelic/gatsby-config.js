module.exports = ({ layout, newrelic, robots = {}, sitemap = true }) => {
  return {
    plugins: [
      'gatsby-plugin-emotion',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-portal',
      sitemap && {
        resolve: 'gatsby-plugin-sitemap',
        options: {
          output: '/',
          excludes: ['*/embed/'],
        },
      },
      'gatsby-plugin-use-dark-mode',
      'gatsby-transformer-sharp',
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          defaults: {},
        },
      },
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
          sitemap: 'sitemap-index.xml',
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
