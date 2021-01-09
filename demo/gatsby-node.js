exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.match(/404/)) {
    deletePage(page);
    createPage({
      ...page,
      context: {
        ...page.context,
        layout: 'basic',
      },
    });
  }
};
