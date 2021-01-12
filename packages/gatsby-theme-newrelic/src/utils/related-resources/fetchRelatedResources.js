const fs = require('fs');
const search = require('./search');

module.exports = async ({ pathname, node, siteUrl }, pluginOptions) => {
  const {
    refetch,
    engineKey,
    limit,
    file,
    getParams = () => ({}),
  } = pluginOptions;

  if (refetch) {
    return search(siteUrl + pathname, getParams({ node }), {
      engineKey,
      limit,
    });
  }

  const data = JSON.parse(fs.readFileSync(file));

  return data[pathname] || [];
};
