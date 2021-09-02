import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from './SVG';

const FeatherSVG = ({ children, ...props }) => (
  <SVG
    viewBox="0 0 24 24"
    {...props}
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
