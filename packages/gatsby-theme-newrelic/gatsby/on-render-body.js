import React from 'react';
import TessenHydrationScriptTag from './tessen-hyration-script-tag';
import getTessenConfig from '../src/utils/config/tessen';

const onRenderBody = ({ setPostBodyComponents }, themeOptions) => {
  const tessenConfig = getTessenConfig(themeOptions);

  if (tessenConfig) {
    setPostBodyComponents([
      <TessenHydrationScriptTag
        key="@newrelic/gatsby-plugin-newrelic:tessen"
        config={tessenConfig}
      />,
    ]);
  }
};

export default onRenderBody;
