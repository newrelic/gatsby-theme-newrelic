import { merge, omit } from 'lodash';

const DEFAULT_ENV = 'development';

const getSplitConfig = (pluginOptions) => {
  const { splitio } = pluginOptions;

  const {
    env = {},
    resolveEnv = () => process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV,
  } = splitio;

  const envOptions = env[resolveEnv()] || env[DEFAULT_ENV] || {};

  return merge(omit(splitio, ['env', 'resolveEnv']), envOptions);
};

export default getSplitConfig;
