import React from 'react';
import path from 'path';
import OneTrust from '../src/components/OneTrust';
import { getGtmConfig, getTessenConfig } from '../src/utils/config';
import { getTessenPath } from './constants';

const onPreRenderHTML = (
  { getHeadComponents, replaceHeadComponents },
  themeOptions
) => {
  const googleTagManager = getGtmConfig(themeOptions);
  const tessen = getTessenConfig(themeOptions);

  const gtagScript = googleTagManager ? (
    <script
      async
      key="nr-gtag"
      src={`${googleTagManager.src}?id=${googleTagManager.trackingId}`}
    />
  ) : null;

  const scriptStr = `
    var options = {
      send_page_view: false,
      anonymize_ip: true
    };
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    `;

  const googleTrackScript = (
    <script
      key="nr-gtag-inline-script"
      dangerouslySetInnerHTML={{ __html: scriptStr }}
    />
  );

  const version = tessen ? tessen.tessenVersion : null;

  const tessenPath = `/${path.basename(getTessenPath(version))}`;

  replaceHeadComponents(
    [
      <OneTrust key="one-trust" id={themeOptions.oneTrustID} />,
      ...getHeadComponents(),
      <link
        key="open-sans"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
      />,
      themeOptions.tessen && (
        <script key="tessen" type="text/javascript" src={tessenPath} />
      ),
      themeOptions.googleTagManager && gtagScript,
      themeOptions.googleTagManager && googleTrackScript,
    ].filter(Boolean)
  );
};

export default onPreRenderHTML;
