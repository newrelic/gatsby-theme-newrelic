const path = require('path');

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

  if (page.component.endsWith('.mdx')) {
    deletePage(page);
    createPage({
      ...page,
      component: path.resolve('src/templates/basic.js'),
      context: {
        ...page.context,
        slug: page.path.replace(/^\//, ''),
      },
    });
  }
};
