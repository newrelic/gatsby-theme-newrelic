import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Key = ({ className, children }) => (
  <span
    className={className}
    css={css`
      display: inline-flex;
      border-radius: 0.25rem;
      padding: 0.25rem;
      margin-right: 0.5rem;
      background: var(--color-neutrals-300);

      .dark-mode & {
        background: var(--color-dark-400);
      }
    `}
  >
    {children}
  </span>
);

Key.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Key;
