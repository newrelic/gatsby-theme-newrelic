const DEFAULT_NAMESPACE = 'translation';
const SUPPORTED_LOCALES = ['en', 'jp'];
const THEME_NAMESPACE = 'gatsby-theme-newrelic';

const LOCALE_CONFIGS = {
  en: [
    {
      name: 'English',
      localName: 'English',
      locale: 'en',
      hrefLang: '',
      urlPrefix: '',
      isDefault: true,
    },
  ],
  jp: [
    {
      name: 'Japanese',
      localName: '日本語',
      locale: 'jp',
      hrefLang: 'ja',
      urlPrefix: '/jp',
      isDefault: false,
    },
  ],
};

const uniq = (arr) => [...new Set(arr)];

const getI18nConfig = (themeOptions) => {
  const { i18n = {} } = themeOptions;
  const { additionalLocales = [], i18nextOptions = {} } = i18n;

  const defaultLocale = LOCALE_CONFIGS.en;
  const locales = ['en']
    .concat(additionalLocales)
    .map((locale) => LOCALE_CONFIGS[locale])
    .filter(Boolean);

  return {
    extract: true,
    ...themeOptions.i18n,
    locales,
    defaultLocale,
    themeNamespace: THEME_NAMESPACE,
    themeSupportedLocales: SUPPORTED_LOCALES,
    i18nextOptions: {
      defaultNS: DEFAULT_NAMESPACE,
      initImmediate: false,
      ...i18nextOptions,
      fallbackLng: defaultLocale.locale,
      ns: i18nextOptions.ns
        ? uniq([THEME_NAMESPACE, ...i18nextOptions.ns])
        : [THEME_NAMESPACE, DEFAULT_NAMESPACE],
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    },
  };
};

module.exports = getI18nConfig;
