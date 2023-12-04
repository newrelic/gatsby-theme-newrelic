import createTessen from '../createTessen';
import warning from 'warning';
import { getResolvedEnv, getTessenConfig } from '../config';
import { DEV_SEGMENT_WRITE_KEY } from '../constants';

let initialized = false;

const warnAboutNoop = (pageView) => {
  warning(
    pageView,
    "You have enabled page view tracking, but do not have page view tracking configured. This route change has not been tracked. Please configure the 'tessen.pageView' option in gatsby-config.js"
  );

  warning(
    pageView.eventName && pageView.category,
    "You have enabled page view tracking, but page view tracking is misconfigured. This route change has not been tracked. Please configure the 'tessen.pageView.eventName' and 'tessen.pageView.category' options in gatsby-config.js"
  );
};

const canSendPageView = (pageView) =>
  pageView && pageView.eventName && pageView.category;

const trackViaTessen = ({ location, prevLocation }, themeOptions) => {
  const env = getResolvedEnv(themeOptions);
  const tessenConfig = getTessenConfig(themeOptions);

  if (!tessenConfig || !tessenConfig.trackPageViews) {
    return;
  }

  window.initializeTessenTracking = initializeTessenTracking({
    config: tessenConfig,
    env,
    location,
    prevLocation,
  });

  window.initializeTessenTracking();

  // wrap inside a timeout to make sure react-helmet is done with its changes (https://github.com/gatsbyjs/gatsby/issues/11592)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      trackPageView({ config: tessenConfig, env, location, prevLocation });
    });
  });
};

const trackPageView = ({ config, env, location, prevLocation }) => {
  const { pageView } = config;
  config.env = env;
  const { eventName, category, ...properties } = pageView;

  const tessen = createTessen(config);

  if (!canSendPageView(pageView)) {
    return warnAboutNoop(pageView);
  }

  tessen.page({
    eventName,
    category,
    env: env || 'development',
    nonInteraction: 1,
    path: location.pathname,
    referrer: prevLocation?.href,
    ...properties,
  });
};

const initializeTessenTracking =
  ({ config, env, location, prevLocation }) =>
  (options = {}) => {
    if (window.Tessen && !initialized) {
      initialized = true;
      const { segmentWriteKey } = config;
      window.Tessen.load(['Segment', 'NewRelic'], {
        Segment: {
          identifiable: true,
          writeKey:
            env === 'production' || env === 'prod'
              ? segmentWriteKey
              : DEV_SEGMENT_WRITE_KEY,
          useAmplitudeSessions: true,
        },
      });

      window.Tessen.identify({});

      options.trackPageView &&
        trackPageView({ config, env, location, prevLocation });
    }
  };

export default trackViaTessen;
