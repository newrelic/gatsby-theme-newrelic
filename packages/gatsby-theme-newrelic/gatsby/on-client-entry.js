import getLocale from './src/utils/getLocale';

export const onClientEntry = (_, themeOptions) => {
  if (window.newrelic) {
    const mode = isDarkMode() ? 'dark' : 'light';
    const locale = getLocale(themeOptions, window.location);

    window.newrelic.setCustomAttribute('mode', mode);
    window.newrelic.setCustomAttribute('locale', locale);
  }
};

const isDarkMode = () => {
  const localStorageTheme = localStorage.getItem('darkMode');

  if (localStorageTheme) {
    return JSON.parse(localeStorageTheme);
  }

  return document.body.classList.contains('dark-mode');
};
