import { defaultLocale } from '../src/utils/defaultOptions';

export default getLocale = (i18n, location) => {
  const [, base] = location.pathname.split('/');
  const locale =
    (i18n.additionalLocales || []).find(({ locale }) => locale === base) ||
    defaultLocale;
  return locale.locale;
};
