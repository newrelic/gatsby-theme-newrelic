import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import useLayout from '../../hooks/useLayout';

const Main = ({ className, children }) => {
  const { contentPadding } = useLayout();

  return (
    <main
      className={className}
      css={css`
        grid-area: main;
        padding: ${contentPadding};
      `}
    >
      {children}
    </main>
  );
};

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Main;
