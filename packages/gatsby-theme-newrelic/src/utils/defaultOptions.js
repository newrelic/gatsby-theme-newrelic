const DEFAULT_NAMESPACE = 'translation';

const defaultLocale = { name: 'English', locale: 'en' };
const themeNamespace = 'gatsby-theme-newrelic';
const themeSupportedLocales = ['en'];

const uniq = (arr) => [...new Set(arr)];

const withDefaults = (themeOptions) => {
  const { i18n = {} } = themeOptions;
  const { i18nextOptions = {} } = i18n;

  return {
    ...themeOptions,
    i18n: {
      extract: true,
      ...themeOptions.i18n,
      locales: [defaultLocale].concat(i18n.additionalLocales),
      i18nextOptions: {
        defaultNS: DEFAULT_NAMESPACE,
        initImmediate: false,
        ...i18nextOptions,
        fallbackLng: defaultLocale.locale,
        ns: i18nextOptions.ns
          ? uniq([themeNamespace, ...i18nextOptions.ns])
          : [themeNamespace, DEFAULT_NAMESPACE],
        interpolation: {
          escapeValue: false,
        },
        react: {
          useSuspense: false,
        },
      },
    },
  };
};

module.exports = {
  defaultLocale,
  themeNamespace,
  withDefaults,
  themeSupportedLocales,
};
