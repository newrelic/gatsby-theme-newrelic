const fs = require('fs');
const path = require('path');

const uniq = (arr) => [...new Set(arr)];

const DEFAULT_BRANCH = 'main';
const DEFAULT_LOCALES = [{ name: 'English', locale: 'en', isDefault: true }];

exports.onPreBootstrap = ({ reporter, store }) => {
  const { program } = store.getState();
  const imagePath = path.join(program.directory, 'src/images');
  const announcementsPath = path.join(program.directory, 'src/announcements');

  if (!fs.existsSync(imagePath)) {
    reporter.info('creating the images directory');
    fs.mkdirSync(imagePath, { recursive: true });
  }

  if (!fs.existsSync(announcementsPath)) {
    reporter.info('creating the announcements directory');
    fs.mkdirSync(announcementsPath, { recursive: true });
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
        resolve: () => [
          ...DEFAULT_LOCALES,
          ...(i18n.additionalLocales || []).map((locale) => ({
            ...locale,
            isDefault: false,
          })),
        ],
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

const getFileRelativePath = (absolutePath) =>
  absolutePath.replace(`${process.cwd()}/`, '');
