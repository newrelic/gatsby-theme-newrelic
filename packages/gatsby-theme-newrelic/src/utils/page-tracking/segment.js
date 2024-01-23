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
  const anonymousId = analytics.instance?.user().anonymousId();

  if (!canSendPageView(config)) {
    return warnAboutNoop(section, platform);
  }

  analytics.page(`${platform} page_viewed`, {
    event_type: 'page_view',
    path: location.pathname,
    referrer: prevLocation?.href,
    section,
    platform,
    meta_data: {
      env: env || 'development',
      customer_user_id,
      anonymousId,
    },
  });
};

const canSendPageView = (config) => config.section && config.platform;

const trackViaSegment = ({ location, prevLocation }, themeOptions) => {
  const env = getResolvedEnv(themeOptions);
  const segmentConfig = getSegmentConfig(themeOptions);
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

export default trackViaSegment;
