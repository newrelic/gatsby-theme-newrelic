import React from 'react';
import { css } from '@emotion/core';
import Link from '../Link';

const NoResults = () => (
  <div
    css={css`
      display: flex;
      border-top: 1px solid var(--border-color);
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
        text-transform: uppercase;
      `}
    >
      No Results Found
    </h5>
    <p
      css={css`
        font-size: 0.75rem;
        max-width: 512px;
        line-height: 1.25;
        text-align: center;
      `}
    >
      Make a{' '}
      <Link to="https://github.com/newrelic/docs-website/issues/new?assignees=&labels=content&template=content-issue.md&title=Summarize+your+docs+request">
        request
      </Link>{' '}
      for new documentation or start a conversation on our{' '}
      <Link to="https://discuss.newrelic.com/">Explorer's Hub</Link>!
    </p>
  </div>
);

export default NoResults;
