import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from './MainLayout';

const Layout = (props) => {
  const { children, pageContext } = props;

  switch (pageContext.layout) {
    case 'basic':
      return children;
    default:
      return <MainLayout {...props} />;
  }
};

Layout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object.isRequired,
};

export default Layout;
