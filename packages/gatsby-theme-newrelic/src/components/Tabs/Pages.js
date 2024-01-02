import React from 'react';
import PropTypes from 'prop-types';

const Pages = ({ children }) => {
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
