import trackViaSegment from '../src/utils/page-tracking/segment';
import getLocale from './utils/getLocale';

const onRouteUpdate = ({ location, prevLocation }, themeOptions) => {
  trackViaSegment({ location, prevLocation }, themeOptions);

  if (window.newrelic) {
    const locale = getLocale({ location }, themeOptions);

    if (
      prevLocation &&
      locale !== getLocale({ location: prevLocation }, themeOptions)
    ) {
      window.newrelic.setCustomAttribute('locale', locale);
    }
  }
};

export default onRouteUpdate;
