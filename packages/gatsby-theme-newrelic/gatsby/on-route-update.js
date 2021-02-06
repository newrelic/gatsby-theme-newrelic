import trackViaTessen from '../src/utils/page-tracking/tessen';

const onRouteUpdate = ({ location, prevLocation }, themeOptions) => {
  trackViaTessen({ location, prevLocation }, themeOptions);
};

export default onRouteUpdate;
