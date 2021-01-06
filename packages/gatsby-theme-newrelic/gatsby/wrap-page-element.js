/* global GATSBY_THEME_I18N_REACT_I18NEXT */
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

  const resources = i18nextOptions.ns
    .filter((name) => name !== themeNamespace)
    .reduce((resources, name) => {
      const themeMessages = themeSupportedLocales.includes(locale)
        ? require(`../src/i18n/translations/${locale}.json`)
        : {};
      const messages = require(`${GATSBY_THEME_I18N_REACT_I18NEXT}/${locale}/${name}.json`);

      return {
        ...resources,
        en: {
          ...resources.en,
          [themeNamespace]: themeMessages,
          [name]: messages,
        },
      };
    }, {});

  i18n.init({
    ...i18n.i18nextOptions,
    lng: locale,
    resources,
  });

  return (
    <I18nextProvider i18n={i18n}>
      <GlobalStyles />
      {element}
    </I18nextProvider>
  );
};

export default wrapPageElement;
