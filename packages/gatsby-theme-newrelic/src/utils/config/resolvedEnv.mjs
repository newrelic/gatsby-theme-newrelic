const DEFAULT_ENV = 'development';

const defaultResolveEnv = () =>
  process.env.GATSBY_NEWRELIC_ENV ||
  process.env.GATSBY_ACTIVE_ENV ||
  process.env.NODE_ENV ||
  DEFAULT_ENV;

export default (themeOptions) => {
  const { resolveEnv = defaultResolveEnv } = themeOptions;

  return resolveEnv();
};
