const { merge, omit } = require('lodash');
const getResolvedEnv = require('./config/resolvedEnv');

const buildConfigGetter =
  (configKey, { defaults = {}, envOptions = false } = {}) =>
  (themeOptions) => {
    const config = themeOptions[configKey];

    if (!config) {
      return null;
    }

    return merge(
      defaults,
      omit(config, ['env']),
      envOptions && config.env ? config.env[getResolvedEnv(themeOptions)] : {}
    );
  };

module.exports = { buildConfigGetter };
