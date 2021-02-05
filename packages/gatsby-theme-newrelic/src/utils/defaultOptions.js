const DEFAULT_NAMESPACE = 'translation';

const defaultLocale = { name: 'English', locale: 'en' };
const themeNamespace = 'gatsby-theme-newrelic';
const themeSupportedLocales = ['en'];

const uniq = (arr) => [...new Set(arr)];

const DEFAULT_SITE_LABELS = {
  'https://developer.newrelic.com': 'developer',
  'https://opensource.newrelic.com': 'open source',
  'https://docs.newrelic.com': 'docs',
  'https://github.com': 'github',
  'https://terraform.io': 'terraform',
  'https://kubernetes.io': 'kubernetes',
  'https://youtube.com': 'youtube',
  'https://discuss.newrelic.com': 'discuss',
  'https://blog.newrelic.com': 'blog',
  'https://newrelic.com': 'newrelic.com',
  'https://marketplace.visualstudio.com': 'visual studio',
  'https://learn.newrelic.com': 'learn',
};

const withDefaults = (themeOptions) => {
  const { i18n = {}, relatedResources = {}, tessen = {} } = themeOptions;
  const { i18nextOptions = {} } = i18n;

  return {
    ...themeOptions,
    relatedResources: {
      ...relatedResources,
      labels: {
        ...DEFAULT_SITE_LABELS,
        ...(relatedResources.labels || {}),
      },
      swiftype: relatedResources.swiftype
        ? { limit: 5, refetch: false, ...relatedResources.swiftype }
        : false,
    },
    tessen: {
      minify: process.env.NODE_ENV !== 'development',
      ...tessen,
    },
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
