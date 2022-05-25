import React from 'react';
import { css } from '@emotion/react';

const RecaptchaFooter = () => {
  return (
    <p
      css={css`
        font-size: 0.625rem;
        margin-top: 0.5rem;
      `}
    >
      This site is protected by reCAPTCHA and the Google{' '}
      <a href="https://policies.google.com/privacy">Privacy Policy</a> and{' '}
      <a href="https://policies.google.com/terms">Terms of Service</a> apply.
    </p>
  );
};

export default RecaptchaFooter;
