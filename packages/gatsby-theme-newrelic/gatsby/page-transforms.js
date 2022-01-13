const { getI18nConfig } = require('../src/utils/config');
const { getFileRelativePath } = require('./utils/fs');
const getLocale = require('./utils/getLocale');

const addLocale = ({ page }, themeOptions) => {
  const { defaultLocale, locales } = getI18nConfig(themeOptions);
  const additionalLocales = locales.filter((locale) => !locale.isDefault);

  // We don't want to add the locale to 404 pageContext because we want to
  // determine the locale at runtime based on the path in the URL
  if (page.context.locale || page.path.match(/404/)) {
    return page;
  }

  const { locale } =
    additionalLocales.find(
      ({ locale }) =>
        locale ===
        getLocale({ location: { pathname: page.path } }, themeOptions)
    ) || defaultLocale;

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

module.exports = [addLocale, addFileRelativePath];
