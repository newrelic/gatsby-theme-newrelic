import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

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
        }

        blockquote:not(:last-child) {
          margin-bottom: var(--block-element-spacing);
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
