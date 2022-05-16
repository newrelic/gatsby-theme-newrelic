import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Key = ({ className, children }) => (
  <span
    className={className}
    css={css`
      display: inline-flex;
      border-radius: 0.25rem;
      padding: 0.25rem;
      margin-right: 0.5rem;
      background: var(--primary-hover-color);

      .dark-mode & {
        background: var(--system-border-regular-dark);
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
