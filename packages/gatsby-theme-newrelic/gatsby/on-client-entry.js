import getLocale from './utils/getLocale';

const onClientEntry = (_, themeOptions) => {
  if (window.newrelic) {
    const mode = isDarkMode() ? 'dark' : 'light';
    const locale = getLocale({ location: window.location }, themeOptions);

    window.newrelic.setCustomAttribute('mode', mode);
    window.newrelic.setCustomAttribute('locale', locale);
  }
};

const isDarkMode = () => {
  const localStorageTheme = localStorage.getItem('darkMode');

  if (localStorageTheme) {
    return JSON.parse(localStorageTheme);
  }

  return document.body.classList.contains('dark-mode');
};

export default onClientEntry;
