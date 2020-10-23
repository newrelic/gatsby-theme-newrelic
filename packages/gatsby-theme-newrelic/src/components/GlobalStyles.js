import React from 'react';
import { normalize } from 'polished';
import { Global, css } from '@emotion/core';

const colors = css`
  --color-black: #000;
  --color-white: #fff;
  --color-neutrals-050: #fafbfb;
  --color-neutrals-100: #f4f5f5;
  --color-neutrals-200: #edeeee;
  --color-neutrals-300: #e3e4e4;
  --color-neutrals-400: #d5d7d7;
  --color-neutrals-500: #b9bdbd;
  --color-neutrals-600: #8e9494;
  --color-neutrals-700: #464e4e;
  --color-neutrals-800: #2a3434;
  --color-neutrals-900: #000d0d;

  --color-dark-050: #131f23;
  --color-dark-100: #22353c;
  --color-dark-200: #233940;
  --color-dark-300: #2a4249;
  --color-dark-400: #37484e;
  --color-dark-500: #495b5c;
  --color-dark-600: #7c9799;
  --color-dark-700: #a5bbbd;
  --color-dark-800: #cedede;
  --color-dark-900: #e8eaea;

  --color-brand-050: #f1fbfc;
  --color-brand-100: #d2f3f6;
  --color-brand-200: #85e0e7;
  --color-brand-300: #70ccd3;
  --color-brand-400: #00b3c3;
  --color-brand-500: #008c99;
  --color-brand-600: #006c75;
  --color-brand-700: #00484e;
  --color-brand-800: #003539;
  --color-brand-900: #002123;

  --color-red-050: #fcf3f3;
  --color-red-100: #fce9e9;
  --color-red-200: #f7c8c6;
  --color-red-300: #ec847e;
  --color-red-400: #e56059;
  --color-red-500: #d8211a;
  --color-red-600: #8e0000;
  --color-red-700: #600;
  --color-red-800: #390000;
  --color-red-900: #1b0000;

  --color-green-050: #f1fdf2;
  --color-green-100: #d1f7d9;
  --color-green-200: #7fe898;
  --color-green-300: #22e749;
  --color-green-400: #00d100;
  --color-green-500: #00a500;
  --color-green-600: #008200;
  --color-green-700: #004d00;
  --color-green-800: #0d290a;
  --color-green-900: #021200;

  --color-yellow-050: #f9faec;
  --color-yellow-100: #fff9cc;
  --color-yellow-200: #fff089;
  --color-yellow-300: #f3e66a;
  --color-yellow-400: #f0d100;
  --color-yellow-500: #ccb100;
  --color-yellow-600: #8a7800;
  --color-yellow-700: #473e00;
  --color-yellow-800: #262100;
  --color-yellow-900: #141100;

  --color-teal-050: #f1fbfc;
  --color-teal-100: #d2f3f6;
  --color-teal-200: #85e0e7;
  --color-teal-300: #70ccd3;
  --color-teal-400: #00b3c3;
  --color-teal-500: #008c99;
  --color-teal-600: #006c75;
  --color-teal-700: #00484e;
  --color-teal-800: #003539;
  --color-teal-900: #002123;

  // https://www.nordtheme.com/docs/colors-and-palettes
  --color-nord-0: #2e3440;
  --color-nord-1: #3b4252;
  --color-nord-2: #434c5e;
  --color-nord-3: #4c566a;
  --color-nord-4: #d8dee9;
  --color-nord-5: #e5e9f0;
  --color-nord-6: #eceff4;
  --color-nord-7: #8fbcbb;
  --color-nord-8: #88c0d0;
  --color-nord-9: #81a1c1;
  --color-nord-10: #5e81ac;
  --color-nord-11: #bf616a;
  --color-nord-12: #d08770;
  --color-nord-13: #ebcb8b;
  --color-nord-14: #a3be8c;
  --color-nord-15: #b48ead;
`;

const lightMode = css`
  .light-mode {
    --primary-background-color: var(--color-white);
    --primary-text-color: var(--color-neutrals-700);
    --primary-text-hover-color: var(--color-neutrals-600);

    --secondary-background-color: var(--color-neutrals-100);
    --secondary-text-color: var(--color-neutrals-600);
    --secondary-text-hover-color: var(--color-neutrals-700);

    --tertiary-background-color: var(--color-neutrals-200);

    --accent-text-color: var(--color-neutrals-500);
    --link-color: var(--color-brand-600);
    --link-hover-color: var(--color-brand-500);
    --border-color: var(--color-neutrals-400);
    --border-hover-color: var(--color-neutrals-500);
    --divider-color: var(--color-neutrals-100);
    --heading-text-color: var(--color-neutrals-900);

    --callout-caution-background-color: #fce9e935;
    --callout-important-background-color: #fff9cc30;
    --callout-tip-background-color: #d1f7d925;
  }
`;

const darkMode = css`
  .dark-mode {
    --primary-background-color: #1c2a2f;
    --primary-text-color: var(--color-dark-700);
    --primary-text-hover-color: var(--color-dark-900);

    --secondary-background-color: var(--color-dark-050);
    --secondary-text-color: var(--color-dark-600);
    --secondary-text-hover-color: var(--color-dark-700);

    --tertiary-background-color: var(--color-dark-100);

    --accent-text-color: var(--color-dark-600);
    --link-color: var(--color-brand-300);
    --link-hover-color: var(--color-brand-050);
    --border-color: var(--color-dark-400);
    --border-hover-color: var(--color-dark-500);
    --divider-color: var(--color-dark-200);
    --heading-text-color: var(--color-dark-900);

    --callout-caution-background-color: #1b000020;
    --callout-important-background-color: #14110020;
    --callout-tip-background-color: #02120020;
  }
`;

const fonts = css`
  --primary-font-family: 'open sans', sans-serif;
  --secondary-font-family: 'effra', sans-serif;
  --tertiary-font-family: 'Ovo', serif;
  --code-font: 'Menlo', 'Consolas', monospace;
`;

const global = css`
  ::placeholder {
    color: var(--color-neutrals-500);

    .dark-mode & {
      color: var(--color-dark-500);
    }
  }
`;

const reset = css`
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
`;

const GlobalStyles = () => (
  <Global
    styles={css`
      ${normalize()}

      :root {
        ${colors};
        ${fonts};
      }

      ${lightMode}
      ${darkMode}
      ${global}
      ${reset}
    `}
  />
);

export default GlobalStyles;
