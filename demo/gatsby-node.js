const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    query {
      allLocale {
        nodes {
          locale
          isDefault
        }
      }
      allMdx(
        filter: { internal: { contentFilePath: { regex: "/src/content/" } } }
      ) {
        nodes {
          fields {
            fileRelativePath
            slug
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
      fields: { fileRelativePath, slug },
    } = node;

    createPage({
      path: slug,
      component: path.resolve('src/templates/basic.js'),
      context: {
        slug,
        fileRelativePath,
      },
    });

    additionalLocales.forEach(({ locale }) => {
      createPage({
        path: path.join(`/${locale}`, slug),
        component: path.resolve('src/templates/basic.js'),
        context: {
          slug,
          fileRelativePath,
        },
      });
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        http: false,
        https: false,
        zlib: false,
      },
    },
  });
};
