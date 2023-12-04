const { getI18nConfig } = require('../../src/utils/config');

const getLocale = ({ location }, themeOptions) => {
  const { locales, defaultLocale } = getI18nConfig(themeOptions);

  const [, base] = location.pathname.split('/');
  const locale =
    locales
      .filter((locale) => !locale.isDefault)
      .find(({ locale }) => locale === base) || defaultLocale;

  return locale.locale;
};

module.exports = getLocale;
