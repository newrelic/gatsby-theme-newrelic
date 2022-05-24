import React from 'react';
import path from 'path';
import { withPrefix } from 'gatsby';
import { getTessenConfig } from '../src/utils/config';
import { getTessenPath } from './constants';
import OneTrust from '../src/components/OneTrust';

const onPreRenderHTML = (
  { getHeadComponents, replaceHeadComponents },
  themeOptions
) => {
  const tessen = getTessenConfig(themeOptions);
  const { oneTrustID } = themeOptions;

  const version = tessen ? tessen.tessenVersion : null;

  const tessenPath = withPrefix(path.basename(getTessenPath(version)));

  replaceHeadComponents(
    [
      <OneTrust key="one-trust" id={oneTrustID} />,
      ...getHeadComponents(),
      <link
        key="open-sans"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
      />,
      themeOptions.tessen && (
        <script key="tessen" type="text/javascript" src={tessenPath} />
      ),
      themeOptions.signup.reCaptchaToken && (
        <script
          key="google-recaptcha"
          async
          defer
          src={`https://www.google.com/recaptcha/api.js?render=${themeOptions.signup.reCaptchaToken}`}
        />
      ),
    ].filter(Boolean)
  );
};

export default onPreRenderHTML;
