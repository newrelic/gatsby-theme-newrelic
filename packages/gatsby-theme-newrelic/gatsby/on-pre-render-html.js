import React from 'react';
import path from 'path';
import { TESSEN_PATH, GA_PROPERTY_ID, GTAG_SRC } from './constants';

const gtagScript = (
  <script async key="nr-gtag" src={`${GTAG_SRC}?id=${GA_PROPERTY_ID}`} />
);

const scriptStr = `
var options = {
  send_page_view: false,
  anonymize_ip: true
};
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_PROPERTY_ID}', options);
`;

const googleTrackScript = (
  <script
    key="nr-gtag-inline-script"
    dangerouslySetInnerHTML={{ __html: scriptStr }}
  />
);

const onPreRenderHTML = (
  { getHeadComponents, replaceHeadComponents },
  themeOptions
) => {
  replaceHeadComponents(
    [
      ...getHeadComponents(),
      <link
        key="open-sans"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
      />,
      <script
        key="bizible"
        type="text/javascript"
        src="//cdn.bizible.com/scripts/bizible.js"
        async=""
      />,
      themeOptions.tessen && (
        <script
          key="tessen"
          type="text/javascript"
          src={`/${path.basename(TESSEN_PATH)}`}
        />
      ),
      themeOptions.googleTagManager && gtagScript,
      themeOptions.googleTagManager && googleTrackScript,
    ].filter(Boolean)
  );
};

export default onPreRenderHTML;
