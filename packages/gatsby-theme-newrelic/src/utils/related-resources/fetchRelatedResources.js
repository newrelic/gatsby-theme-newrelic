const fs = require('fs');
const search = require('./search');
const { once } = require('lodash');

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

module.exports = async ({ node, slug, siteUrl, reporter }, swiftypeOptions) => {
  const {
    refetch,
    engineKey,
    limit,
    resultsPath,
    getParams = () => ({}),
  } = swiftypeOptions;

  const isProdEnv = process.env.NODE_ENV === 'production';

  if (refetch && !isProdEnv) {
    warn(reporter);
  }

  // Force disable refetch if in development mode to prevent us from
  // accidentally triggering potentially many queries
  if (refetch && isProdEnv) {
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
  }

  const data = JSON.parse(fs.readFileSync(resultsPath));

  return data[slug] || [];
};
