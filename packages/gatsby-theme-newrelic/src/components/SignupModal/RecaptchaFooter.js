import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import cx from 'classnames';

const RecaptchaFooter = ({ className }) => {
  return (
    <div
      className={cx(className && className)}
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

RecaptchaFooter.propTypes = {
  className: PropTypes.string,
};

export default RecaptchaFooter;
