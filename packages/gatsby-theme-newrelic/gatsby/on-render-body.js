import React from 'react';
import TessenHydrationScriptTag from './tessen-hyration-script-tag';
import { withDefaults } from '../src/utils/defaultOptions';

const onRenderBody = ({ setPostBodyComponents }, themeOptions) => {
  const { tessen } = withDefaults(themeOptions);

  if (tessen) {
    setPostBodyComponents([
      <TessenHydrationScriptTag
        key="@newrelic/gatsby-plugin-newrelic:tessen"
        tessenOptions={tessen}
      />,
    ]);
  }
};

export default onRenderBody;
