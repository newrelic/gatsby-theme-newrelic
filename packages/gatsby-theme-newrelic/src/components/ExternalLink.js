import React from 'react';
import PropTypes from 'prop-types';
import useInstrumentedHandler from '../hooks/useInstrumentedHandler';

const ExternalLink = ({ children, onClick, href, ...props }) => {
  const handleClick = useInstrumentedHandler(onClick, {
    actionName: 'externalLink_click',
    href,
  });

  return (
    <a
      {...props}
      href={href}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

ExternalLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default ExternalLink;
