import Cookies from 'js-cookie';

import trackViaSegment from '../src/utils/page-tracking/segment';
import getLocale from './utils/getLocale';
import {
  checkIfUserLoggedIn,
  getSavedStatus as getSavedLoggedInStatus,
} from '../src/hooks/useLoggedIn';

const onRouteUpdate = ({ location, prevLocation }, themeOptions) => {
  trackViaSegment({ location, prevLocation }, themeOptions);
  const getCookie = (key) => Cookies.get(key)?.replace(/%22/g, '') || null;
  const loggedIn = getSavedLoggedInStatus() ?? checkIfUserLoggedIn();

  const customer_user_id = getCookie('ajs_user_id');

  if (window.newrelic) {
    const locale = getLocale({ location }, themeOptions);

    if (
      prevLocation &&
      locale !== getLocale({ location: prevLocation }, themeOptions)
    ) {
      window.newrelic.setCustomAttribute('locale', locale);

      // third param: persist = true - maintains the attribute value through the whole session
    }
    window.newrelic.setCustomAttribute('loggedIn', loggedIn, true);
    window.newrelic.setCustomAttribute(
      'customer_user_id',
      customer_user_id,
      true
    );
  }
};

export default onRouteUpdate;
