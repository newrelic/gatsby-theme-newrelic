import trackViaTessen from '../src/utils/page-tracking/tessen';
import getLocale from '../src/utils/getLocale';

const onRouteUpdate = ({ location, prevLocation }, themeOptions) => {
  trackViaTessen({ location, prevLocation }, themeOptions);

  if (themeOptions.newrelic && window.newrelic) {
    const { i18n } = themeOptions;
    const locale = getLocale(location, i18n);

    if (locale !== getLocale(prevLocation, i18n)) {
      window.newrelic.setCustomAttribute('locale', locale);
    }
  }
};

export default onRouteUpdate;
