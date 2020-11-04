import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import Content from './Content';
import Footer from './Footer';
import PageTools from './PageTools';
import Sidebar from './Sidebar';

const TYPES = {
  TWO_COLUMN: 'twoColumn',
  TWO_COLUMN_PAGE_TOOLS: 'twoColumnPageTools',
};

const GRID = {
  [TYPES.TWO_COLUMN]: css`
    grid-template-columns: var(--sidebar-width) minmax(0, 1fr);
    grid-template-areas:
      'sidebar content'
      'sidebar footer';
  `,
  [TYPES.TWO_COLUMN_PAGE_TOOLS]: css`
    grid-template-columns: var(--sidebar-width) minmax(0, 1fr) var(
        --page-tools-width
      );
    grid-template-areas:
      'sidebar content page-tools'
      'sidebar footer footer';
  `,
};

const Layout = ({ className, children, type }) => {
  const {
    site: { layout },
  } = useStaticQuery(graphql`
    query {
      site {
        layout {
          contentPadding
          maxWidth
        }
      }
    }
  `);

  return (
    <div
      className={className}
      css={css`
        --sidebar-width: 300px;
        --page-tools-width: 320px;

        ${GRID[type]};

        display: grid;
        grid-gap: ${layout.contentPadding};
        margin: 0 auto;
        max-width: ${layout.maxWidth};
        padding: 0 ${layout.contentPadding};
      `}
    >
      {children}
    </div>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(Object.values(TYPES)).isRequired,
};

Layout.TYPE = TYPES;

Layout.Content = Content;
Layout.PageTools = PageTools;
Layout.Footer = Footer;
Layout.Sidebar = Sidebar;

export default Layout;
