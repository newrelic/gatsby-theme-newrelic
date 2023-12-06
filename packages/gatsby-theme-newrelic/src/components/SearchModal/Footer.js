import React, { memo } from 'react';
import { css } from '@emotion/react';
import Icon from '../Icon';
import Key from './Key';

const Footer = memo(() => (
  <footer
    css={css`
      font-size: 0.75rem;
      display: flex;
      justify-content: center;
      border-top: 1px solid var(--border-color);
      padding: 1rem var(--horizontal-spacing);
      grid-column: span 2;
      background: var(--primary-background-color);
      .dark-mode & {
        background: var(--primary-contrast-color);
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
