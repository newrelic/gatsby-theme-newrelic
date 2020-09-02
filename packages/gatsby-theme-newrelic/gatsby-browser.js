import React from 'react';
import SplitIOProvider from './src/components/SplitIOProvider';
import getSplitConfig from './src/utils/getSplitConfig';

export { default as wrapPageElement } from './gatsby/wrap-page-element';

export const wrapRootElement = ({ element }, pluginOptions) => {
  return pluginOptions.splitio ? (
    <SplitIOProvider config={getSplitConfig(pluginOptions)}>
      {element}
    </SplitIOProvider>
  ) : (
    element
  );
};
