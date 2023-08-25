const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const fs = require('fs');
const { withDefaults } = require('./src/utils/defaultOptions');
const remark = require('remark');
const remarkMdx = require('remark-mdx');
const createRelatedResourceNode = require('./src/utils/related-resources/createRelatedResourceNode');
const getRelatedResources = require('./src/utils/related-resources/fetchRelatedResources');
const {
  getTessenConfig,
  getResolvedEnv,
  getI18nConfig,
} = require('./src/utils/config');
const pageTransforms = require('./gatsby/page-transforms');
const { getTessenPath } = require('./gatsby/constants');
const { getFileRelativePath } = require('./gatsby/utils/fs');
const { SCHEMA_CUSTOMIZATION_TYPES } = require('./gatsby/type-defs');
const { SWIFTYPE_ENGINE_KEY } = require('./src/utils/constants');

let writeableRelatedResourceData = {};

const uniq = (arr) => [...new Set(arr)];

const ANNOUNCEMENTS_DIRECTORY = 'src/announcements';
const DEFAULT_BRANCH = 'main';
const MDX_NODE_TYPES = new Set(['Mdx', 'MarkdownRemark']);

exports.onPreInit = (_, themeOptions) => {
  const { i18n, relatedResources = {}, tessen, signup } = themeOptions;

  if (i18n && !i18n.translationsPath) {
    throw new Error(
      "[@newrelic/gatsby-theme-newrelic] Please define an 'i18n.translationsPath' option"
    );
  }

  if (relatedResources.swiftype) {
    validateSwiftypeOptions(relatedResources.swiftype);
  }

  if (tessen) {
    validateTessenOptions(tessen);
  }
  if (signup) {
    validateSignupOptions(signup);
  }
};

exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
  const { program } = store.getState();

  const imagePath = path.join(program.directory, 'src/images');
  const announcementsPath = path.join(
    program.directory,
    ANNOUNCEMENTS_DIRECTORY
  );
  const { relatedResources = {}, tessen } = themeOptions;

  createDirectory(imagePath, {
    reporter,
    message: 'creating the images directory',
  });

  createDirectory(announcementsPath, {
    reporter,
    message: 'creating the announcements directory',
  });

  if (themeOptions.i18n) {
    const { locales, i18nextOptions, translationsPath, themeNamespace } =
      getI18nConfig(themeOptions);

    locales.forEach(({ locale }) => {
      i18nextOptions.ns
        .filter((ns) => ns !== themeNamespace)
        .forEach((ns) => {
          createFile(path.join(translationsPath, locale, `${ns}.json`), '{}', {
            reporter,
            message: `creating the ${locale}/${ns}.json file`,
          });
        });
    });
  }

  if (relatedResources.swiftype) {
    const { resultsPath } = relatedResources.swiftype;

    createFile(resultsPath, '{}', {
      reporter,
      message: 'creating an empty related resources file',
    });

    writeableRelatedResourceData = JSON.parse(
      fs.readFileSync(resultsPath, { encoding: 'utf-8' })
    );
  }

  const version = tessen ? tessen.tessenVersion : null;

  const tessenLibrary = path.join(
    program.directory,
    'static',
    path.basename(getTessenPath(version))
  );

  if (tessen && !fs.existsSync(tessenLibrary)) {
    createDirectory(path.dirname(tessenLibrary));

    fs.copyFileSync(getTessenPath(version), tessenLibrary);

    reporter.info(
      '[@newrelic/gatsby-theme-newrelic] adding Tessen library. Please commit this file.'
    );
  }
};

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;

  const mdxASTResolver = schema.buildObjectType({
    name: `Mdx`,
    fields: {
      mdxAST: {
        type: `JSON`,
        async resolve(mdxNode) {
          return remark().use(remarkMdx).parse(mdxNode.body);
        },
      },
    },
  });

  createTypes([SCHEMA_CUSTOMIZATION_TYPES, mdxASTResolver]);
};

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  themeOptions
) => {
  const i18n = getI18nConfig(themeOptions);
  const { relatedResources } = withDefaults(themeOptions);
  const { createNode } = actions;
  const tessen = getTessenConfig(themeOptions);
  const env = getResolvedEnv(themeOptions);

  i18n.locales.forEach((locale) => {
    createNode({
      ...locale,
      id: createNodeId(`Locale-${locale.locale}`),
      parent: null,
      children: [],
      internal: {
        type: 'Locale',
        contentDigest: createContentDigest(locale),
      },
    });
  });

  const config = {
    env,
    relatedResources: {
      labels: Object.entries(relatedResources.labels).map(
        ([baseUrl, label]) => ({
          baseUrl,
          label,
        })
      ),
    },
    tessen: tessen
      ? { product: tessen.product, subproduct: tessen.subproduct }
      : null,
    signup: themeOptions.signup,
    feedback: themeOptions.feedback,
  };

  createNode({
    ...config,
    id: createNodeId('@newrelic/gatsby-theme-newrelic:config'),
    parent: null,
    children: [],
    internal: {
      type: 'NewRelicThemeConfig',
      contentDigest: createContentDigest(config),
      content: JSON.stringify(config),
    },
  });
};

