import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import useTabs from './useTabs';

const Pages = ({ children }) => {
  const { containerHeight, mobileBreakPoint } = useTabs();

  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { ...child.props, index })
      )}
    </div>
  );
};

Pages.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Pages;
