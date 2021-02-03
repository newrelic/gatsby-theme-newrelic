import React from 'react';
import PropTypes from 'prop-types';
import { normalize } from 'polished';
import { Global, css } from '@emotion/core';
import colors from './colors';
import typography from './typography';
import themes from './themes';
import variables from './variables';
import shadows from './shadows';

const GlobalStyles = ({ layout }) => (
  <Global
    styles={css`
      ${normalize()}

      :root {
        ${variables};
        ${colors};
        ${typography};
        ${shadows};

        --site-max-width: ${layout.maxWidth};
        --site-content-padding: ${layout.contentPadding};
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
        transition: 0.2s ease-out;

        &:hover {
          color: var(--link-hover-color);
        }
      }

      p {
        margin-top: 0;
        margin-bottom: var(--paragraph-spacing);
        line-height: 1.75;

        &:last-child {
          margin-bottom: 0;
        }
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 0;
        font-weight: 600;
        color: var(--heading-text-color);
        scroll-margin-top: calc(
          var(--global-header-height) + var(--site-content-padding)
        );

        // additional styles provided by gatsby-remark-autolink-headers
        .anchor svg {
          opacity: 0;
          transition: opacity 0.2s ease-out;
        }

        &:hover .anchor svg,
        .anchor:focus svg {
          opacity: 1;
        }

        code {
          font-size: inherit;
        }

        var,
        mark {
          font-size: inherit;
        }
      }

      h1 {
        line-height: 1.15;
        font-weight: bold;
        margin-bottom: 1rem;
      }

      h2 {
        line-height: 1.25;
        margin-bottom: 1.25rem;
        font-weight: 600;
      }

      h3 {
        margin-bottom: 1rem;
        font-weight: 600;
      }

      h4,
      h5,
      h6 {
        margin-bottom: 0.5rem;
        font-weight: 600;
      }

      ol,
      ul {
        margin: 0;
        padding-left: 1.75rem;

        > li {
          margin: 0.5rem 0;
        }
      }

      ul > li::marker {
        color: var(--color-neutrals-500);

        .dark-mode & {
          color: var(--color-dark-500);
        }
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
        border-left: 0.25rem solid var(--color-neutrals-700);
        padding: 0.25rem 1rem;
        margin: 0;
        font-style: italic;

        .dark-mode & {
          border-left-color: var(--color-dark-700);
        }
      }

      pre {
        margin: 0;
      }

      hr {
        border: none;
        border-bottom: 1px solid var(--divider-color);
      }

      var,
      mark {
        line-height: 1.25;
        display: inline;
        padding: 0.125rem;
        border-radius: 0.125rem;
        font-size: 85%;
      }

      var {
        font-style: normal;
        transition: all 0.15s ease-out;
        color: var(--color-neutrals-900);
        background: var(--color-brand-100);

        .dark-mode & {
          color: var(--color-white);
          background: var(--color-brand-600);
        }
      }

      mark {
        background: var(--color-yellow-100);
        color: var(--color-neutrals-900);

        .dark-mode & {
          background: var(--color-yellow-200);
        }
      }

      a:hover var {
        background: var(--color-brand-200);

        .dark-mode & {
          background: var(--color-brand-500);
        }
      }
    `}
  />
);

GlobalStyles.propTypes = {
  layout: PropTypes.shape({
    contentPadding: PropTypes.string,
    maxWidth: PropTypes.string,
  }),
};

export default GlobalStyles;
