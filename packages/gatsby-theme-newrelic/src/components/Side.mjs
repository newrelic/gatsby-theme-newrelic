import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Side = ({ children }) => {
  return (
    <div
      css={css`
        height: 100%;
      `}
    >
      {children}
    </div>
  );
};

Side.propTypes = {
  children: PropTypes.node,
};

export default Side;
