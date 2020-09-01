import React from 'react';
import { SplitFactory } from '@splitsoftware/splitio-react';

const wrapRootElement = ({ element }, pluginOptions) => {
  const { splitio } = pluginOptions;

  return splitio ? (
    <SplitFactory updateOnSdkUpdate config={splitio}>
      {element}
    </SplitFactory>
  ) : (
    element
  );
};

export default wrapRootElement;
