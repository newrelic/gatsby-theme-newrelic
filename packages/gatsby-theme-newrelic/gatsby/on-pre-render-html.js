import React from 'react';
import path from 'path';
import { withPrefix } from 'gatsby';
import { getTessenConfig } from '../src/utils/config';
import { getTessenPath } from './constants';

const onPreRenderHTML = (
  { getHeadComponents, replaceHeadComponents },
  themeOptions
) => {
  const tessen = getTessenConfig(themeOptions);

  const version = tessen ? tessen.tessenVersion : null;

  const tessenPath = withPrefix(path.basename(getTessenPath(version)));

  replaceHeadComponents(
    [
      process.env.ENVIRONMENT === 'development' && (
        <script src="https://cmp.osano.com/AzZVWOTJtg1WY32RK/cd381ba3-ebca-488c-a528-376a86764609/osano.js?variant=one" />
      ),
      ...getHeadComponents(),
      <link
        key="open-sans"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
      />,
      themeOptions.tessen && (
        <script key="tessen" type="text/javascript" src={tessenPath} />
      ),
    ].filter(Boolean)
  );
};

export default onPreRenderHTML;
