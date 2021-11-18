import warning from 'warning';
import Cookies from 'js-cookie';
import { CAMEL_CASE, TITLE_CASE } from './constants';

const warnCamelCase = (action) => {
  return warning(
    false,
    `tessen.${action}: The '${
      action === 'page' ? 'name' : 'eventName'
    }' argument needs to be in camelCase. This has resulted in a noop.`
  );
};

const warnTitleCase = (action) => {
  return warning(
    false,
    `tessen.${action}: The 'category' argument needs to be in TitleCase. This has resulted in a noop.`
  );
};

const warnWindowTessen = (action) => {
  return warning(
    false,
    `tessen.${action}: You are attempting to use a Tessen action, but Tessen is not available on 'window'. Calls to '${action}' will result in a noop.`
  );
};

const warnAboutNoop = ({ config, action, name, eventName, category }) => {
  warning(
    config,
    `tessen.${action}: You are attempting to use a Tessen action, but do not have Tessen enabled. Calls to '${action}' will result in a noop. Please configure Tessen to track Tessen actions.`
  );

  warning(
    config?.product && config?.subproduct,
    `tessen.${action}: You are attempting to use a Tessen action, but Tessen is misconfigured. Calls to '${action}' will result in a noop. Please configure both the 'tessen.product' and 'tessen.subproduct' option in gatsby-config.js`
  );

  action === 'page' &&
    warning(
      name,
      `tessen.${action}: The 'name' argument is not defined. This has resulted in a noop. Please provide a 'name' argument.`
    );
  action === 'track' &&
    warning(
      eventName,
      `tessen.${action}: The 'eventName' argument is not defined. This has resulted in a noop. Please provide a 'name' argument.`
    );
  warning(
    category,
    `tessen.${action}: The 'category' argument is not defined. This has resulted in a noop. Please provide a 'category' argument.`
  );
};

const canSendPage = ({ config, name, category }) =>
  name && category && config && config.product && config.subproduct;
const canSendTrack = ({ config, eventName, category }) =>
  eventName && category && config && config.product && config.subproduct;

const tessenTrack =
  (action, config) =>
  ({ eventName, category, ...properties }) => {
    if (!canSendTrack({ config, eventName, category })) {
      return warnAboutNoop({ config, action, eventName, category });
    }

    if (!CAMEL_CASE.test(eventName)) {
      return warnCamelCase(action);
    }

    if (!TITLE_CASE.test(category)) {
      return warnTitleCase(action);
    }

    if (!window.Tessen) {
      return warnWindowTessen(action);
    }

    const customerId = JSON.parse(Cookies.get('ajs_user_id') || 'null');
    const anonymousId = JSON.parse(Cookies.get('ajs_anonymous_id') || 'null');

    window.Tessen.track(
      eventName,
      {
        ...properties,
        env: config.env || '',
        category,
        nr_product: config.product,
        nr_subproduct: config.subproduct,
        location: 'public',
        customer_user_id: customerId,
        anonymousId,
      },
      {
        Segment: {
          integrations: {
            All: true,
          },
        },
      }
    );
  };
const tessenPage =
  (action, config) =>
  (name, category, properties = {}) => {
    if (!canSendPage({ config, name, category })) {
      return warnAboutNoop({ config, action, name, category });
    }

    if (!CAMEL_CASE.test(name)) {
      return warnCamelCase(action);
    }

    if (!TITLE_CASE.test(category)) {
      return warnTitleCase(action);
    }

    if (!window.Tessen) {
      return warnWindowTessen(action);
    }

    const customerId = JSON.parse(Cookies.get('ajs_user_id') || 'null');
    const anonymousId = JSON.parse(Cookies.get('ajs_anonymous_id') || 'null');

    window.Tessen.page(
      name,
      {
        ...properties,
        env: config.env || '',
        category,
        nr_product: config.product,
        nr_subproduct: config.subproduct,
        location: 'public',
        customer_user_id: customerId,
        anonymousId,
      },
      {
        Segment: {
          integrations: {
            All: true,
          },
        },
      }
    );
  };

const createTessen = (config) => ({
  page: tessenPage('page', config),
  track: tessenTrack('track', config),
});

export default createTessen;
