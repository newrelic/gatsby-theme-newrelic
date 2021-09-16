const path = require('path');

const DEFAULT_TESSEN_VERSION = '1.3.0';

const getTessenPath = (version) =>
  path.resolve(
    __dirname,
    `../static/tessen.min-${version || DEFAULT_TESSEN_VERSION}.js`
  );
module.exports = { getTessenPath };
