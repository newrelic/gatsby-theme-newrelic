import { css } from '@emotion/react';
import { rgba } from 'polished';

export default css`
  --color-white: #ffffff;
  --color-black: #000000;

  --system-text-primary-light: #293338;
  --system-text-secondary-light: #535e65;
  --system-text-secondary-inverted-light: #cdd3d5;
  --system-text-muted-light: #6b757b;
  --system-background-app-light: #f3f4f4;
  --system-background-surface-1-light: #ffffff;
  --system-background-muted-light: #dcdede;
  --system-border-strong-light: #cdd3d5;
  --system-background-selected-low-contrast-light: #e8e8e8;

  --system-text-primary-dark: #e9ecec;
  --system-text-secondary-dark: #d0d6d7;
  --system-text-secondary-inverted-dark: #d0d6d7;
  --system-text-disabled-dark: #7b838a;
  --system-background-app-dark: #0d1212;
  --system-background-surface-1-dark: #182125;
  --system-background-hover-dark: #2a363c;
  --system-border-regular-dark: #3a444b;
  --system-background-selected-low-contrast-dark: #404b53;
  --system-background-floating-dark: #3a444b;

  --interactive-link-light: #0c74df;
  --interactive-link-dark: #3d9dff;

  --modal-wrapper-background-light: ${rgba('#d5d7d7', 0.75)};
  --modal-wrapper-background-dark: ${rgba('#3a444b', 0.75)};

  --code-console-background-main: #182125;
  --code-console-text-highlight: #429fff;
  --code-console-text-primary: #ffffff;
  --code-console-text-error: #ff6f66;
  --code-console-text-success: #01cb81;
  --code-console-text-warning: #ffd23d;

  --code-query-syntax-keyword: #da66ed;
  --code-query-syntax-function: #52a7f7;
  --code-query-syntax-string: #6cb404;
  --code-query-syntax-regex: #8c97ff;
  --code-query-syntax-numeric: #e89600;
  --code-query-syntax-operator: #19b1bb;

  --brand-button-primary-accent: #1ce783;
  --brand-button-primary-accent-hover: #00ce7c;

  --attention-notification-critical: #df2d24;
  --attention-notification-announcement: #00ce7c;
  --attention-notification-warning: #ffd23d;
  --attention-notification-info: #0c74df;

  // https://github.com/chriskempson/tomorrow-theme#tomorrow-night
  --color-text: #c5c8c6;
  --color-background: #212c31;
  --color-current-line: #282a2e;
  --color-selection: #373b41;
  --color-comment: #969896;
  --color-aqua: #8abeb7;
  --color-blue: #81a2be;
  --color-red: #cc6666;
  --color-orange: #de935f;
  --color-yellow: #f0c674;
  --color-green: #b5bd68;
  --color-purple: #b294bb;
`;
