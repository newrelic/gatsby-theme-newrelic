import React from 'react';
import LayoutContext from './src/components/LayoutContext';

export const wrapRootElement = ({ element }, pluginOptions) => {
  return (
    <LayoutContext.Provider value={pluginOptions.layout}>
      {element}
    </LayoutContext.Provider>
  );
};

export { default as onRenderBody } from './gatsby/on-render-body';
export { default as onPreRenderHTML } from './gatsby/on-pre-render-html';
export { default as wrapPageElement } from './gatsby/wrap-page-element';
