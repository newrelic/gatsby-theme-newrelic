import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Main = ({ className, children }) => {
  return (
    <main
      className={className}
      css={css`
        grid-area: main;
        padding: var(--site-content-padding);
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
