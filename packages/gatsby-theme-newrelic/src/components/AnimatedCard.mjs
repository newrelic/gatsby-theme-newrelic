import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Surface from './Surface';

const AnimatedCard = ({ className, flipped, children }) => {
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
      padding: 1rem;
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
      padding: 1rem;
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

const CardHover = ({ children, className }) => {
  const [firstChild, secondChild] = children;
  return (
    <Surface
      base={Surface.BASE.PRIMARY}
      css={css`
        width: 100%;
        height: 100%;
        padding: 1rem;
        position: absolute;
        &:hover {
          div:nth-child(1) {
            opacity: 0;
          }
          div:nth-child(2) {
            opacity: 1;
          }
        }
      `}
      className={className}
    >
      <div
        css={css`
          position: absolute;
          transition: opacity 0.4s linear;
        `}
      >
        {firstChild}
      </div>
      <div
        css={css`
          position: absolute;
          transition: opacity 0.4s linear;
          opacity: 0;
        `}
      >
        {secondChild}
      </div>
    </Surface>
  );
};

AnimatedCard.Front = CardFront;
AnimatedCard.Back = CardBack;
AnimatedCard.Hover = CardHover;

AnimatedCard.propTypes = {
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
CardHover.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default AnimatedCard;
