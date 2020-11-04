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
        grid-area: page-tools;
        margin-top: ${contentPadding};
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
