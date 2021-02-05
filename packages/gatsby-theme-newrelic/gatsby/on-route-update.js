import { withDefaults } from '../src/utils/defaultOptions';
import createTessen from '../src/utils/createTessen';
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

const onRouteUpdate = ({ location }, themeOptions) => {
  const { env, tessen: tessenConfig } = withDefaults(themeOptions);

  if (!tessenConfig || !tessenConfig.trackPageViews) {
    return;
  }

  const { pageView } = tessenConfig;
  const tessen = createTessen(tessenConfig);

  if (!canSendPageView(pageView)) {
    return warnAboutNoop(pageView);
  }

  const { name, category, getProperties } = pageView;

  requestAnimationFrame(() => {
    tessen.page(
      name,
      category,
      getProperties && getProperties({ location, env })
    );
  });
};

export default onRouteUpdate;
