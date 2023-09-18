import { merge, omit } from 'lodash-es';
import getResolvedEnv from './config/resolvedEnv.mjs';

export const buildConfigGetter =
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
