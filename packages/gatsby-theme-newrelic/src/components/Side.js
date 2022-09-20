import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Side = ({ children, fullHeight }) => {
  return (
    <div
      css={css`
        height: ${fullHeight ? '100%' : 'auto'};
      `}
    >
      {children}
    </div>
  );
};

Side.propTypes = {
  children: PropTypes.node,
  fullHeight: PropTypes.bool,
};

export default Side;
