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
        > *:first-child {
          margin-top: 0;
        }

        ul,
        ol {
          &:not(:last-child) {
            margin-bottom: var(--paragraph-spacing);
          }
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
