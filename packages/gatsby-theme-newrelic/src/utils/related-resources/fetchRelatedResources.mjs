const fs = require('fs');
const search = require('./search');
const { once, memoize } = require('lodash');

const getExcludedUrls = (node, siteUrl) => {
  const { frontmatter = {} } = node;
  const resources = frontmatter.resources || [];
  const redirects = frontmatter.redirects || [];

  return resources
    .map((resource) => resource.url)
    .concat(redirects)
    .map((url) => (url.startsWith('/') ? siteUrl + url : url));
};

const warn = once((reporter) => {
  reporter.warn(
    '[@newrelic/gatsby-theme-newrelic] You are attempting to fetch Swiftype ' +
      'results for related resources in development mode. As a precaution, ' +
      'this has been disabled to prevent the accidental execution of queries ' +
      'for large sites. Please disable the `relatedResources.swiftype.refetch` ' +
      'flag in development to hide this warning.'
  );
});

const getResultsFromSwiftype = ({ node, siteUrl, slug }, swiftypeOptions) => {
  const { engineKey, limit, getParams = () => ({}) } = swiftypeOptions;
  const { frontmatter = {} } = node;
  const defaultParams = { q: frontmatter.title };
  const params = getParams({ node, slug });

  return search(
    siteUrl + slug,
    { ...defaultParams, ...params },
    {
      engineKey,
      limit,
      excludedUrls: getExcludedUrls(node, siteUrl),
    }
  );
};

const readResultsFromLocalFile = memoize((resultsPath) =>
  JSON.parse(fs.readFileSync(resultsPath, { encoding: 'utf-8' }))
);

const getLocalResults = ({ slug }, swiftypeOptions) => {
  const data = readResultsFromLocalFile(swiftypeOptions.resultsPath);

  return data[slug] || [];
};

module.exports = async (helpers, swiftypeOptions) => {
  const { reporter } = helpers;
  const { refetch } = swiftypeOptions;
  const isProdEnv = process.env.NODE_ENV === 'production';

  if (refetch) {
    if (isProdEnv) {
      return getResultsFromSwiftype(helpers, swiftypeOptions);
    }

    warn(reporter);
  }

  return getLocalResults(helpers, swiftypeOptions);
};
