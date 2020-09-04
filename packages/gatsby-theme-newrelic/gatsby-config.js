module.exports = ({ newrelic, robots = {} }) => {
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
      'gatsby-plugin-mdx',
    ].filter(Boolean),
  };
};
