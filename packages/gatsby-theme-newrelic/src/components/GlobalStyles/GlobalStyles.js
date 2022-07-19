import React from 'react';
import PropTypes from 'prop-types';
import { normalize } from 'polished';
import { Global, css } from '@emotion/react';
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
        font-family: var(--primary-font-family), sans-serif;
        color: var(--primary-text-color);
        background-color: var(--primary-background-color);
        line-height: 1.5;
      }

      a {
        cursor: pointer;
        color: var(--link-color);

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
        margin-bottom: 0.75rem;
        font-weight: 600;
      }

      h3 {
        margin-bottom: 0.75rem;
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
        color: var(--system-text-secondary-light);
        .dark-mode & {
          color: var(--system-text-secondary-dark);
        }
      }

      ul ul li::marker {
        color: var(--color-black);
        .dark-mode & {
          color: var(--color-white);
        }
      }

      code,
      var {
        font-family: var(--code-font);
        white-space: pre-wrap;
      }

      *:not(pre) > code,
      var,
      mark {
        padding: 0.2em 0.4em;
        border-radius: 3px;
        font-size: 85%;
        word-break: break-word;
      }

      blockquote {
        border-left: 0.25rem solid var(--secondary-text-color);
        color: var(--secondary-text-color);
        padding: 0.25rem 1rem;
        margin: 0;
        font-style: italic;
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
      }

      var {
        font-style: normal;
      }

      mark {
        background: var(--code-console-text-highlight);
      }

      figcaption {
        font-size: 0.75rem;
        color: var(--accent-text-color);
      }

      .gatsby-resp-image-wrapper,
      .gatsby-resp-image-image,
      .gatsby-resp-image-background-image {
        border-radius: 0.25rem;
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
