import { canTrack } from '../tracking';
import warning from 'warning';
import { getGtmConfig } from '../config';

let initialized = false;

const warnAboutNoop = (config) => {
  warning(
    config,
    "You have enabled Google Tag Manager tracking, but do not have it configured. This route change has not been tracked. Please configure the 'googleTagManager' option in gatsby-config.js"
  );
  warning(
    config.src && config.trackingId,
    "You have enabled Google Tag Manager, but it is misconfigured. This route change has not been tracked. Please configure the 'googleTagManger.src' and 'googleTagManger.trackingId' options in gatsby-config.js"
  );
};

const canSendPageView = (config) => config && config.src && config.trackingId;

const sendPageview = ({ location }, themeOptions) => {
  // wrap inside a timeout to make sure react-helmet is done with its changes (https://github.com/gatsbyjs/gatsby/issues/11592)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const gtmConfig = getGtmConfig(themeOptions);

      if (!canSendPageView(gtmConfig)) {
        return warnAboutNoop(gtmConfig);
      }

      const options = {
        page_path: location.pathname,
        ...gtmConfig.options,
      };
      if (window.gtag) {
        window.gtag('config', gtmConfig.trackingId, options);
      }
    });
  });
};

const disableGtag = (trackingId) => (window[`ga-disable-${trackingId}`] = true);

const enableGtag = (trackingId) => (window[`ga-disable-${trackingId}`] = false);

const trackViaGoogle = ({ location }, themeOptions) => {
  const gtmConfig = getGtmConfig(themeOptions);

  if (!gtmConfig) {
    return;
  }

  switch (true) {
    case initialized && canTrack():
      initialized = false;
      disableGtag(gtmConfig.trackingId);
      return;

    case !initialized && !canTrack():
      initialized = true;
      enableGtag(gtmConfig.trackingId);
      window.gtag('js', new Date());
      window.gtag('consent', 'default', { ad_storage: 'denied' });
      sendPageview({ location }, themeOptions);
      return;

    case initialized && !canTrack():
      sendPageview({ location }, themeOptions);
      return;

    default:
      return;
  }
};

export default trackViaGoogle;
