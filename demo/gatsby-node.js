const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/src/content/" } }) {
        nodes {
          slug
          fields {
            fileRelativePath
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild('Error when running GraphQL query');
    return;
  }

  data.allMdx.nodes.forEach((node) => {
    const {
      slug,
      fields: { fileRelativePath },
    } = node;

    createPage({
      path: slug,
      component: path.resolve('src/templates/basic.js'),
      context: {
        slug,
        fileRelativePath,
      },
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.match(/404/) && !page.context.layout) {
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
