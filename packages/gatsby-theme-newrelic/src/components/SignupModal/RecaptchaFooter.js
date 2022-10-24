import React from 'react';
import { css } from '@emotion/react';

const RecaptchaFooter = () => {
  return (
    <div
      css={css`
        p {
          font-size: 0.625rem;
        }
      `}
    >
      <p>
        This site is protected by reCAPTCHA and the Google{' '}
        <a href="https://policies.google.com/privacy">Privacy Policy</a> and{' '}
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </p>
    </div>
  );
};

export default RecaptchaFooter;
