import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link } from '@newrelic/gatsby-theme-newrelic';

// The ordering of this array is very important. Since we are using string
// replacement, there is a possibility the regex will not match if its inner
// contents have already been replaced by a React component.
//
// For example, if we are replacing `<mark><var>$accountId</var></mark>` and
// we replace <var> before <mark>, the <mark> regex would no longer match since
// its inner contents have been replaced as a <var> React component instead of
// a string. In this example, we'd need to replace `<mark>` first so that we can
// recursively send its inner contents back through the replacement.
//
// Because of this specific ordering, there is a possibility of the tags not
// getting replaced if any of these are reversed in the code block. For example,
// we support <a><var>text</var></a> but not <var><a>text</a></var>. Looking
// through the docs site, this should be ok. Check this PR as a reference to the
// many examples where we use embedded tags in a code block:
// https://github.com/newrelic/docs-website/pull/724
//
// `html-react-parser` (https://github.com/remarkablemark/html-react-parser) was
// also evaluated as a possibility since it has the ability to (more robustly)
// replace HTML strings with React components. Unfortunately this library
// lowercases all tag and attribute names, which is a big downside when
// the code block is XML. For this reason, we are going with the simple approach
// of string replacement.
const REPLACEMENTS = [
  [/&lt;mark>(.*?)&lt;\/mark>/gs, '<mark>$1</mark>'],
  [/&lt;a href=['"](.+?)['"](.*?)>(.*?)&lt;\/a>/gs, '<a href="$1"$2>$3</a>'],
  [/&lt;var>(.*?)&lt;\/var>/gs, '<var>$1</var>'],
];

const replaceHTML = (code) => {
  return REPLACEMENTS.reduce(
    (code, [regex, replacement]) => code.replace(regex, replacement),
    code.replace(/</g, '&lt;')
  );
};

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
        dangerouslySetInnerHTML={{ __html: replaceHTML(code) }}
      />
    </pre>
  );
};

RawCode.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
};

export default RawCode;
