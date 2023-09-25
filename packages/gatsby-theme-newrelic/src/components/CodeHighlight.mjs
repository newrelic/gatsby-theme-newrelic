import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Highlight } from 'prism-react-renderer';
import Prism from 'prismjs';
import { partition, range } from '../utils/array';
import { rgba } from 'polished';

const CodeHighlight = ({
  className,
  children,
  highlightedLines: highlightedLineString,
  language,
  lineNumbers,
  wrap,
}) => {
  const highlightedLines = getHighlightedLines(highlightedLineString);

  return (
    <Highlight Prism={Prism} code={children} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => {
        const lineNumberWidth = String(tokens.length).length;

        return (
          <pre
            css={css`
              ${nordTheme};

              color: var(--code-console-text-primary);
              font-family: var(--code-font);
              font-size: 0.75rem;
              display: block;
              overflow: auto;
              white-space: ${wrap ? 'pre-wrap' : 'pre'};
              word-spacing: normal;
              word-break: normal;
              tab-size: 2;
              hyphens: none;
              text-shadow: none;
              padding: 1rem;

              ${lineNumbers &&
              css`
                .token-line {
                  display: grid;
                  grid-template-columns: ${lineNumberWidth}ch 1fr;
                  grid-gap: 1rem;
                }
              `};
            `}
            className={className}
            data-language={language}
          >
            <code
              css={css`
                width: 100%;
                padding: 0;
                background: none;

                var,
                mark {
                  font-size: inherit;
                }

                var {
                  background: var(--color-current-line);
                  color: inherit;
                }

                a:hover var {
                  background: var(--color-selection);
                }

                mark .token {
                  color: var(--color-black) !important;
                }
              `}
            >
              {tokens.map((line, idx) => (
                // eslint-disable-next-line react/jsx-key
                <div
                  {...getLineProps({ line, key: idx })}
                  name={`line-${idx + 1}`}
                >
                  {lineNumbers && (
                    <div
                      css={css`
                        user-select: none;
                        color: var(--color-selection);
                        text-align: right;
                      `}
                    >
                      {idx + 1}
                    </div>
                  )}
                  <div
                    css={
                      highlightedLines.has(idx + 1) &&
                      css`
                        background: ${rgba('#373b41', 0.6)};
                      `
                    }
                  >
                    {line.map((token, key) => (
                      // eslint-disable-next-line react/jsx-key
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                </div>
              ))}
            </code>
          </pre>
        );
      }}
    </Highlight>
  );
};

const nordTheme = css`
  .namespace {
    opacity: 0.7;
  }
  .token {
    &.plain:empty {
      display: inline-block;
    }

    &.comment,
    &.prolog,
    &.doctype,
    &.cdata {
      color: var(--color-comment);
    }
    &.tag,
    &.class-name {
      color: var(--code-query-syntax-keyword);
    }
    &.function {
      color: var(--code-query-syntax-function);
    }
    &.punctuation,
    &.operator,
    &.keyword,
    &.property,
    &.entity,
    &.atrule,
    &.attr-value,
    &.url {
      color: var(--code-query-syntax-operator);
    }
    &.regex,
    &.important,
    &.variable {
      color: var(--code-query-syntax-regex);
    }
    &.selector,
    &.attr-name,
    &.string,
    &.char,
    &.builtin,
    &.inserted {
      color: var(--code-query-syntax-string);
    }
    &.property,
    &.boolean,
    &.constant,
    &.symbol,
    &.deleted,
    &.number {
      color: var(--code-query-syntax-numeric);
    }
    &.important,
    &.bold {
      font-weight: bold;
    }
    &.italic {
      font-style: italic;
    }
    &.entity {
      cursor: help;
    }
  }
`;

const getHighlightedLines = (highlightedLineString) => {
  if (!highlightedLineString) {
    return new Set();
  }

  const groups = highlightedLineString.split(',').map((str) => str.trim());
  const [ranges, lines] = partition(groups, (group) => group.includes('-'));

  const lineRanges = ranges
    .map((range) => range.split('-').map(Number))
    .reduce((acc, [a, b]) => acc.concat(range(a, b)), []);

  return new Set(lines.map(Number).concat(lineRanges));
};

CodeHighlight.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  highlightedLines: PropTypes.string,
  language: PropTypes.string,
  lineNumbers: PropTypes.bool,
  wrap: PropTypes.bool,
};

CodeHighlight.defaultProps = {
  wrap: false,
};

export default CodeHighlight;
