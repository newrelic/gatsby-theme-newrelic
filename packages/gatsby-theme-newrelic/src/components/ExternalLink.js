import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ children, ...props }) => (
  <a {...props} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

ExternalLink.propTypes = {
  children: PropTypes.node,
};

export default ExternalLink;
