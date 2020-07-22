const fs = require('fs');
const path = require('path');

const uniq = (arr) => [...new Set(arr)];

exports.onPreBootstrap = ({ reporter, store }) => {
  const { program } = store.getState();
  const imagePath = path.join(program.directory, 'src/images');

  if (!fs.existsSync(imagePath)) {
    reporter.info('creating the images directory');
    fs.mkdirSync(imagePath, { recursive: true });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type SiteLayout @dontInfer {
      contentPadding: String
      maxWidth: String
    }
  `);
};

exports.createResolvers = ({ createResolvers }, themeOptions) => {
  const { layout = {} } = themeOptions;

  createResolvers({
    Site: {
      layout: {
        type: 'SiteLayout',
        resolve: () => layout,
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
        ...(prism.languages || []),
      ]),
    },
  });
};
