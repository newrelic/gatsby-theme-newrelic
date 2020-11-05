import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import PageTools from '../PageTools';
import useLayout from '../../hooks/useLayout';

const LayoutPageTools = ({ children }) => {
  const { contentPadding } = useLayout();

  return (
    <PageTools
      css={css`
        position: sticky;
        top: calc(var(--global-header-height) + ${contentPadding});
        align-self: start;
        grid-area: page-tools;
        max-height: calc(
          100vh - (var(--global-header-height) + ${contentPadding} * 2)
        );
        overflow-y: auto;
      `}
    >
      {children}
    </PageTools>
  );
};

LayoutPageTools.propTypes = {
  children: PropTypes.node,
};

export default LayoutPageTools;
