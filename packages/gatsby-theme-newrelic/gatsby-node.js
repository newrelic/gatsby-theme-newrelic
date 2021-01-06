const fs = require('fs');
const path = require('path');
const {
  defaultLocale,
  withDefaults,
  themeNamespace,
} = require('./src/utils/defaultOptions');

const uniq = (arr) => [...new Set(arr)];

const DEFAULT_BRANCH = 'main';

exports.onPreInit = (_, themeOptions) => {
  const { i18n } = themeOptions;

  if (i18n && !i18n.translationsPath) {
    throw new Error(
      "Please define a the 'i18n.translationsPath' option of @newrelic/gatsby-theme-newrelic"
    );
  }
};

exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
  const { i18n } = withDefaults(themeOptions);
  const { program } = store.getState();
  const imagePath = path.join(program.directory, 'src/images');
  const announcementsPath = path.join(program.directory, 'src/announcements');

  createDirectory(imagePath, {
    reporter,
    message: 'creating the images directory',
  });

  createDirectory(announcementsPath, {
    reporter,
    message: 'creating the announcements directory',
  });

  if (i18n) {
    [defaultLocale]
      .concat(i18n.additionalLocales || [])
      .forEach(({ locale }) => {
        i18n.i18nextOptions.ns
          .filter((ns) => ns !== themeNamespace)
          .forEach((ns) => {
            createFile(path.join(i18n.translationsPath, locale, `${ns}.json`), {
              reporter,
              message: `creating the ${locale}/${ns}.json file`,
            });
          });
      });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type SiteLayout @dontInfer {
      contentPadding: String
      maxWidth: String
    }

    type MdxFrontmatter @infer {
      startDate: Date @dateformat(formatString: "YYYY-MM-DD")
      endDate: Date @dateformat(formatString: "YYYY-MM-DD")
    }

    type SiteSiteMetadata {
      repository: String
      utmSource: String
      branch: String!
      contributingUrl: String
    }

    type SiteLocale @dontInfer {
      name: String!
      locale: String!
      isDefault: Boolean!
    }
  `);
};

exports.createResolvers = ({ createResolvers }, themeOptions) => {
  const { layout = {}, i18n = {} } = themeOptions;

  const defaultUtmSource = {
    'https://developer.newrelic.com': 'developer-site',
    'https://opensource.newrelic.com': 'opensource-site',
    'https://docs.newrelic.com': 'docs-site',
  };

  createResolvers({
    Site: {
      layout: {
        type: 'SiteLayout',
        resolve: () => layout,
      },
      locales: {
        type: '[SiteLocale!]!',
        resolve: () => [defaultLocale, ...(i18n.additionalLocales || [])],
      },
    },
    SiteLocale: {
      isDefault: {
        resolve: (source) => source.locale === defaultLocale.locale,
      },
    },
    SiteSiteMetadata: {
      utmSource: {
        resolve: ({ siteUrl, utmSource }) =>
          utmSource || defaultUtmSource[siteUrl],
      },
      branch: {
        resolve: ({ branch }) => branch || DEFAULT_BRANCH,
      },
      contributingUrl: {
        resolve: ({ contributingUrl, branch, repository }) => {
          if (contributingUrl !== undefined) {
            return contributingUrl;
          }

          return repository
            ? `${repository}/blob/${branch || DEFAULT_BRANCH}/CONTRIBUTING.md`
            : null;
        },
      },
    },
  });
};

exports.onCreateBabelConfig = ({ actions }, themeOptions) => {
  const { setBabelPlugin } = actions;
  const { prism = {} } = themeOptions;

  setBabelPlugin({
    name: 'babel-plugin-prismjs',
    options: {
      languages: uniq([
        'css',
        'hcl',
        'javascript',
        'json',
        'jsx',
        'ruby',
        'shell',
        'sql',
        'graphql',
        'sass',
        'scss',
        ...(prism.languages || []),
      ]),
    },
  });
};

exports.onCreateNode = ({ node, actions }) => {
  if (['Mdx', 'MarkdownRemark'].includes(node.internal.type)) {
    const { createNodeField } = actions;

    createNodeField({
      node,
      name: 'fileRelativePath',
      value: getFileRelativePath(node.fileAbsolutePath),
    });
  }
};

exports.onCreatePage = ({ page, actions }, pluginOptions) => {
  const { createPage } = actions;
  const { i18n = {} } = pluginOptions;

  if (!page.context.fileRelativePath) {
    page.context.fileRelativePath = getFileRelativePath(page.componentPath);

    createPage(page);
  }

  if (
    i18n.additionalLocales &&
    !page.path.match(/404/) &&
    page.context.fileRelativePath.includes('src/pages/')
  ) {
    i18n.additionalLocales.forEach(({ locale }) => {
      createPage({
        ...page,
        path: path.join('/', locale, page.path),
      });
    });
  }
};

exports.onCreateWebpackConfig = ({ actions, plugins }, themeOptions) => {
  const { i18n } = themeOptions;

  if (i18n) {
    actions.setWebpackConfig({
      plugins: [
        plugins.define({
          GATSBY_THEME_I18N_REACT_I18NEXT: JSON.stringify(
            i18n.translationsPath
          ),
        }),
      ],
    });
  }
};

const createDirectory = (directory, { reporter, message } = {}) => {
  if (fs.existsSync(directory)) {
    return;
  }

  if (message) {
    reporter.info(message);
  }

  fs.mkdirSync(directory, { recursive: true });
};

const createFile = (filepath, { reporter, message } = {}) => {
  if (fs.existsSync(filepath)) {
    return;
  }

  if (message) {
    reporter.info(message);
  }

  createDirectory(path.dirname(filepath));
  fs.writeFileSync(filepath, '{}', 'utf-8');
};

const getFileRelativePath = (absolutePath) =>
  absolutePath.replace(`${process.cwd()}/`, '');
