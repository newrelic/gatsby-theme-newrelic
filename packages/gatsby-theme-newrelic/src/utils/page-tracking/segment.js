import { AnalyticsBrowser } from '@segment/analytics-next';
import warning from 'warning';
import { getResolvedEnv, getSegmentConfig } from '../config';
import Cookies from 'js-cookie';

// const analytics = AnalyticsBrowser.load({ writeKey: DEV_SEGMENT_WRITE_KEY });
const getCookie = (key) => Cookies.get(key)?.replace(/%22/g, '') || null;
const customer_user_id = getCookie('ajs_user_id');
// const anonymousId = analytics.user().anonymousId();

// analytics.identify({}); ??????

const warnAboutNoop = (category) => {
  warning(
    category,
    "You have enabled page view tracking, but do not have page view tracking configured. This route change has not been tracked. Please configure the 'segment.category' option in gatsby-config.js"
  );
};

const trackPageView = ({ config, env, location, prevLocation }) => {
  const { category } = config;

  if (!category) {
    return warnAboutNoop(category);
  }

  //   analytics.page(`${category} page_viewed`, {
  //     event_type: 'page_view',
  //     page_name: 'Title of page',
  //     path: location.pathname,
  //     referrer: prevLocation?.href,
  //     section: 'docs_site',
  //     meta_data: {
  //       env: env || 'development',
  //       customer_user_id,
  //       anonymousId,
  //     },
  //   });
  // };

  console.log('PAGE_VIEW', `${category} page_viewed`, {
    event_type: 'page_view',
    page_name: 'Title of page',
    path: location.pathname,
    referrer: prevLocation?.href,
    section: 'docs_site',
    meta_data: {
      env: env || 'development',
      customer_user_id,
    },
  });
};

// do we need anything like this?

// const initializeTessenTracking =
//   ({ config, env, location, prevLocation }) =>
//   (options = {}) => {
//     if (window.Tessen && !initialized) {
//       initialized = true;
//       const { segmentWriteKey } = config;
//       window.Tessen.load(['Segment', 'NewRelic'], {
//         Segment: {
//           identifiable: true,
//           writeKey:
//             env === 'production' || env === 'prod'
//               ? segmentWriteKey
//               : DEV_SEGMENT_WRITE_KEY,
//           useAmplitudeSessions: true,
//         },
//       });

//       window.Tessen.identify({});

//       options.trackPageView &&
//         trackPageView({ config, env, location, prevLocation });
//     }
//   };

const trackViaSegment = ({ location, prevLocation }, themeOptions) => {
  const env = getResolvedEnv(themeOptions);
  const segmentConfig = getSegmentConfig(themeOptions);

  if (!segmentConfig) {
    return;
  }
  // wrap inside a timeout to make sure react-helmet is done with its changes (https://github.com/gatsbyjs/gatsby/issues/11592)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      trackPageView({ config: segmentConfig, env, location, prevLocation });
    });
  });
};

export default trackViaSegment;
