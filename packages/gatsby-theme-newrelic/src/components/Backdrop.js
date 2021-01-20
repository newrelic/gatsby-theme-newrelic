import React from 'react';
import propTypes from 'prop-types';
import { css } from '@emotion/core';
import Portal from './Portal';

const Backdrop = () => {
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
        `}
      ></div>
    </Portal>
  );
};

export default Backdrop;
