import React, { memo } from 'react';
import { css } from '@emotion/core';
import Icon from '../Icon';
import Key from './Key';

const Footer = memo(() => (
  <footer
    css={css`
      font-size: 0.75rem;
      display: flex;
      border-top: 1px solid var(--border-color);
      padding: 1rem var(--horizontal-spacing);
      background: var(--color-neutrals-100);
      grid-column: span 2;

      .dark-mode & {
        background: var(--color-dark-100);
        color: var(--color-dark-700);
      }

      @media screen and (max-width: 760px) {
        display: none;
      }
    `}
  >
    <div
      css={css`
        display: flex;
        align-items: center;
        margin-right: 1rem;
      `}
    >
      <Key>
        <Icon name="fe-corner-down-left" />
      </Key>
      Select
    </div>
    <div
      css={css`
        display: flex;
        align-items: center;
        margin-right: 1rem;
      `}
    >
      <Key>
        <Icon name="fe-arrow-up" />
        <Icon name="fe-arrow-down" />
      </Key>
      Navigate
    </div>
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <Key
        css={css`
          line-height: 1;
          font-family: var(--code-font);
        `}
      >
        esc
      </Key>
      Close
    </div>
  </footer>
));

export default Footer;
