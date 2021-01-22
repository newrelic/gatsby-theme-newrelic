import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const CollapserGroup = ({ children }) => {
  return (
    <div
      css={css`
        > *:not(:last-child) {
          margin-bottom: 0.5rem;
        }
      `}
    >
      {children}
    </div>
  );
};

CollapserGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CollapserGroup;
