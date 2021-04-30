import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import { css } from '@emotion/react';
import { darken, rgba } from 'polished';

const Backdrop = ({ onClick, style }) => (
  <animated.div
    style={{ opacity: style?.opacity }}
    css={css`
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 90;

      background: ${rgba('#d5d7d7', 0.5)};

      .dark-mode & {
        background: ${rgba(darken(0.05, '#22353c'), 0.5)};
      }
    `}
    onClick={onClick}
  />
);

Backdrop.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.shape({
    opacity: PropTypes.number,
  }),
};

export default Backdrop;
