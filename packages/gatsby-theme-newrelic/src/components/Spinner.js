import React from 'react';
import PropTypes from 'prop-types';
import { css, keyframes } from '@emotion/react';

const spin = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const Spinner = ({ className, inline, size }) => (
  <div
    className={className}
    aria-label="Loading"
    aria-busy
    css={css`
      --spinner-size: ${size};

      display: inline-block;
      position: relative;
      height: ${inline ? 'var(--spinner-size, 1rem)' : '100%'};
      width: ${inline ? 'var(--spinner-size)' : '100%'};

      &:after {
        animation: ${spin} 0.5s linear infinite;
        border-radius: 50%;
        border-right: 1px solid transparent;
        border-top: 1px solid;
        content: '';
        left: calc(50% + 1px);
        margin-left: calc(var(--spinner-size) / 2 * -1);
        margin-top: calc(var(--spinner-size) / 2 * -1);
        position: absolute;
        top: calc(50% + 1px);
        width: var(--spinner-size);
        height: var(--spinner-size);
      }
    `}
  />
);

Spinner.propTypes = {
  className: PropTypes.string,
  inline: PropTypes.bool,
  size: PropTypes.string,
};

Spinner.defaultProps = {
  inline: false,
  size: '1rem',
};

export default Spinner;
