import { getI18nConfig } from '../../src/utils/config/index.mjs';

const getLocale = ({ location }, themeOptions) => {
  const { locales, defaultLocale } = getI18nConfig(themeOptions);

  const [, base] = location.pathname.split('/');
  const locale =
    locales
      .filter((locale) => !locale.isDefault)
      .find(({ locale }) => locale === base) || defaultLocale;

  return locale.locale;
};

export default getLocale;
