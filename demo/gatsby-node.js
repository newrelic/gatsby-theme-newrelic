const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              redirects
            }
            slug
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const { allMdx } = data;

  allMdx.edges.forEach(({ node }) => {
    const { slug } = node;

    createPage({
      path: slug,
      component: path.resolve('src/templates/basic.js'),
      context: {
        slug,
      },
    });
  });
};

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
