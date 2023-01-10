import { useContext, useEffect, useState } from 'react';
import { LoggedInContext } from '../components/LoggedInContext';

const NERDGRAPH_URL = 'https://nerd-graph.service.newrelic.com/graphql';

/**
 * Asynchronously checks whether the current user is logged in.
 * Returns an object with `loading` and `loggedIn` properties.
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
 *
 * @param {string} serviceName
 */
export const useLoggedIn = (serviceName) => {
  // if `context` is null, we don't have `LoggedInProvider` as
  // an ancestor, so we'll have to make the call ourself.
  const context = useContext(LoggedInContext);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (context != null) return;

    setLoading(true);
    checkIfUserLoggedIn(serviceName)
      .then(setLoggedIn)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (context != null) return context;
  return { loading, loggedIn };
};

/**
 * Makes a call to NerdGraph and returns whether the user
 * is logged in via the NR cookie hitting Service Gateway.
 *
 * @returns {Promise<Boolean>}
 */
const checkIfUserLoggedIn = (serviceName) =>
  fetch(NERDGRAPH_URL, {
    method: 'POST',
    credentials: 'include',
    redirect: 'error',
    headers: {
      'Content-Type': 'application/json',
      'NewRelic-Requesting-Services': serviceName,
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
