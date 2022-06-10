module.exports = ({ layout, newrelic, robots = {}, sitemap = true }) => {
  return {
    plugins: [
      'gatsby-plugin-emotion',
      'gatsby-plugin-react-helmet',
      sitemap && {
        resolve: 'gatsby-plugin-sitemap',
        options: {
          output: '/',
        },
      },
      'gatsby-plugin-use-dark-mode',
      'gatsby-transformer-sharp',
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          defaults: {},
        },
        splitio: {
          // Mocked features only used when in localhost mode
          // https://help.split.io/hc/en-us/articles/360020448791-JavaScript-SDK#localhost-mode
          features: {
            free_account_button_color: {
              treatment: 'off',
            },
          },
          core: {
            authorizationKey: 'localhost',
          },
          debug: false,
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
