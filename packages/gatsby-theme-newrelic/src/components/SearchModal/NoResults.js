import React from 'react';
import { css } from '@emotion/react';
import Link from '../Link';

const NoResults = () => (
  <div
    css={css`
      display: flex;
      padding: 1rem var(--horizontal-spacing);
      background: var(--color-neutrals-100);
      grid-column: span 2;
      align-items: center;
      flex-direction: column;

      .dark-mode & {
        background: var(--color-dark-100);
        color: var(--color-dark-700);
      }
    `}
  >
    <h5
      css={css`
        font-size: 0.875rem;
      `}
    >
      We didn't find any results
    </h5>
    <p
      css={css`
        font-size: 0.75rem;
        max-width: 512px;
        line-height: 1.25;
        text-align: center;
      `}
    >
      Try searching for different keywords or start a conversation on our{' '}
      <Link to="https://discuss.newrelic.com/">Explorers Hub</Link>.
    </p>
  </div>
);

export default NoResults;
