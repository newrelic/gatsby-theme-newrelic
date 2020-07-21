import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const FeatherSVG = ({ children, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    css={css`
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    `}
  >
    {children}
  </svg>
);

FeatherSVG.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FeatherSVG;
