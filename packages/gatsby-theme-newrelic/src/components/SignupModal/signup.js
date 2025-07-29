import { getUTMValues } from './utmCookie';
// import Cookies from 'js-cookie'; // Commented out as no longer needed for segment tracking
import { addPageAction } from '../../utils/nrBrowserAgent';

export const CAPTCHA_ACTION = 'v1/signups/create';

const recaptchaReady = () => {
  return new Promise((resolve, reject) => {
    try {
      window.grecaptcha.ready(resolve);
    } catch (err) {
      reject(err);
    }
  });
};

// Commented out to disable segment tracking and avoid edge function costs
// const getSegmentAnonymousId = () => Cookies.get('ajs_anonymous_id') || 'null';

export const getUriParameters = () =>
  new URLSearchParams(window.location.search);

const generateRecaptchaToken = () => {
  // turn the recaptcha thenable into an actual promise
  return new Promise((resolve, reject) => {
    window.grecaptcha
      .execute(window._nr_signup.reCaptchaToken, {
        action: CAPTCHA_ACTION,
      })
      .then(resolve, reject);
  });
};

const createAccountRequestInternal = (name, email, recaptcha) => {
  const jsonBody = {
    v1_signup: {
      name,
      email,
      metadata: {
        ...getUTMValues(),
        ...getUriParameters(),
        name,
        email,
        // anonymousId: getSegmentAnonymousId(), // Commented out to disable segment tracking
      },
    },
    'g-recaptcha-response': recaptcha,
  };
  const signupUrl = `${window._nr_signup.signupReceiverUrl}/v1/signups`;
  return fetch(signupUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(jsonBody),
  });
};

const createAccountError = (attributes) => {
  addPageAction({
    eventName: 'failedSignup',
    category: 'SignupForm',
    ...attributes,
  });

  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable-next-line no-console */
    console.error(
      `Failed to create account for user ${attributes.email}`,
      attributes
    );
  }
};

/**
 * Asynchronously attempt to create a New Relic account.
 * Expects `input` object to have `email` and `name` properties.
 * Resolves with the organization id from the response JSON
 * if the request succeeds, otherwise resolves with `false`.
 */
const createAccountRequest = async (input, event) => {
  const { name, email } = input;
  addPageAction({
    ...event,
    ...input,
  });
  let recaptchaToken;

  try {
    await recaptchaReady();
    recaptchaToken = await generateRecaptchaToken();
  } catch (err) {
    createAccountError({ name, email, error: err, type: 'recaptchaError' });
    return false;
  }

  try {
    const response = await createAccountRequestInternal(
      name,
      email,
      recaptchaToken
    );
    const responseJson = await response.json();

    if (!response.ok) {
      createAccountError({
        name,
        email,
        error: new Error(`Non-2xx signUp result: ${response.statusText}`),
        type: 'signUpReceiverError',
      });
      return false;
    }

    addPageAction({
      eventName: 'successfulSignup',
      category: 'SignupForm',
      ...input,
      organization_id: responseJson.organization_id,
    });
    return responseJson.organization_id;
  } catch (err) {
    createAccountError({
      name,
      email,
      error: err,
      type: 'signUpReceiverError',
    });
  }

  return false;
};

export { createAccountRequest };
