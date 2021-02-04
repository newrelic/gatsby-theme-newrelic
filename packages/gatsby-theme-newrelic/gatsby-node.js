const fs = require('fs');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const {
  defaultLocale,
  withDefaults,
  themeNamespace,
} = require('./src/utils/defaultOptions');
const createRelatedResourceNode = require('./src/utils/related-resources/createRelatedResourceNode');
const getRelatedResources = require('./src/utils/related-resources/fetchRelatedResources');

let writeableRelatedResourceData = {};

const uniq = (arr) => [...new Set(arr)];

const DEFAULT_BRANCH = 'main';

const matchesLocale = (path, locale) =>
  new RegExp(`^\\/?${locale}(?=$|\\/)`).test(path);

exports.onPreInit = (_, themeOptions) => {
  const { i18n, relatedResources = {} } = themeOptions;

  if (i18n && !i18n.translationsPath) {
    throw new Error(
      "[@newrelic/gatsby-theme-newrelic] Please define an 'i18n.translationsPath' option"
    );
  }

  if (relatedResources.swiftype) {
    validateSwiftypeOptions(relatedResources.swiftype);
  }
};

exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
  const { program } = store.getState();
  const imagePath = path.join(program.directory, 'src/images');
  const announcementsPath = path.join(program.directory, 'src/announcements');
  const { relatedResources = {} } = themeOptions;

  createDirectory(imagePath, {
    reporter,
    message: 'creating the images directory',
  });

  createDirectory(announcementsPath, {
    reporter,
    message: 'creating the announcements directory',
  });

  if (themeOptions.i18n) {
    const { i18n } = withDefaults(themeOptions);

    [defaultLocale]
      .concat(i18n.additionalLocales || [])
      .forEach(({ locale }) => {
        i18n.i18nextOptions.ns
          .filter((ns) => ns !== themeNamespace)
          .forEach((ns) => {
            createFile(
              path.join(i18n.translationsPath, locale, `${ns}.json`),
              '{}',
              {
                reporter,
                message: `creating the ${locale}/${ns}.json file`,
              }
            );
          });
      });
  }

  if (relatedResources.swiftype) {
    const { resultsPath } = relatedResources.swiftype;

    createFile(resultsPath, '{}', {
      reporter,
      message: 'Creating an empty related resources file',
    });

    writeableRelatedResourceData = fs.readFileSync(resultsPath);
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
      title: String
      titleTemplate: String
    }

    type Locale implements Node {
      name: String!
      locale: String!
      isDefault: Boolean!
    }

    type RelatedResource implements Node {
      id: ID!
      title: String!
      url: String!
    }
  `);
};

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  themeOptions
) => {
  const { i18n = {} } = themeOptions;
  const { createNode } = actions;

  (i18n.additionalLocales || []).concat(defaultLocale).forEach((locale) => {
    const isDefault = locale.locale === defaultLocale.locale;

    const data = {
      ...locale,
      isDefault,
      localizedPath: isDefault ? '' : locale.locale,
    };

    createNode({
      ...data,
      id: createNodeId(`Locale-${locale.locale}`),
      parent: null,
      children: [],
      internal: {
        type: 'Locale',
        contentDigest: createContentDigest(data),
      },
    });
  });
};

exports.createResolvers = ({ createResolvers }, themeOptions) => {
  const { layout = {} } = themeOptions;

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
    Mdx: {
      relatedResources: {
        args: {
          limit: {
            type: 'Int',
            defaultValue: 5,
          },
        },
        type: ['RelatedResource!'],
        resolve: (source, args, context) => {
          const { limit } = args;

          return context.nodeModel
            .getNodesByIds({ ids: source.children })
            .slice(0, Math.max(limit, 0));
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
        'yaml',
        ...(prism.languages || []),
      ]),
    },
  });
};

exports.onCreateNode = async (utils, themeOptions) => {
  const { relatedResources } = withDefaults(themeOptions);
  const { node, actions } = utils;
  const { createNodeField } = actions;

  if (['Mdx', 'MarkdownRemark'].includes(node.internal.type)) {
    createNodeField({
      node,
      name: 'fileRelativePath',
      value: getFileRelativePath(node.fileAbsolutePath),
    });
  }

  await createRelatedResources(utils, relatedResources);
};

exports.onCreatePage = ({ page, actions }, themeOptions) => {
  const { createPage } = actions;
  const { i18n = {} } = themeOptions;
  const { additionalLocales = [] } = i18n;

  if (!page.context.fileRelativePath) {
    page.context.fileRelativePath = getFileRelativePath(page.componentPath);

    createPage(page);
  }

  if (!page.context.locale) {
    const { locale } =
      additionalLocales.find(({ locale }) =>
        matchesLocale(page.path, locale)
      ) || defaultLocale;

    page.context.locale = locale;

    createPage(page);
  }

  if (
    !page.path.match(/404/) &&
    page.context.fileRelativePath.includes('src/pages/')
  ) {
    additionalLocales.forEach(({ locale }) => {
      if (!matchesLocale(page.path, locale)) {
        createPage({
          ...page,
          path: path.join('/', locale, page.path),
          context: {
            ...page.context,
            locale,
          },
        });
      }
    });
  }
};

exports.onCreateWebpackConfig = ({ actions, plugins }, themeOptions) => {
  const { i18n } = themeOptions;

  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        GATSBY_THEME_NEWRELIC_I18N_PATH: JSON.stringify(
          (i18n && i18n.translationsPath) || ''
        ),
      }),
    ],
  });
};

exports.onPostBootstrap = (_, themeOptions) => {
  const {
    relatedResources: {
      swiftype: { refetch, resultsPath },
    },
  } = withDefaults(themeOptions);

  if (refetch && resultsPath) {
    fs.writeFileSync(
      resultsPath,
      JSON.stringify(writeableRelatedResourceData, null, 2)
    );
  }
};

const createDirectory = (directory, { reporter, message } = {}) => {
  if (fs.existsSync(directory)) {
    return;
  }

  if (message) {
    reporter.info(`[@newrelic/gatsby-theme-newrelic] ${message}`);
  }

  fs.mkdirSync(directory, { recursive: true });
};

const createFile = (filepath, data, { reporter, message } = {}) => {
  if (fs.existsSync(filepath)) {
    return;
  }

  if (message) {
    reporter.info(`[@newrelic/gatsby-theme-newrelic] ${message}`);
  }

  createDirectory(path.dirname(filepath));
  fs.writeFileSync(filepath, data, 'utf-8');
};

const createRelatedResources = async (
  { node, actions, createContentDigest, getNodesByType, getNode, createNodeId },
  options
) => {
  const { swiftype } = options;
  const { createNode, createParentChildLink } = actions;

  if (node.internal.type !== 'Mdx') {
    return;
  }

  const frontmatterResources =
    (node.frontmatter && node.frontmatter.resources) || [];

  frontmatterResources.forEach((resource) => {
    const child = createRelatedResourceNode({
      parent: node.id,
      resource,
      createContentDigest,
      createNode,
      createNodeId,
    });

    createParentChildLink({ parent: node, child: child });
  });

  const { getSlug, filter = () => true, getParams = () => ({}) } = swiftype;

  if (!swiftype || !filter({ node })) {
    return;
  }

  const [
    {
      siteMetadata: { siteUrl },
    },
  ] = getNodesByType('Site');

  const defaultSlug = createFilePath({ node, getNode, trailingSlash: false });
  const slug = getSlug ? getSlug({ node }) : defaultSlug;
  const params = getParams({ node, slug });

  const resources = await getRelatedResources(
    { slug, siteUrl, params },
    swiftype
  );

  writeableRelatedResourceData[slug] = resources;

  resources.forEach((resource) => {
    const child = createRelatedResourceNode({
      parent: node.id,
      resource,
      createContentDigest,
      createNode,
      createNodeId,
    });

    createParentChildLink({ parent: node, child: child });
  });
};

const validateSwiftypeOptions = (swiftypeOptions) => {
  const { resultsPath, engineKey } = swiftypeOptions;

  if (!resultsPath) {
    throw new Error(
      "[@newrelic/gatsby-theme-newrelic] You have enabled swiftype searches, but the 'resultsPath' is not defined. Please define a 'relatedResources.swiftype.resultsPath' option"
    );
  }

  if (!engineKey) {
    throw new Error(
      "[@newrelic/gatsby-theme-newrelic] You have enabled swiftype searches, but the 'engineKey' is missing. Please define a 'relatedResources.swiftype.engineKey' option"
    );
  }
};

const getFileRelativePath = (absolutePath) =>
  absolutePath.replace(`${process.cwd()}/`, '');
