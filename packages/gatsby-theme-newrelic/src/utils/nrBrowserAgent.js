import warning from 'warning';
import Cookies from 'js-cookie';
import { CAMEL_CASE, TITLE_CASE } from './constants';
import {
  checkIfUserLoggedIn,
  getSavedStatus as getSavedLoggedInStatus,
} from '../hooks/useLoggedIn';
import { getResolvedEnv } from './config';

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

const warnAboutNoop = ({ action, name, category }) => {
  warning(
    name,
    `nrBrowserAgent.${action}: The 'name' argument is not defined. This has resulted in a noop. Please provide a 'name' argument.`
  );

  warning(
    category,
    `nrBrowserAgent.${category}: The 'category' argument is not defined. This has resulted in a noop. Please provide a 'category' argument.`
  );
};

const canSendAction = ({ name, category }) => name && category;

const nrBrowserAction =
  (action) =>
  async ({ eventName, category, ...properties }) => {
    if (!canSendAction({ name: eventName, category })) {
      return warnAboutNoop({ action, name: eventName, category });
    }

    // The substring method is to limit the regex input length per CodeQL
    if (!CAMEL_CASE.test(eventName.toString().substring(0, 100))) {
      return warning(
        CAMEL_CASE.test(eventName.toString().substring(0, 100)),
        `nrBrowserAgent.${action}: The 'name' argument needs to be in camelCase. This has resulted in a noop.`
      );
    }

    if (!TITLE_CASE.test(category.toString().substring(0, 100))) {
      return warning(
        TITLE_CASE.test(category.toString().substring(0, 100)),
        `nrBrowserAgent.${action}: The 'category' argument needs to be in TitleCase. This has resulted in a noop.`
      );
    }

    if (!window.newrelic) {
      return warning(
        false,
        `nrBrowserAgent.${eventName}: You are attempting to use a New Relic Browser Agent action, but newrelic is not available on 'window'. Calls to '${eventName}' will result in a noop.`
      );
    }

    const customerId = getCookie('ajs_user_id');
    const anonymousId = getCookie('ajs_anonymous_id');
    properties.env = getResolvedEnv({});

    // if a site doesn't configure this in the theme options,
    // we don't make the call to NerdGraph and we don't send
    // a `loggedIn` field with the request.
    if (window.newRelicRequestingServicesHeader) {
      const loggedIn =
        getSavedLoggedInStatus() ?? (await checkIfUserLoggedIn());
      // i don't like mutating this object, but it's the least ugly way
      // to conditionally add this property.
      properties.loggedIn = loggedIn;
    }

    window.newrelic[action](eventName, {
      ...properties,
      category,
      customer_user_id: customerId,
      anonymousId,
    });
  };

export const addPageAction = nrBrowserAction('addPageAction');
