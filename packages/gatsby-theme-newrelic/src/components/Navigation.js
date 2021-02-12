import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import NavigationContext from './NavigationContext';

const sanitizeSearchTerm = (searchTerm) =>
  searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const Navigation = ({ className, children, searchTerm }) => {
  const value = useMemo(
    () => ({ searchTerm: sanitizeSearchTerm(searchTerm) }),
    [searchTerm]
  );

  return (
    <NavigationContext value={value}>
      <nav role="navigation" aria-label="Navigation" className={className}>
        {children}
      </nav>
    </NavigationContext>
  );
};

Navigation.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  searchTerm: PropTypes.string,
};

export default Navigation;
