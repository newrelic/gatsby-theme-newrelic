import React from 'react';
import PropTypes from 'prop-types';
import NavigationContext from './NavigationContext';

const Navigation = ({ children, searchTerm }) => {
  return <nav>{children}</nav>;
};

Navigation.propTypes = {
  children: PropTypes.node,
  searchTerm: PropTypes.string,
};

export default Navigation;
