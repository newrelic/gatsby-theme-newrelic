const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

exports.onPreBootstrap = ({ reporter }) => {
  const imagePath = resolveApp('src/images');

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
