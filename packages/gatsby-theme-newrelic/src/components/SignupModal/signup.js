import { getUTMValues } from './utmCookie';
import Cookies from 'js-cookie';

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

const getSegmentAnonymousId = () =>
  JSON.parse(Cookies.get('ajs_anonymous_id') || 'null');

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
        anonymousId: getSegmentAnonymousId(),
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

const createAccountError = (attributes, tessen) => {
  console.log(attributes);
  tessen.track({
    eventName: 'failedSignup',
    category: 'SignupForm',
    ...attributes,
  });
};

const createAccountRequest = async (input, tessen) => {
  const { name, email } = input;
  tessen.track({
    eventName: 'attemptedSignup',
    category: 'SignupForm',
    ...input,
  });
  let recaptchaToken;

  try {
    await recaptchaReady();
    recaptchaToken = await generateRecaptchaToken();
  } catch (err) {
    createAccountError(
      { name, email, error: err, type: 'recaptchaError' },
      tessen
    );
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
      createAccountError(
        {
          name,
          email,
          error: new Error(`Non-2xx signUp result: ${response.statusText}`),
          type: 'signUpReceiverError',
        },
        tessen
      );
      return false;
    }

    tessen.track({
      eventName: 'successfulSignup',
      category: 'SignupForm',
      ...input,
      organization_id: responseJson.organization_id,
    });
    return responseJson.organization_id;
  } catch (err) {
    createAccountError(
      { name, email, error: err, type: 'signUpReceiverError' },
      tessen
    );
  }

  return false;
};

export { createAccountRequest };
