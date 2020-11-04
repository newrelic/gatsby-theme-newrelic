import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import PageTools from '../PageTools';

const LayoutPageTools = ({ children }) => {
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
    <PageTools
      css={css`
        grid-area: page-tools;
        margin-top: ${layout.contentPadding};
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
