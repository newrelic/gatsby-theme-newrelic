import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import SVG from './SVG';

const FeatherSVG = ({ children, ...props }) => (
  <SVG
    {...props}
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
  </SVG>
);

FeatherSVG.propTypes = {
  ...SVG.propTypes,
  children: PropTypes.node,
};

export default FeatherSVG;
