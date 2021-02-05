import { withDefaults } from '../src/utils/defaultOptions';
import trackViaTessen from '../src/utils/page-tracking/tessen';

const onRouteUpdate = ({ location, prevLocation }, themeOptions) => {
  const { env, tessen: tessenConfig } = withDefaults(themeOptions);

  trackViaTessen({ location, prevLocation }, tessenConfig, env);
};

export default onRouteUpdate;
