import trackViaTessen from '../src/utils/page-tracking/tessen';
import getLocale from '../src/utils/getLocale';

const onRouteUpdate = ({ location, prevLocation }, themeOptions) => {
  trackViaTessen({ location, prevLocation }, themeOptions);

  if (window.newrelic) {
    const locale = getLocale(location, themeOptions);

    if (locale !== getLocale(prevLocation, themeOptions)) {
      window.newrelic.setCustomAttribute('locale', locale);
    }
  }
};

export default onRouteUpdate;
