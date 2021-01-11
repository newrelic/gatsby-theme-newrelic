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
import { useStaticQuery, graphql } from 'gatsby';
import LocaleProvider from '../src/components/LocaleProvider';

const wrapPageElement = ({ element, props }, themeOptions) => {
  const { i18n: i18nConfig } = withDefaults(themeOptions);
  const locale = getLocale(props, themeOptions);

  console.log(props);
  const {
    allLocale: { nodes: locales },
  } = useStaticQuery(graphql`
    query {
      allLocale {
        nodes {
          name
          locale
          localizedPath
          isDefault
        }
      }
    }
  `);
  console.log(locales);
  i18n.init({
    ...i18nConfig.i18nextOptions,
    lng: locale,
    resources: getResources(i18nConfig, locale),
  });

  return (
    <I18nextProvider i18n={i18n}>
      <LocaleProvider i18n={i18n}>
        <GlobalStyles />
        {element}
      </LocaleProvider>
    </I18nextProvider>
  );
};

const getLocale = (props, themeOptions) => {
  const { pageContext, location } = props;
  const { i18n = {} } = themeOptions;

  // For some reason we enter an infinite loop if we try and create localized
  // 404 pages in gatsby-node.js. This is a hack that will use the current page
  // location to find the locale to ensure the 404 page is translated
  // accordingly.
  if (!pageContext.fileRelativePath.match(/404/)) {
    return pageContext.locale || defaultLocale.locale;
  }

  const [, base] = location.pathname.split('/');
  const locale =
    (i18n.additionalLocales || []).find(({ locale }) => locale === base) ||
    defaultLocale;

  return locale.locale;
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
