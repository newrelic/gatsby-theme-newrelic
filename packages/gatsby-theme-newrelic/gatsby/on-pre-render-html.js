import React from 'react';

const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  replaceHeadComponents([
    ...getHeadComponents(),
    <link
      key="open-sans"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
    />,
    <link
      key="typekit"
      rel="stylesheet"
      href="https://use.typekit.net/pnb6qnj.css"
    />,
    <link
      key="ovo"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Ovo&display=swap"
    />,
  ]);
};

export default onPreRenderHTML;
