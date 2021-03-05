const { getTrailingSlashesConfig } = require('../src/utils/config');
const { matchesLocale } = require('./utils/locale');
const { defaultLocale } = require('../src/utils/defaultOptions');
const { getFileRelativePath } = require('./utils/fs');

const addLocale = ({ page }, themeOptions) => {
  const { i18n = {} } = themeOptions;
  const { additionalLocales = [] } = i18n;

  if (page.context.locale) {
    return page;
  }

  const { locale } =
    additionalLocales.find(({ locale }) => matchesLocale(page.path, locale)) ||
    defaultLocale;

  return { ...page, context: { ...page.context, locale } };
};

const addFileRelativePath = ({ page, store }) => {
  if (page.context.fileRelativePath) {
    return page;
  }

  const { program } = store.getState();

  return {
    ...page,
    context: {
      ...page.context,
      fileRelativePath: getFileRelativePath(
        page.componentPath,
        program.directory
      ),
    },
  };
};

const addTrailingSlash = ({ page }, themeOptions) => {
  const { forceTrailingSlashes } = getTrailingSlashesConfig(themeOptions);

  if (page.path.endsWith('/') || !forceTrailingSlashes) {
    return page;
  }

  return {
    ...page,
    path: `${page.path}/`,
  };
};

module.exports = [addLocale, addFileRelativePath, addTrailingSlash];
