const fs = require('fs');
const path = require('path');

module.exports = fs
  .readFileSync(path.resolve(__dirname, './type-defs.graphql'), {
    encoding: 'utf-8',
  })
  .toString();
