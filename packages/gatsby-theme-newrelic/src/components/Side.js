import React from 'react';
import PropTypes from 'prop-types';

const Side = ({ children }) => {
  return <div>{children}</div>;
};

Side.propTypes = {
  children: PropTypes.node,
};

export default Side;
