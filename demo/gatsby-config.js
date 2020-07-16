module.exports = {
  plugins: [
    {
      resolve: '@newrelic/gatsby-theme-newrelic',
      options: {
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
