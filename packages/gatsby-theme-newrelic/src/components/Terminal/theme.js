import { css } from '@emotion/react';

export default css`
  .namespace {
    opacity: 0.7;
  }
  .token {
    &.plain:empty {
      display: inline-block;
    }

    &.comment {
      color: var(--color-comment);
    }

    &.punctuation,
    &.operator {
      color: var(--code-console-text-highlight);
    }

    &.constant {
      color: var(--code-query-syntax-keyword);
    }

    &.string {
      color: var(--code-query-syntax-string);
    }
  }
`;
