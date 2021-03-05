import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

const ExternalLink = ({ href, ...props }) => {
  return <Link to={href} {...props} />;
};

ExternalLink.propTypes = {
  href: PropTypes.string,
};

export default ExternalLink;
