import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const TOKENS = /{([a-z]+)}(.*?(?={|$))/g;

const ShellOutput = ({ line }) => (
  <div
    css={css`
      color: #fafafa;
      white-space: pre;
    `}
  >
    {tokenize(line).map((token, key) => (
      <span
        key={key}
        css={css`
          color: ${OUTPUT_COLORS[token.color] || OUTPUT_COLORS.plain};

          &:empty {
            display: inline-block;
          }
        `}
      >
        {token.text}
      </span>
    ))}
  </div>
);

const tokenize = (text) => {
  const tokens = Array.from(text.matchAll(TOKENS));

  if (tokens.length === 0) {
    return [{ color: 'plain', text }];
  }

  const startOfColorIdx = text.indexOf('{');
  const coloredTokens = tokens.map(([, color, text]) => ({ color, text }));

  return startOfColorIdx === 0
    ? coloredTokens
    : [{ color: 'plain', text: text.slice(0, startOfColorIdx) }].concat(
        coloredTokens
      );
};

const OUTPUT_COLORS = {
  plain: 'currentColor',
  green: 'var(--code-console-text-success)',
  red: 'var(--code-console-text-error)',
  muted: 'var(--color-selection)',
  purple: 'var(--code-query-syntax-keyword)',
  blue: 'var(--code-console-text-highlight)',
  yellow: 'var(--code-console-text-warning)',
};

OUTPUT_COLORS.error = OUTPUT_COLORS.red;
OUTPUT_COLORS.identifier = OUTPUT_COLORS.blue;
OUTPUT_COLORS.string = OUTPUT_COLORS.green;
OUTPUT_COLORS.success = OUTPUT_COLORS.green;
OUTPUT_COLORS.timestamp = OUTPUT_COLORS.muted;
OUTPUT_COLORS.variable = OUTPUT_COLORS.purple;
OUTPUT_COLORS.warning = OUTPUT_COLORS.yellow;

ShellOutput.propTypes = {
  line: PropTypes.string.isRequired,
};

export default ShellOutput;
