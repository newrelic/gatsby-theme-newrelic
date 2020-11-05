import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import useLayout from '../../hooks/useLayout';

const Sidebar = ({ children, className }) => {
  const { contentPadding } = useLayout();

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
          padding: ${contentPadding};
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
