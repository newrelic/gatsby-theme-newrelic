import React from 'react';
import PropTypes from 'prop-types';
import NewRelicLogo from './NewRelicLogo';

const Logo = ({ className, width }) => (
  <NewRelicLogo className={className} size={width} />
);

Logo.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
};

export default Logo;
