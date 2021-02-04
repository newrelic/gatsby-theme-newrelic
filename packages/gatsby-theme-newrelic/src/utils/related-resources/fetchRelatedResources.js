const fs = require('fs');
const search = require('./search');

module.exports = async ({ slug, params, siteUrl }, swiftypeOptions) => {
  const { refetch, engineKey, limit, resultsPath } = swiftypeOptions;

  if (refetch) {
    return search(siteUrl + slug, params, {
      engineKey,
      limit,
    });
  }

  const data = JSON.parse(fs.readFileSync(resultsPath));

  return data[slug] || [];
};
