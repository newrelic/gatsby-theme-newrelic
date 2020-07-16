const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

exports.onPreBootstrap = ({ reporter }) => {
  const imagePath = resolveApp('src/images');

  if (!fs.existsSync(imagePath)) {
    reporter.info(`creating the images directory`);
    fs.mkdirSync(imagePath, { recursive: true });
  }
};
