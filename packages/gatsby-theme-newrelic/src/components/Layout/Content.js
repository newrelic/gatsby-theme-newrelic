import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import useLayout from '../../hooks/useLayout';

const Content = ({ className, children }) => {
  const { contentPadding } = useLayout();

  return (
    <main
      data-swiftype-name="body"
      data-swiftype-type="text"
      className={className}
      css={css`
        grid-area: content;
        padding: ${contentPadding} 0;
      `}
    >
      {children}
    </main>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Content;
