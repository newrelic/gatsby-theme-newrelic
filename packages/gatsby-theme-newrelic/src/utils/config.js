const { merge, omit } = require('lodash');

const DEFAULT_ENV = 'development';

const defaultResolveEnv = () =>
  process.env.GATSBY_NEWRELIC_ENV ||
  process.env.GATSBY_ACTIVE_ENV ||
  process.env.NODE_ENV ||
  DEFAULT_ENV;

const getResolvedEnv = (themeOptions) => {
  const { resolveEnv = defaultResolveEnv } = themeOptions;

  return resolveEnv();
};

const buildConfigGetter = (
  configKey,
  { defaults, envOptions = false } = {}
) => (themeOptions) => {
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

module.exports = { getResolvedEnv, buildConfigGetter };
