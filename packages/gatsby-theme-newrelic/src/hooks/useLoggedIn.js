import { useContext, useEffect, useState } from 'react';
import { LoggedInContext } from '../components/LoggedInContext';

const SAVED_STATUS_KEY = 'gatsby-theme-newrelic/logged-in-status';
const NERDGRAPH_URL = 'https://nerd-graph.service.newrelic.com/graphql';

/**
 * Asynchronously checks whether the current user is logged in.
 * Returns an object with `loading` and `loggedIn` properties.
 * If `newRelicRequestingServicesHeader` isn't configured in the theme options,
 * the hook skips the call to NerdGraph and `loggedIn` will always be null.
 *
 * If you have multiple components which need the user's logged in state,
 * wrap them with `LoggedInProvider` to avoid making duplicate checks.
 *
 * @example
 * ```jsx
 * const MyComponent = () => {
 *   const { loading, loggedIn } = useLoggedIn('io-website')
 *
 *   if (loading) return <div>loading...</div>
 *   if (loggedIn) return <div>hey old friend!</div>
 *   return <div>hey new friend!</div>
 * }
 * ```
 */
export const useLoggedIn = () => {
  const savedStatus = getSavedStatus();
  // if `context` is null, we don't have `LoggedInProvider` as
  // an ancestor, so we'll have to make the call ourself.
  const context = useContext(LoggedInContext);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(savedStatus);
  const hasNRRSHeader =
    typeof window !== 'undefined' &&
    typeof window.newRelicRequestingServicesHeader !== 'string';
  const skipCall = context != null || savedStatus != null || hasNRRSHeader;

  useEffect(() => {
    if (skipCall) return;

    setLoading(true);
    checkIfUserLoggedIn()
      .then((isLoggedIn) => {
        setSavedStatus(isLoggedIn);
        return isLoggedIn;
      })
      .then(setLoggedIn)
      .finally(() => {
        setLoading(false);
      });
  }, [skipCall]);

  if (context != null) return context;
  return { loading, loggedIn };
};

/**
 * Makes a call to NerdGraph and returns whether the user
 * is logged in via the NR cookie hitting Service Gateway.
 *
 * @returns {Promise<Boolean>}
 */
export const checkIfUserLoggedIn = () =>
  fetch(NERDGRAPH_URL, {
    method: 'POST',
    credentials: 'include',
    redirect: 'error',
    headers: {
      'Content-Type': 'application/json',
      'NewRelic-Requesting-Services': window.newRelicRequestingServicesHeader,
    },
    body: JSON.stringify({
      query: `{
        actor {
          user {
            name
          }
        }
      }`,
    }),
  })
    .then((res) => res.ok)
    .catch(() => false);

/**
 * Check `sessionStorage` to see if we've cached the user's logged in status.
 *
 * @returns {Boolean | null} A boolean if the key is set, otherwise returns null.
 */
export const getSavedStatus = () => {
  if (typeof window === 'undefined') return null;
  const status = window.sessionStorage.getItem(SAVED_STATUS_KEY);
  if (status != null) return status === 'true';
  return null;
};

/**
 * Cache the user's logged in status in `sessionStorage`.
 */
const setSavedStatus = (isLoggedIn) => {
  if (typeof window === 'undefined') return;
  // `setItem` can fail and throw an exception,
  // like if the user has storage disabled or the site has surpassed its quota.
  try {
    window.sessionStorage.setItem(SAVED_STATUS_KEY, isLoggedIn);
  } catch (err) {
    // ESLint complains if i leave this block empty.
    // but it also complains if i put an empty return here 🙃.
  }
};
