import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Surface from './Surface';

const FlipCard = ({ className, flipped, children }) => {
  return (
    <div
      css={css`
        width: 300px;
        height: 300px;
        background-color: transparent;
        perspective: 1000px;
      `}
      className={className}
    >
      <div
        css={css`
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          ${flipped &&
          css`
            transform: rotateY(180deg);
          `}
        `}
      >
        {children}
      </div>
    </div>
  );
};

const CardFront = ({ children, className }) => (
  <Surface
    base={Surface.BASE.PRIMARY}
    css={css`
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    `}
    className={className}
  >
    {children}
  </Surface>
);

const CardBack = ({ children, className }) => (
  <Surface
    base={Surface.BASE.PRIMARY}
    css={css`
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      transform: rotateY(180deg);
    `}
    className={className}
  >
    {children}
  </Surface>
);

FlipCard.Front = CardFront;
FlipCard.Back = CardBack;

FlipCard.propTypes = {
  className: PropTypes.string,
  flipped: PropTypes.bool,
  children: PropTypes.node,
};
CardFront.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
CardBack.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default FlipCard;
