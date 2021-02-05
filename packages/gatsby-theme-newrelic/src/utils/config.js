import { DEFAULT_ENV } from './constants';

const defaultResolveEnv = () =>
  process.env.GATSBY_NEWRELIC_ENV ||
  process.env.GATSBY_ACTIVE_ENV ||
  process.env.NODE_ENV ||
  DEFAULT_ENV;

export const getResolvedEnv = (themeOptions) => {
  const { resolveEnv = defaultResolveEnv } = themeOptions;

  return resolveEnv();
};
