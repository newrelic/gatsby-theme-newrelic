import React from 'react';
import { css } from '@emotion/core';

const Logo = () => (
  <div
    css={css`
      font-size: 1.4rem;

      &:hover {
        color: var(--secondary-text-hover-color);
      }
    `}
  >
    New Relic
  </div>
);

export default Logo;
