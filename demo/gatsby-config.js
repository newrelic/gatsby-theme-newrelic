module.exports = {
  plugins: [
    {
      resolve: '@newrelic/gatsby-theme-newrelic',
      options: {
        gaTrackingId: '12345',
        newrelic: {
          staging: {
            instrumentationType: 'proAndSPA',
            accountId: '10175106',
            trustKey: '1',
            agentID: '22273531',
            licenseKey: '23448da482',
            applicationID: '22273531',
            beacon: 'staging-bam.nr-data.net',
            errorBeacon: 'staging-bam.nr-data.net',
          },
        },
      },
    },
  ],
};
