const { buildConfigGetter } = require('../configBuilder');

module.exports = buildConfigGetter('googleTagManager', {
  defaults: {
    options: { anonymize_ip: true },
  },
});
