import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({ children, title, defs, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    {title && <title>{title}</title>}
    {defs && <defs>{defs}</defs>}
    {children}
  </svg>
);

SVG.propTypes = {
  defs: PropTypes.node,
  children: PropTypes.node,
  title: PropTypes.string,
};

export default SVG;
