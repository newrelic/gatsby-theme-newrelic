import React from 'react';
import { render, renderHook } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { getI18nConfig } from '../utils/config';
import {
  LocationProvider,
  createHistory,
  createMemorySource,
} from '@reach/router';
import LocaleProvider from '../components/LocaleProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import translations from '../i18n/translations/en.json';
import i18n from 'i18next';

const { themeNamespace, i18nextOptions } = getI18nConfig({});
const queryClient = new QueryClient();

export const renderWithTranslation = (component, options) => {
  i18n.init({
    ...i18nextOptions,
    lng: 'en',
    resources: {
      en: {
        [themeNamespace]: translations,
      },
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
    ...i18nextOptions,
    lng: locale,
    resources: {
      en: {
        [themeNamespace]: translations,
      },
    },
  });

  const history = createHistory(createMemorySource('/'));

  return render(
    <LocationProvider history={history}>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <LocaleProvider i18n={i18n}>{component}</LocaleProvider>
        </QueryClientProvider>
      </I18nextProvider>
    </LocationProvider>,
    options
  );
};

const defaultHistory = () => createHistory(createMemorySource('/'));

export const renderHookWithProviders = (
  hook,
  { locale = 'en', history = defaultHistory(), ...options } = {}
) => {
  i18n.init({
    ...i18nextOptions,
    lng: locale,
    resources: {
      en: {
        [themeNamespace]: translations,
      },
    },
  });

  const wrapper = ({ children }) => (
    <LocationProvider history={history}>
      <I18nextProvider i18n={i18n}>
        <LocaleProvider i18n={i18n}>{children}</LocaleProvider>
      </I18nextProvider>
    </LocationProvider>
  );

  return renderHook(hook, { wrapper, ...options });
};
