import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { useLoggedIn } from '../hooks/useLoggedIn';

/**
 * Don't use this directly!
 * Use the `useLoggedIn` hook instead,
 * optionally with `LoggedInProvider`.
 */
export const LoggedInContext = createContext(null);

/**
 * Handles calling `useLoggedIn` and passing
 * the resulting value down through the Context API.
 * If you have multiple components that might need the user's logged in state,
 * wrap them with `LoggedInProvider` to avoid multiple calls to NerdGraph.
 *
 * @example
 * ```jsx
 *   const App = () => (
 *     <LoggedInProvider>
 *       <INeedToKnowIfTheUserIsLoggedIn />
 *       <MeToo />
 *       <MeThree />
 *     </LoggedInProvider>
 *   )
 *
 *   const MeToo = () => {
 *     // These values will come from the provider,
 *     // so the call isn't duplicated between components.
 *     const { loading, loggedIn } = useLoggedIn()
 *
 *     return <div>{loggedIn.toString()}</div>
 *   }
 * ```
 */
export const LoggedInProvider = ({ children }) => {
  const { loading, loggedIn } = useLoggedIn();

  return (
    <LoggedInContext.Provider value={{ loading, loggedIn }}>
      {children}
    </LoggedInContext.Provider>
  );
};

LoggedInProvider.propTypes = {
  children: PropTypes.node,
};
