import { merge, omit } from 'lodash';

const DEFAULT_ENV = 'development';

const DEFAULT_CONFIG = {
  core: {
    trafficType: 'user',
  },
};

const getSplitConfig = (pluginOptions) => {
  const { splitio } = pluginOptions;

  const {
    env = {},
    resolveEnv = () =>
      process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || DEFAULT_ENV,
  } = splitio;

  const envOptions = env[resolveEnv()] || {};

  return merge(
    DEFAULT_CONFIG,
    omit(splitio, ['env', 'resolveEnv']),
    envOptions
  );
};

export default getSplitConfig;
