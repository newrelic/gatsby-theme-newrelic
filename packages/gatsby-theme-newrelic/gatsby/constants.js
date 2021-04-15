const path = require('path');

const TESSEN_VERSION = '1.3.0';
const TESSEN_PATH = path.resolve(
  __dirname,
  `../static/tessen.min-${TESSEN_VERSION}.js`
);

module.exports = { TESSEN_PATH };
