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

  --color-brand-050: #f7ffff;
  --color-brand-100: #edffff;
  --color-brand-400: #70ccd2;
  --color-brand-800: #007e8a;
  --color-brand-900: #005054;

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
    --primary-surface-background-color: var(--color-white);

    --secondary-background-color: var(--color-neutrals-100);
    --secondary-text-color: var(--color-neutrals-600);
    --secondary-text-hover-color: var(--color-neutrals-700);
    --secondary-surface-background-color: var(--color-white);

    --tertiary-background-color: var(--color-neutrals-200);

    --accent-text-color: var(--color-neutrals-500);
    --link-color: var(--color-brand-800);
    --border-color: var(--color-neutrals-400);
    --border-hover-color: var(--color-neutrals-500);
    --divider-color: var(--color-neutrals-100);
    --heading-text-color: var(--color-neutrals-900);
    --boxshadow: 0 0.24905px 0.55345px rgba(0, 0, 0, 0.00562291),
      0 0.59851px 1.33002px rgba(0, 0, 0, 0.00807786),
      0 1.12694px 2.50431px rgba(0, 0, 0, 0.01),
      0 2.01027px 4.46726px rgba(0, 0, 0, 0.0119221),
      0 3.75998px 8.35552px rgba(0, 0, 0, 0.0143771),
      0 9px 20px rgba(0, 0, 0, 0.02);
  }
`;

const darkMode = css`
  .dark-mode {
    --primary-background-color: #1c2a2f;
    --primary-text-color: var(--color-dark-700);
    --primary-text-hover-color: var(--color-dark-900);
    --primary-surface-background-color: var(--primary-background-color);

    --secondary-background-color: var(--color-dark-050);
    --secondary-text-color: var(--color-dark-600);
    --secondary-text-hover-color: var(--color-dark-700);
    --secondary-surface-background-color: var(--color-dark-100);

    --tertiary-background-color: var(--color-dark-100);

    --accent-text-color: var(--color-dark-600);
    --link-color: var(--color-brand-400);
    --border-color: var(--color-dark-400);
    --border-hover-color: var(--color-dark-500);
    --divider-color: var(--color-dark-200);
    --heading-text-color: var(--color-dark-900);
    --boxshadow: 0 1.66035px 2.10311px rgba(3, 15, 16, 0.0393604),
      0 3.99006px 5.05408px rgba(3, 15, 16, 0.056545),
      0 7.51293px 9.51638px rgba(3, 15, 16, 0.07),
      0 13.4018px 16.9756px rgba(3, 15, 16, 0.083455),
      0 25.0666px 31.751px rgba(3, 15, 16, 0.10064),
      0 60px 76px rgba(3, 15, 16, 0.14);
  }
`;

const fonts = css`
  --primary-font-family: 'open sans', sans-serif;
  --secondary-font-family: 'effra', sans-serif;
  --tertiary-font-family: 'Ovo', serif;
  --code-font: 'Menlo', 'Consolas', monospace;
`;

const global = css`
  --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);

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

  input[type='text'] {
    border: 1px solid var(--border-color);
    border-radius: 0.25rem;
    height: 2rem;
    box-sizing: border-box;
    transition: all 0.1s var(--ease-out-quad);

    &:hover {
      border-color: var(--border-hover-color);
    }
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
