import React from 'react';

const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  replaceHeadComponents([
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
    <script
      key="tessen"
      type="text/javascript"
      src="/tessen.min-1.3.0.js"
      async=""
    />,
  ]);
};

export default onPreRenderHTML;
