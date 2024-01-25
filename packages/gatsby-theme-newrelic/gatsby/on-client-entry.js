import getLocale from './utils/getLocale';
import isLocalStorageAvailable from '../src/utils/isLocalStorageAvailable';

const onClientEntry = (_, themeOptions) => {
  if (window.newrelic) {
    const mode = isDarkMode() ? 'dark' : 'light';
    const locale = getLocale({ location: window.location }, themeOptions);

    window.newrelic.setCustomAttribute('mode', mode);
    window.newrelic.setCustomAttribute('locale', locale);
  }

  if (themeOptions.signup) {
    window._nr_signup = {
      environment: `${themeOptions.signup.environment}`,
      reCaptchaToken: `${themeOptions.signup.reCaptchaToken}`,
      signupReceiverUrl: `${themeOptions.signup.signupUrl}`,
    };
  }
  if (themeOptions.feedback) {
    window._nr_feedback = {
      environment: `${themeOptions.feedback.environment}`,
      reCaptchaToken: `${themeOptions.feedback.reCaptchaToken}`,
    };
  }

  if (themeOptions.newRelicRequestingServicesHeader) {
    window.newRelicRequestingServicesHeader =
      themeOptions.newRelicRequestingServicesHeader;
  }
};

const isDarkMode = () => {
  if (isLocalStorageAvailable()) {
    const localStorageTheme = localStorage.getItem('darkMode');
    if (localStorageTheme === 'true' || localStorageTheme === 'false') {
      return JSON.parse(localStorageTheme);
    }
  }
  window.localStorage.setItem(
    'darkMode',
    document.body.classList.contains('dark-mode')
  );
  return document.body.classList.contains('dark-mode');
};

export default onClientEntry;