exports.createResolvers = ({ createResolvers }, themeOptions) => {
  const { layout = {} } = themeOptions;
  const relatedResources = {
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
  };

  createResolvers({
    Site: {
      layout: {
        type: 'SiteLayout',
        resolve: () => layout,
      },
    },
    SiteSiteMetadata: {
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
      relatedResources,
    },
    Quickstarts: {
      relatedResources,
    },
  });
};

exports.onCreateBabelConfig = ({ actions }, themeOptions) => {
  const { setBabelPlugin } = actions;
  const { prism = {} } = themeOptions;

  setBabelPlugin({
    name: '@emotion/babel-plugin',
  });

  setBabelPlugin({
    name: 'babel-plugin-prismjs',
    options: {
      languages: uniq([
        'markup',
        'apacheconf',
        'bash',
        'clike',
        'c',
        'cpp',
        'css',
        'css-extras',
        'javascript',
        'jsx',
        'js-extras',
        'coffeescript',
        'diff',
        'git',
        'go',
        'graphql',
        'handlebars',
        'json',
        'less',
        'makefile',
        'markdown',
        'objectivec',
        'ocaml',
        'python',
        'reason',
        'sass',
        'scss',
        'sql',
        'stylus',
        'tsx',
        'typescript',
        'wasm',
        'yaml',
        ...(prism.languages || []),
      ]),
    },
  });
};

exports.onCreateNode = async (utils, themeOptions) => {
  const { relatedResources } = withDefaults(themeOptions);
  const { node, actions, store } = utils;
  const { createNodeField } = actions;
  const { program } = store.getState();

  const slugify = (str) => str.replace('src/content/', '').replace('.mdx', '');

  if (MDX_NODE_TYPES.has(node.internal.type)) {
    const fileRelativePath = getFileRelativePath(
      node.internal.contentFilePath,
      program.directory
    );

    createNodeField({
      node,
      name: 'fileRelativePath',
      value: fileRelativePath,
    });

    createNodeField({
      node,
      name: 'slug',
      value: slugify(fileRelativePath),
    });
  }

  await createRelatedResources(utils, relatedResources);
};

