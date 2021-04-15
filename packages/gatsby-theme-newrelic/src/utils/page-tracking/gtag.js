import { canTrack } from '../tracking';
import { getGtmConfig } from '../config';

const trackViaGoogle = ({ location }, themeOptions) => {
  if (canTrack()) {
    return;
  }
  const googleTagManager = getGtmConfig(themeOptions);

  // wrap inside a timeout to make sure react-helmet is done with its changes (https://github.com/gatsbyjs/gatsby/issues/11592)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const options = {
        page_path: location.pathname,
        ...googleTagManager.options,
      };
      if (window.gtag) {
        window.gtag('config', googleTagManager.trackingId, options);
      }
    });
  });
};

export default trackViaGoogle;
