/* global GATSBY_THEME_NEWRELIC_I18N_PATH */
import React from 'react';
import GlobalStyles from '../src/components/GlobalStyles';
import i18n from 'i18next';
import {
  defaultLocale,
  withDefaults,
  themeNamespace,
  themeSupportedLocales,
} from '../src/utils/defaultOptions';
import { I18nextProvider } from 'react-i18next';

const wrapPageElement = ({ element, props }, themeOptions) => {
  const {
    i18n: { i18nextOptions },
  } = withDefaults(themeOptions);

  const locale = props.pageContext.locale || defaultLocale.locale;

  i18n.init({
    ...i18nextOptions,
    lng: locale,
    resources: getResources(i18nextOptions, locale),
  });

  return (
    <I18nextProvider i18n={i18n}>
      <GlobalStyles />
      {element}
    </I18nextProvider>
  );
};

const getResources = (config, locale) => {
  const namespaces = config.ns.filter((name) => name !== themeNamespace);

  const defaultResources = namespaces.reduce(
    (resources, name) => ({
      ...resources,
      [defaultLocale.locale]: {
        ...resources[defaultLocale.locale],
        [themeNamespace]: getThemeNamespace(defaultLocale.locale),
        [name]: require(`${GATSBY_THEME_NEWRELIC_I18N_PATH}/${locale}/${name}.json`),
      },
    }),
    {}
  );

  if (locale === defaultLocale.locale) {
    return defaultResources;
  }

  return namespaces.reduce(
    (resources, name) => ({
      ...resources,
      [locale]: {
        ...resources[locale],
        [themeNamespace]: getThemeNamespace(locale),
        [name]: require(`${GATSBY_THEME_NEWRELIC_I18N_PATH}/${locale}/${name}.json`),
      },
    }),
    defaultResources
  );
};

const getThemeNamespace = (locale) =>
  themeSupportedLocales.includes(locale)
    ? require(`../src/i18n/translations/${locale}.json`)
    : {};

export default wrapPageElement;
