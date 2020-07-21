module.exports = {
  siteMetadata: {
    repository: 'https://github.com/newrelic/gatsby-theme-newrelic',
    siteUrl: 'https://developer.newrelic.com',
  },
  plugins: [
    {
      resolve: '@newrelic/gatsby-theme-newrelic',
      options: {
        layout: {
          contentPadding: '2rem',
          maxWidth: '1080px',
        },
        newrelic: {
          configs: {
            staging: {},
            production: {},
          },
        },
      },
    },
  ],
};
