const DEFAULT_NAMESPACE = 'translation';
const FALLBACK_LANG = 'en';
const themeNamespace = 'gatsby-theme-newrelic';

const uniq = (arr) => [...new Set(arr)];

const withDefaults = (themeOptions) => {
  const { i18n = {} } = themeOptions;
  const { i18nextOptions = {} } = i18n;

  return {
    ...themeOptions,
    i18n: {
      ...themeOptions.i18n,
      i18nextOptions: {
        defaultNS: DEFAULT_NAMESPACE,
        initImmediate: false,
        ...i18nextOptions,
        fallbackLng: FALLBACK_LANG,
        ns: i18nextOptions.ns
          ? uniq([themeNamespace, ...i18nextOptions.ns])
          : [themeNamespace, DEFAULT_NAMESPACE],
        interpolation: {
          escapeValue: false,
        },
      },
    },
  };
};

module.exports = { themeNamespace, withDefaults };
