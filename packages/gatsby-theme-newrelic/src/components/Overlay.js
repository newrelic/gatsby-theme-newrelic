import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Icon from './Icon';
import { rgba } from 'polished';

const Overlay = ({ children, onClick }) => {
  document.body.style.position = 'fixed';
  return (
    <div
      css={css`
        z-index: 100;
        position: absolute;
        background-color: ${rgba('#000000', 0.75)};
        width: 100vw;
        height: 100%;
      `}
    >
      <Icon
        css={css`
          color: var(--color-brand-400);
          &:hover {
            color: white;
          }
          position: absolute;
          right: 0;
          margin: 1rem;
        `}
        size={'1.75rem'}
        name={Icon.TYPE.X}
        onClick={onClick}
      />
      {children}
    </div>
  );
};

export default Overlay;
