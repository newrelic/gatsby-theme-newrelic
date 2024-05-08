import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const MarkdownContainer = ({
  children,
  className,
  dangerouslySetInnerHTML,
}) => {
  return (
    <div
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      className={className}
      css={css`
        --block-element-spacing: 1.5rem;
        --text-spacing: var(--paragraph-spacing);

        > *:first-of-type {
          margin-top: 0;
        }

        ul,
        ol {
          &:not(:last-child) {
            margin-bottom: var(--text-spacing);
          }
          li {
            p:last-of-type {
              margin-bottom: 0;
            }
          }
        }

        ol > li {
          counter-increment: listitem 1;
          list-style-type: none;
          position: relative;

          &::before {
            background: var(--border-color);
            border-radius: 50%;
            color: var(--system-text-primary);
            content: counter(listitem);
            font-size: 12px;
            font-weight: 600;
            height: 10px;
            left: -28px;
            line-height: 10px;
            padding: 5px 0;
            position: absolute;
            text-align: center;
            top: 6px;
            width: 20px;
          }

          code {
            line-height: 1.5;
          }
        }

        blockquote:not(:last-child) {
          margin-bottom: var(--block-element-spacing);
        }

        figcaption {
          margin-bottom: var(--text-spacing);
        }

        h2:not(:first-of-type) {
          margin-top: 2rem;
        }

        h3,
        h4 {
          &:not(:first-of-type) {
            margin-top: 1.5rem;
          }
        }

        h2 + h3 {
          margin-top: 1rem !important;
        }

        h3 + h4 {
          margin-top: 1rem !important;
        }
      `}
    >
      {children}
    </div>
  );
};

MarkdownContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dangerouslySetInnerHTML: PropTypes.object,
};

export default MarkdownContainer;
