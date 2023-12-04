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
      allMdx(filter: { fileAbsolutePath: { regex: "/src/content/" } }) {
        nodes {
          slug
          fields {
            fileRelativePath
          }
          internal {
            contentFilePath
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

  const basicTemplate = path.resolve('src/templates/basic.js');

  allMdx.nodes.forEach((node) => {
    const {
      slug,
      fields: { fileRelativePath },
    } = node;

    createPage({
      path: slug,
      component: `${basicTemplate}?__contentFilePath=${contentFilePath}`,
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
        crypto: false,
        http: false,
        https: false,
        url: false,
        zlib: false,
      },
    },
  });
};
