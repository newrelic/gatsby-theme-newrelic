const fs = require('fs');
const search = require('./search');

const getExcludedUrls = (node, siteUrl) => {
  const { frontmatter = {} } = node;
  const resources = frontmatter.resources || [];
  const redirects = frontmatter.redirects || [];

  return resources
    .map((resource) => resource.url)
    .concat(redirects)
    .map((url) => (url.startsWith('/') ? siteUrl + url : url));
};

module.exports = async ({ node, slug, siteUrl }, swiftypeOptions) => {
  const {
    refetch,
    engineKey,
    limit,
    resultsPath,
    getParams = () => ({}),
  } = swiftypeOptions;

  if (refetch) {
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
