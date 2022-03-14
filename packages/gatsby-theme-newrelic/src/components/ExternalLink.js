import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
const ExternalLink = ({ href,targetTab, ...props }) => {
  return <Link to={href} {...props} targetTab={targetTab}/>;
};
ExternalLink.propTypes = {
  href: PropTypes.string,
  targetTab: PropTypes.string,
};
export default ExternalLink;
