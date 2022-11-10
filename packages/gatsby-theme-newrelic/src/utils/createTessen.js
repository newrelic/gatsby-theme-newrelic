import warning from 'warning';
import Cookies from 'js-cookie';
import { CAMEL_CASE, TITLE_CASE } from './constants';

/**
 * Helper function to get string-based cookies given a specific key. This will
 * strip URL-encoded quotes (`%22`) if present.
 *
 * @example const id = getCookie('ajs_user_id'); // "12345"
 *
 * @param {string} key
 * @returns {string | null} The value of the cookie or `null`
 */
const getCookie = (key) => Cookies.get(key)?.replace(/%22/g, '') || null;

const warnAboutNoop = ({ config, action, name, category }) => {
  warning(
    config,
    `tessen.${action}: You are attempting to use a Tessen action, but do not have Tessen enabled. Calls to '${action}' will result in a noop. Please configure Tessen to track Tessen actions.`
  );

  warning(
    config?.product && config?.subproduct,
    `tessen.${action}: You are attempting to use a Tessen action, but Tessen is misconfigured. Calls to '${action}' will result in a noop. Please configure both the 'tessen.product' and 'tessen.subproduct' option in gatsby-config.js`
  );

  warning(
    name,
    `tessen.${action}: The 'name' argument is not defined. This has resulted in a noop. Please provide a 'name' argument.`
  );

  warning(
    category,
    `tessen.${action}: The 'category' argument is not defined. This has resulted in a noop. Please provide a 'category' argument.`
  );
};

const canSendAction = ({ config, name, category }) =>
  name && category && config && config.product && config.subproduct;

const tessenAction =
  (action, config) =>
  ({ eventName, category, ...properties }) => {
    if (!canSendAction({ config, name: eventName, category })) {
      return warnAboutNoop({ config, action, name: eventName, category });
    }

    if (!CAMEL_CASE.test(eventName)) {
      return warning(
        false,
        `tessen.${action}: The 'name' argument needs to be in camelCase. This has resulted in a noop.`
      );
    }

    if (!TITLE_CASE.test(category)) {
      return warning(
        TITLE_CASE.test(category),
        `tessen.${action}: The 'category' argument needs to be in TitleCase. This has resulted in a noop.`
      );
    }

    if (!window.Tessen) {
      return warning(
        false,
        `tessen.${eventName}: You are attempting to use a Tessen action, but Tessen is not available on 'window'. Calls to '${eventName}' will result in a noop.`
      );
    }

    const customerId = getCookie('ajs_user_id');
    const anonymousId = getCookie('ajs_anonymous_id');

    window.Tessen[action](
      eventName,
      {
        ...properties,
        env: config.env || '',
        category,
        nr_product: config.product,
        nr_subproduct: config.subproduct,
        location: 'Public',
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
  page: tessenAction('page', config),
  track: tessenAction('track', config),
});

export default createTessen;
