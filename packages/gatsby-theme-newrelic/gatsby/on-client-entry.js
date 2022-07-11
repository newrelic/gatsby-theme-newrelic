import getLocale from './utils/getLocale';
import isLocalStorageAvailable from '../src/utils/isLocalStorageAvailable';

const onClientEntry = (_, themeOptions) => {
  if (window.newrelic) {
    const mode = isDarkMode() ? 'dark' : 'light';
    const locale = getLocale({ location: window.location }, themeOptions);

    window.newrelic.setCustomAttribute('mode', mode);
    window.newrelic.setCustomAttribute('locale', locale);
  }

  if (themeOptions.signup && themeOptions.tessen.segmentWriteKey) {
    window._nr_signup = {
      environment: `${themeOptions.signup.environment}`,
      reCaptchaToken: `${themeOptions.signup.reCaptchaToken}`,
      signupReceiverUrl: `${themeOptions.signup.signupUrl}`,
      segmentKey: `${themeOptions.tessen.segmentWriteKey}`,
    };
  }
};

const isDarkMode = () => {
  if (isLocalStorageAvailable()) {
    const localStorageTheme = localStorage.getItem('darkMode');

    if (localStorageTheme) {
      return JSON.parse(localStorageTheme);
    }
  }

  return document.body.classList.contains('dark-mode');
};

export default onClientEntry;
