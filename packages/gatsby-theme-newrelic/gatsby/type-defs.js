const fs = require('fs');
const path = require('path');

const SCHEMA_CUSTOMIZATION_TYPES = fs
  .readFileSync(path.resolve(__dirname, './type-defs.graphql'), {
    encoding: 'utf-8',
  })

  // converted toString for type-creation in gatsby-node
  .toString();

module.exports = { SCHEMA_CUSTOMIZATION_TYPES };
