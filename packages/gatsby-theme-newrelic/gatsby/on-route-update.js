import trackViaTessen from '../src/utils/page-tracking/tessen';
import getTessenConfig from '../src/utils/config/tessen';
import { getResolvedEnv } from '../src/utils/config';

const onRouteUpdate = ({ location, prevLocation }, themeOptions) => {
  const env = getResolvedEnv(themeOptions);
  const tessenConfig = getTessenConfig(themeOptions);

  trackViaTessen({ location, prevLocation }, tessenConfig, env);
};

export default onRouteUpdate;
