const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    query {
      allLocale {
        nodes {
          locale
          localizedPath
          isDefault
        }
      }
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

  const { allMdx, allLocale } = data;

  const additionalLocales = allLocale.nodes.filter(
    ({ isDefault }) => !isDefault
  );

  allMdx.nodes.forEach((node) => {
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

    additionalLocales.forEach(({ localizedPath }) => {
      createPage({
        path: path.join(`/${localizedPath}`, slug),
        component: path.resolve('src/templates/basic.js'),
        context: {
          slug,
          fileRelativePath,
        },
      });
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
