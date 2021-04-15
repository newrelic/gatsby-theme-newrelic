import { canTrack } from '../tracking';
import { getGtmConfig } from '../config';

const trackViaGoogle = (themeOptions) => {
  if (canTrack()) {
    return;
  }
  const googleTagManager = getGtmConfig(themeOptions);

  // wrap inside a timeout to make sure react-helmet is done with its changes (https://github.com/gatsbyjs/gatsby/issues/11592)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (window.gtag) {
        window.gtag(
          'config',
          googleTagManager.trackingId,
          googleTagManager.options
        );
      }
    });
  });
};

export default trackViaGoogle;
