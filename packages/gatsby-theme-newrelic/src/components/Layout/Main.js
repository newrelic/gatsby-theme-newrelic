import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import useLayout from '../../hooks/useLayout';

const styles = {
  singleColumn: css`
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: 'content';
  `,
  pageTools: css`
    grid-template-columns: minmax(0, 1fr) var(--page-tools-width);
    grid-template-areas: 'content page-tools';
  `,
};

const Main = ({ children }) => {
  const { contentPadding } = useLayout();

  return (
    <main
      css={css`
        --page-tools-width: 320px;

        ${getGridStyles(children)};

        grid-area: main;
        padding: ${contentPadding};
        display: grid;
        grid-gap: ${contentPadding};
      `}
    >
      {children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

const getGridStyles = (children) => {
  switch (Children.count(children)) {
    case 2:
      return styles.pageTools;
    default:
      return styles.singleColumn;
  }
};

export default Main;
