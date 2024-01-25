import getLocale from './utils/getLocale';

const onRouteUpdate = ({ location, prevLocation }, themeOptions) => {
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
