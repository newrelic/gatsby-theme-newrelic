export const wrapRootElement = ({ element }, pluginOptions) => {
  return (
    <LayoutContext.Provider value={pluginOptions.layout}>
      {pluginOptions.splitio ? (
        <SplitIOProvider config={getSplitConfig(pluginOptions)}>
          {element}
        </SplitIOProvider>
      ) : (
        element
      )}
    </LayoutContext.Provider>
  );
};

export { default as wrapPageElement } from './gatsby/wrap-page-element';
