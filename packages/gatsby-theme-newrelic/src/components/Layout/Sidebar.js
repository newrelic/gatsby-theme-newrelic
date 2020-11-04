import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';

const Sidebar = ({ children, className }) => {
  const {
    site: { layout },
  } = useStaticQuery(graphql`
    query {
      site {
        layout {
          contentPadding
        }
      }
    }
  `);

  return (
    <aside
      data-swiftype-index={false}
      className={className}
      css={css`
        grid-area: sidebar;
        border-right: 1px solid var(--divider-color);
        height: calc(100vh - var(--global-header-height));
        position: sticky;
        top: var(--global-header-height);
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          padding: ${layout.contentPadding};
          padding-left: 0;
          overflow: auto;
        `}
      >
        {children}
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Sidebar;
