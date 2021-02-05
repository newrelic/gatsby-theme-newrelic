import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { lighten } from 'polished';

const Backdrop = ({ onClick }) => {
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${lighten(0.1, '#1c2a2f')};
        opacity: 0.75;
        z-index: 100;
      `}
      onClick={onClick}
    />
  );
};

Backdrop.propTypes = {
  onClick: PropTypes.func,
};

export default Backdrop;
