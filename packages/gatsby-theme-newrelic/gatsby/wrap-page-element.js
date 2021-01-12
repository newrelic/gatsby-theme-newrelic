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
  const { i18n: i18nConfig } = withDefaults(themeOptions);
  const locale = props.pageContext.locale || defaultLocale.locale;

  i18n.init({
    ...i18nConfig.i18nextOptions,
    lng: locale,
    resources: getResources(i18nConfig, locale),
  });

  return (
    <I18nextProvider i18n={i18n}>
      <GlobalStyles />
      {element}
    </I18nextProvider>
  );
};

const getResources = (i18nConfig, locale) => {
  const namespaces = i18nConfig.i18nextOptions.ns.filter(
    (name) => name !== themeNamespace
  );

  const defaultResources = getResourcesForLocale(
    defaultLocale.locale,
    namespaces
  );

  if (locale === defaultLocale.locale) {
    return defaultResources;
  }

  return { ...defaultResources, ...getResourcesForLocale(locale, namespaces) };
};

const getResourcesForLocale = (locale, namespaces) =>
  namespaces.reduce(
    (resources, namespace) => ({
      ...resources,
      [locale]: {
        ...resources[locale],
        [themeNamespace]: themeSupportedLocales.includes(locale)
          ? require(`../src/i18n/translations/${locale}.json`)
          : {},
        [namespace]: GATSBY_THEME_NEWRELIC_I18N_PATH
          ? require(`${GATSBY_THEME_NEWRELIC_I18N_PATH}/${locale}/${namespace}.json`)
          : {},
      },
    }),
    {}
  );

export default wrapPageElement;
