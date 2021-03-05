import React from 'react';
import { render } from '@testing-library/react';
import { themeNamespace } from '../utils/defaultOptions';
import { I18nextProvider } from 'react-i18next';
import {
  LocationProvider,
  createHistory,
  createMemorySource,
} from '@reach/router';
import LocaleProvider from '../components/LocaleProvider';
import translations from '../i18n/translations/en.json';
import i18n from 'i18next';

export const renderWithTranslation = (component, options) => {
  i18n.init({
    defaultNS: 'translation',
    initImmediate: false,
    fallbackLng: 'en',
    lng: 'en',
    ns: [themeNamespace, 'translation'],
    resources: {
      en: {
        [themeNamespace]: translations,
      },
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

  return render(
    <I18nextProvider i18n={i18n}>
      <LocaleProvider i18n={i18n}>{component}</LocaleProvider>
    </I18nextProvider>,
    options
  );
};

export const renderWithProviders = (
  component,
  { locale = 'en', ...options } = {}
) => {
  i18n.init({
    defaultNS: 'translation',
    initImmediate: false,
    fallbackLng: 'en',
    lng: locale,
    ns: [themeNamespace, 'translation'],
    resources: {
      en: {
        [themeNamespace]: translations,
      },
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

  const history = createHistory(createMemorySource('/'));

  return render(
    <LocationProvider history={history}>
      <I18nextProvider i18n={i18n}>
        <LocaleProvider i18n={i18n}>{component}</LocaleProvider>
      </I18nextProvider>
    </LocationProvider>,
    options
  );
};
