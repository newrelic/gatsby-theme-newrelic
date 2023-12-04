import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const CollapserGroup = ({ className, children }) => {
  return (
    <div
      className={className}
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
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CollapserGroup;
