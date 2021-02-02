import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link } from '@newrelic/gatsby-theme-newrelic';
import parse, { domToReact } from 'html-react-parser';

const RawCode = ({ code, language }) => {
  return (
    <pre
      css={css`
        color: var(--color-nord-6);
        font-family: var(--code-font);
        font-size: 0.75rem;
        display: block;
        overflow: auto;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        tab-size: 2;
        hyphens: none;
        text-shadow: none;
        padding: 1rem;

        .light-mode & {
          color: var(--color-nord-0);
        }
      `}
      data-language={language}
    >
      <code
        css={css`
          display: table;
          width: 100%;
          padding: 0;
          background: none;

          var,
          mark {
            font-size: inherit;
          }

          var {
            background: var(--color-nord-2);
            color: inherit;

            .light-mode & {
              background: var(--color-nord-4);
            }
          }

          a:hover var {
            background: var(--color-nord-3);

            .light-mode & {
              background: var(--color-nord-5);
            }
          }

          mark {
            color: var(--color-neutrals-900) !important;

            var {
              color: var(--color-neutrals-100);

              .light-mode & {
                color: var(--color-neutrals-900);
              }
            }
          }
        `}
      >
        {parse(code, {
          replace: ({ name, attribs, children }) => {
            if (name === 'a') {
              const {
                href,
                style: _style,
                className: _className,
                ...props
              } = attribs;

              return (
                <Link to={href} {...props}>
                  {domToReact(children)}
                </Link>
              );
            }

            if (name && name !== 'var' && name !== 'mark') {
              return domToReact(children);
            }
          },
        })}
      </code>
    </pre>
  );
};

RawCode.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
};

export default RawCode;
