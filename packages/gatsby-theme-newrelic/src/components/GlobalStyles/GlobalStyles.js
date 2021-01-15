import React from 'react';
import { normalize } from 'polished';
import { Global, css } from '@emotion/core';
import colors from './colors';
import fonts from './fonts';
import themes from './themes';

const GlobalStyles = () => (
  <Global
    styles={css`
      ${normalize()}

      :root {
        --global-header-height: 36px;

        ${colors};
        ${fonts};
      }

      ${themes}

      * {
        box-sizing: border-box;
      }

      body {
        font-size: 16px;
        font-family: var(--primary-font-family);
        color: var(--primary-text-color);
        background-color: var(--primary-background-color);
        line-height: 1.5;
      }

      a {
        cursor: pointer;
        text-decoration: none;
        color: var(--link-color);

        &:hover {
          color: var(--link-hover-color);
        }
      }

      p {
        margin-top: 0;
        margin-bottom: 1rem;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-weight: 600;
        font-family: var(--primary-font-family);
        color: var(--heading-text-color);
      }

      ul {
        margin: 0;
        padding-left: 2rem;
      }

      code {
        font-family: var(--code-font);
      }

      *:not(pre) > code {
        padding: 0.2em 0.4em;
        border-radius: 3px;
        font-size: 85%;
      }

      blockquote {
        border-left: 0.25rem solid var(--border-color);
        padding: 0.94rem 0.31rem 1.25rem 1.25rem;
        margin: 1.56rem 3.13rem 1.56rem 1.25rem;
      }

      pre {
        margin: 0;
      }

      hr {
        border: none;
        border-bottom: 1px solid var(--divider-color);
      }
    `}
  />
);

export default GlobalStyles;
