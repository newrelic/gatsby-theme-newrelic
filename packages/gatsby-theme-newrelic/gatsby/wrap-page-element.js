/* global GATSBY_THEME_NEWRELIC_I18N_PATH */
import React from 'react';
import GlobalStyles from '../src/components/GlobalStyles';
import i18n from 'i18next';
import { getI18nConfig } from '../src/utils/config';
import { I18nextProvider } from 'react-i18next';
import LocaleProvider from '../src/components/LocaleProvider';
import getLocale from './utils/getLocale';

const wrapPageElement = ({ element, props }, themeOptions) => {
  const { layout } = themeOptions;
  const { location, pageContext } = props;
  const i18nConfig = getI18nConfig(themeOptions);
  const locale = pageContext.locale
    ? pageContext.locale
    : getLocale({ location }, themeOptions);

  i18n.init({
    ...i18nConfig.i18nextOptions,
    lng: locale,
    resources: getResources(i18nConfig, locale),
  });

  return (
    <I18nextProvider i18n={i18n}>
      <LocaleProvider i18n={i18n}>
        <GlobalStyles layout={layout} />
        {element}
      </LocaleProvider>
    </I18nextProvider>
  );
};

const getResources = (i18nConfig, locale) => {
  const { defaultLocale, themeNamespace } = i18nConfig;
  const namespaces = i18nConfig.i18nextOptions.ns.filter(
    (name) => name !== themeNamespace
  );

  const defaultResources = getResourcesForLocale({
    locale: defaultLocale.locale,
    namespaces,
    i18nConfig,
  });

  if (locale === defaultLocale.locale) {
    return defaultResources;
  }

  return {
    ...defaultResources,
    ...getResourcesForLocale({ locale, namespaces, i18nConfig }),
  };
};

const getResourcesForLocale = ({ locale, namespaces, i18nConfig }) => {
  const { themeNamespace, themeSupportedLocales } = i18nConfig;

  return namespaces.reduce(
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
};

export default wrapPageElement;
