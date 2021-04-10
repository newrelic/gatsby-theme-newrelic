import { canTrack } from '../tracking';
import { GA_PROPERTY_ID } from '../../../gatsby/constants';

const trackViaGoogle = () => {
  if (canTrack()) {
    return;
  }

  // wrap inside a timeout to make sure react-helmet is done with its changes (https://github.com/gatsbyjs/gatsby/issues/11592)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.gtag('config', GA_PROPERTY_ID, { anonymize_ip: true });
    });
  });
};

export default trackViaGoogle;
