import React from 'react';
import SplitIOProvider from '../src/components/SplitIOProvider';

const wrapRootElement = ({ element }, pluginOptions) => {
  const { splitio } = pluginOptions;

  return splitio ? (
    <SplitIOProvider config={splitio}>{element}</SplitIOProvider>
  ) : (
    element
  );
};

export default wrapRootElement;
