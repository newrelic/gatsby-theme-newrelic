import createTessen from '../createTessen';
import warning from 'warning';

const warnAboutNoop = (pageView) => {
  warning(
    pageView,
    "You have enabled page view tracking, but do not have page view tracking configured. This route change has not been tracked. Please configure the 'tessen.pageView' option in gatsby-config.js"
  );

  warning(
    pageView.name && pageView.category,
    "You have enabled page view tracking, but page view tracking is misconfigured. This route change has not been tracked. Please configure the 'tessen.pageView.name' and 'tessen.pageView.category' options in gatsby-config.js"
  );
};

const canSendPageView = (pageView) =>
  pageView && pageView.name && pageView.category;

const trackViaTessen = ({ location }, tessenConfig, env) => {
  if (!tessenConfig || !tessenConfig.trackPageViews) {
    return;
  }

  const { pageView } = tessenConfig;
  const tessen = createTessen(tessenConfig);

  if (!canSendPageView(pageView)) {
    return warnAboutNoop(pageView);
  }

  const { name, category, getProperties } = pageView;

  // wrap inside a timeout to make sure react-helmet is done with its changes (https://github.com/gatsbyjs/gatsby/issues/11592)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      tessen.page(
        name,
        category,
        getProperties && getProperties({ location, env })
      );
    });
  });
};

export default trackViaTessen;
