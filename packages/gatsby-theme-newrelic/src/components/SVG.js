import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const SVG = ({ children, title, defs, size, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    css={css`
      width: ${size};
      height: ${size};
    `}
  >
    {title && <title>{title}</title>}
    {defs && <defs>{defs}</defs>}
    {children}
  </svg>
);

SVG.propTypes = {
  defs: PropTypes.node,
  children: PropTypes.node,
  title: PropTypes.string,
  size: PropTypes.string,
};

SVG.defaultProps = {
  size: '1em',
};

export default SVG;
