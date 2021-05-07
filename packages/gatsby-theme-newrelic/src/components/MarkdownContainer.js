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

        > *:first-child {
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

        blockquote:not(:last-child) {
          margin-bottom: var(--block-element-spacing);
        }

        figcaption {
          margin-bottom: var(--text-spacing);
        }

        h2:not(:first-child) {
          margin-top: 2rem;
        }

        h3,
        h4 {
          &:not(:first-child) {
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
