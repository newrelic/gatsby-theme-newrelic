import wrapPageElement from './gatsby/wrap-page-element';
import onPreRenderHTML from './gatsby/on-pre-render-html';

const wrapRootElement = ({ element }, pluginOptions) => {
  return (
    <LayoutContext.Provider value={pluginOptions.layout}>
      {element}
    </LayoutContext.Provider>
  );
};

export { onPreRenderHTML, wrapPageElement, wrapRootElement };