exports.onCreatePage = (helpers, themeOptions) => {
  const { page, actions } = helpers;
  const { createPage, deletePage } = actions;
  const { locales } = getI18nConfig(themeOptions);
  const additionalLocales = locales.filter((locale) => !locale.isDefault);

  const transformedPage = pageTransforms.reduce(
    (page, transform) => transform({ ...helpers, page }, themeOptions),
    page
  );

  if (transformedPage !== page) {
    deletePage(page);
    createPage(transformedPage);
  }

  if (
    !(
      page.internalComponentName === 'Component/404.html' ||
      page.internalComponentName === 'Component/dev-404-page/' ||
      page.internalComponentName === 'Component/404/'
    ) &&
    transformedPage.context.fileRelativePath.includes('src/pages/') &&
    transformedPage.context.locale === 'en'
  ) {
    additionalLocales.forEach(({ locale }) => {
      createPage({
        ...transformedPage,
        path: path.posix.join(`/${locale}`, transformedPage.path),
        context: {
          ...transformedPage.context,
          locale,
        },
      });
    });
  }

  if (
    (page.internalComponentName === 'Component/404.html' ||
      page.internalComponentName === 'Component/dev-404-page/' ||
      page.internalComponentName === 'Component/404/') &&
    !page.context.layout
  ) {
    deletePage(page);
    createPage({
      ...page,
      context: {
        ...page.context,
        layout: 'basic',
        themeOptions,
        swiftypeEngineKey: SWIFTYPE_ENGINE_KEY,
      },
    });
  }
};

exports.onCreateWebpackConfig = ({ actions, plugins }, themeOptions) => {
  const { i18n } = themeOptions;

  actions.setWebpackConfig({
    externals: [
      {
        tessen: 'Tessen',
      },
    ],
    plugins: [
      plugins.define({
        GATSBY_THEME_NEWRELIC_I18N_PATH: JSON.stringify(
          (i18n && i18n.translationsPath) || ''
        ),
      }),
    ],
    resolve: {
      alias: {
        path: require.resolve('path-browserify'),
        util: require.resolve('util'),
        stream: require.resolve('stream-browserify'),
      },
      fallback: {
        fs: false,
        http: false,
        https: false,
        zlib: false,
      },
    },
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
  {
    node,
    actions,
    createContentDigest,
    getNodesByType,
    getNode,
    createNodeId,
    reporter,
  },
  options
) => {
  const { swiftype } = options;
  const { createNode, createParentChildLink } = actions;

  if (
    !MDX_NODE_TYPES.has(node.internal.type) ||
    node.internal.contentFilePath?.includes(ANNOUNCEMENTS_DIRECTORY)
  ) {
    return;
  }

  const { frontmatter = {} } = node;

  const resources = frontmatter.resources || [];

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

  const { getSlug, filter = () => true } = swiftype || {};

  const slug = getSlug ? getSlug({ node }) : createFilePath({ node, getNode });

  if (!swiftype || !filter({ node, slug })) {
    return;
  }

  const [
    {
      siteMetadata: { siteUrl },
    },
  ] = getNodesByType('Site');

  const swiftypeResources = await getRelatedResources(
    { node, slug, siteUrl, reporter },
    swiftype
  );

  writeableRelatedResourceData[slug] = swiftypeResources;

  swiftypeResources.forEach((resource) => {
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
      "You have enabled swiftype searches, but the 'resultsPath' is not defined. Please define a 'relatedResources.swiftype.resultsPath' option"
    );
  }

  if (!engineKey) {
    throw new Error(
      "You have enabled swiftype searches, but the 'engineKey' is missing. Please define a 'relatedResources.swiftype.engineKey' option"
    );
  }
};

const validateTessenOptions = (tessenOptions) => {
  const { segmentWriteKey } = tessenOptions;

  if (!segmentWriteKey) {
    throw new Error(
      "You have enabled Tessen, but the 'segmentWriteKey' is missing. Please define a 'tessen.segmentWriteKey' option"
    );
  }
};

const validateSignupOptions = (signupOptions) => {
  const { environment, reCaptchaToken, signupUrl } = signupOptions;

  if (!environment) {
    throw new Error(
      "You have enabled sign ups, but the 'environment' is missing. Please define a 'signup.environment' option"
    );
  }
  if (!reCaptchaToken) {
    throw new Error(
      "You have enabled sign ups, but the 'reCaptchaToken' is missing. Please define a 'signup.reCaptchaToken' option"
    );
  }
  if (!signupUrl) {
    throw new Error(
      "You have enabled sign ups, but the 'signupUrl' is missing. Please define a 'signup.signupUrl' option"
    );
  }
};
