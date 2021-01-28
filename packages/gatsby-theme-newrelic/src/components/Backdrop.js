import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Portal from './Portal';

const Backdrop = ({ onClick }) => {
  return (
    <Portal>
      <div
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--primary-background-color);
          opacity: 0.75;
          z-index: 10000;
        `}
        onClick={onClick}
      ></div>
    </Portal>
  );
};

Backdrop.propTypes = {
  onClick: PropTypes.func,
};

export default Backdrop;
