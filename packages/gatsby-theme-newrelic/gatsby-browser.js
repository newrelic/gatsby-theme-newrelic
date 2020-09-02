import React from 'react';
import wrapPageElement from './gatsby/wrap-page-element';
import SplitIOProvider from './src/components/SplitIOProvider';
import getSplitConfig from './src/utils/getSplitConfig';

export const wrapRootElement = ({ element }, pluginOptions) => {
  return pluginOptions.splitio ? (
    <SplitIOProvider config={getSplitConfig(pluginOptions)}>
      {element}
    </SplitIOProvider>
  ) : (
    element
  );
};

export { wrapPageElement };
