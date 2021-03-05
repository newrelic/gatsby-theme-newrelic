const DEFAULT_ENV = 'development';

const defaultResolveEnv = () =>
  process.env.GATSBY_NEWRELIC_ENV ||
  process.env.GATSBY_ACTIVE_ENV ||
  process.env.NODE_ENV ||
  DEFAULT_ENV;

module.exports = (themeOptions) => {
  const { resolveEnv = defaultResolveEnv } = themeOptions;

  return resolveEnv();
};
