import React from 'react';
import SplitIOProvider from '../src/components/SplitIOProvider';
import getSplitConfig from '../src/utils/getSplitConfig';
import LayoutContext from '../src/components/LayoutContext';

const wrapRootElement = ({ element }, pluginOptions) => {
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

export default wrapRootElement;
