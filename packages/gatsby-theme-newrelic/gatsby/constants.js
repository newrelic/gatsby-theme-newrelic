const path = require('path');

const TESSEN_VERSION = '1.3.0';
const TESSEN_PATH = path.resolve(
  __dirname,
  `../static/tessen.min-${TESSEN_VERSION}.js`
);
const GA_PROPERTY_ID = 'UA-3047412-33';
const GTAG_SRC = `https://www.googletagmanager.com/gtag/js`;

module.exports = { TESSEN_PATH, GA_PROPERTY_ID, GTAG_SRC };
