import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Content from './Content';
import Footer from './Footer';
import Main from './Main';
import PageTools from './PageTools';
import Sidebar from './Sidebar';
import useLayout from '../../hooks/useLayout';

const Layout = ({ className, children }) => {
  const { maxWidth } = useLayout();

  return (
    <div
      className={className}
      css={css`
        --sidebar-width: 300px;

        display: grid;
        grid-template-columns: var(--sidebar-width) minmax(0, 1fr);
        grid-template-areas:
          'sidebar main'
          'sidebar footer';
        grid-template-rows: 1fr auto;
        min-height: calc(100vh - var(--global-header-height));
        margin: 0 auto;
        max-width: ${maxWidth};
      `}
    >
      {children}
    </div>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Layout.Content = Content;
Layout.Main = Main;
Layout.PageTools = PageTools;
Layout.Footer = Footer;
Layout.Sidebar = Sidebar;

export default Layout;
