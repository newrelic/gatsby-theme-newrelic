import React from 'react';
import LayoutContext from './src/components/LayoutContext';
import SplitIOProvider from './src/components/SplitIOProvider';
import getSplitConfig from './src/utils/getSplitConfig';

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

export { default as onClientEntry } from './gatsby/on-client-entry';
export { default as onRouteUpdate } from './gatsby/on-route-update';
export { default as wrapPageElement } from './gatsby/wrap-page-element';
