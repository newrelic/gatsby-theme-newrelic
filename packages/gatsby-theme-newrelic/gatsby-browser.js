import React from 'react';
import LayoutContext from './src/components/LayoutContext';
import SplitIOProvider from './src/components/SplitIOProvider';
import getSplitConfig from './src/utils/getSplitConfig';
import getLocale from './src/utils/getLocale';

export const wrapRootElement = ({ element }, pluginOptions) => {
  return (
    <LayoutContext.Provider value={pluginOptions.layout}>
      {pluginOptions.splitio ? (
        <SplitIOProvider config={getSplitConfig(pluginOptions)}>
          {element}
        </SplitIOProvider>
      ) : (
        element
      )}
    </LayoutContext.Provider>
  );
};

export const onClientEntry = (_, { newrelic, i18n }) => {
  if (newrelic && window.newrelic) {
    const mode = isDarkMode() ? 'dark' : 'light';
    const locale = getLocale(i18n, window.location);

    window.newrelic.setCustomAttribute('mode', mode);
    window.newrelic.setCustomAttribute('locale', locale);
  }
};

const isDarkMode = () => {
  const localStorageTheme = localStorage.getItem('darkMode');

  if (localStorageTheme) {
    return JSON.parse(localeStorageTheme);
  }

  return document.body.classList.contains('dark-mode');
};

export { default as onRouteUpdate } from './gatsby/on-route-update';
export { default as wrapPageElement } from './gatsby/wrap-page-element';
