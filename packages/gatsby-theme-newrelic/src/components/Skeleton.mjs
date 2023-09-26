import React from 'react';
import PropTypes from 'prop-types';
import { css, keyframes } from '@emotion/react';

const flicker = keyframes`
  0% {
    background-color: var(--system-background-selected-low-contrast-light);
  }
  100% {
    background-color: var(--system-background-app-light);
  }
`;

const flickerDarkMode = keyframes`
  0% {
    background-color: var(--system-text-primary-light);
  }
  100% {
    background-color: var(--system-background-app-dark);
  }
`;

const Skeleton = ({ className }) => (
  <div
    className={className}
    css={css`
      animation: ${flicker} 1s linear infinite alternate;
      .dark-mode & {
        animation: ${flickerDarkMode} 1s linear infinite alternate;
      }
    `}
  />
);

Skeleton.propTypes = {
  className: PropTypes.string,
};

export default Skeleton;
