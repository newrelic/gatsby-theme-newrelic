import { AnalyticsBrowser } from '@segment/analytics-next';
import warning from 'warning';
import { getResolvedEnv, getSegmentConfig } from '../config';
import Cookies from 'js-cookie';
import { DEV_SEGMENT_WRITE_KEY } from '../constants';

const warnAboutNoop = (section, platform) => {
  warning(
    section && platform,
    "You have enabled page view tracking, but do not have page view tracking configured. This route change has not been tracked. Please configure the 'segment.section' and 'segment.platform' options in gatsby-config.js"
  );
};

const trackPageView = ({ config, env, location, prevLocation, analytics }) => {
  const { section, platform } = config;
  const getCookie = (key) => Cookies.get(key)?.replace(/%22/g, '') || null;
  const customer_user_id = getCookie('ajs_user_id');
  const anonymousId = getCookie('ajs_anonymous_id');

  if (!canSendPageView(config)) {
    return warnAboutNoop(section, platform);
  }

  analytics.page(`${section}_pages page_viewed`, {
    event_type: 'page_view',
    path: location.pathname,
    referrer: prevLocation?.href,
    section: `${section}_site`,
    platform,
    meta_data: {
      env: env || 'development',
      customer_user_id,
      anonymousId,
    },
  });
};

const canSendPageView = (config) => config.section && config.platform;

const getNRVisitedCookie = () => {
  const cookieName = 'nr_pn_visited';
  // Check if the cookie is already set
  const existingCookie = Cookies.get(cookieName);

  if (existingCookie) {
    return existingCookie;
  } else {
    // If not set, set the cookie with the current Unix epoch time
    const currentUnixEpoch = Math.floor(Date.now() / 1000); // Convert milliseconds to seconds
    Cookies.set(cookieName, currentUnixEpoch, {
      expires: 365, // Set cookie to expire in 1 year
      domain: '.newrelic.com', // Set the domain to .newrelic.com
      path: '/', // Set the path to /
      sameSite: 'Lax', // Set the SameSite attribute to Lax
    });
    return currentUnixEpoch;
  }
};

const trackViaSegment = ({ location, prevLocation }, themeOptions) => {
  const env = getResolvedEnv(themeOptions);
  const segmentConfig = getSegmentConfig(themeOptions);

  const sendDataToSegment = () => {
    const analytics = AnalyticsBrowser.load({
      writeKey:
        env === 'production' || env === 'prod'
          ? segmentConfig.segmentWriteKey
          : DEV_SEGMENT_WRITE_KEY,
    });
    if (!segmentConfig) {
      return;
    }
    // wrap inside a timeout to make sure react-helmet is done with its changes (https://github.com/gatsbyjs/gatsby/issues/11592)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        trackPageView({
          config: segmentConfig,
          env,
          location,
          prevLocation,
          analytics,
        });
      });
    });
  };

  // get nr_pn_visited cookie. If it doesn't exist, set it
  const visitedTimestamp = getNRVisitedCookie();
  const userCountry =
    typeof window !== 'undefined' && window.userCountry !== 'undefined'
      ? window.userCountry
      : null;
  window.gatsbyUserCountry = userCountry;

  if (userCountry === 'US') {
    const delay = 30; // delay of 30 seconds before tracking cookies

    if (
      visitedTimestamp &&
      Math.round(Date.now() / 1000) - visitedTimestamp > delay
    ) {
      sendDataToSegment();
    } else {
      // Schedule sending data to Segment after the delay
      const remainingDelay =
        delay - (Math.round(Date.now() / 1000) - visitedTimestamp);
      setTimeout(() => {
        sendDataToSegment();
      }, remainingDelay * 1000); // Convert seconds to milliseconds
    }
  } else {
    sendDataToSegment();
  }
};

export default trackViaSegment;
