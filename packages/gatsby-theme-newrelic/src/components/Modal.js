import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { animated, useTransition } from 'react-spring';
import { rgba } from 'polished';

import Portal from './Portal';

const Modal = ({ onClose, isOpen, children }) => {
  const transitions = useTransition(isOpen, {
    config: { tension: 220, friction: 22 },
    from: {
      opacity: 0,
      transform: 'scale(0.96)',
    },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.96)' },
  });
  return transitions(
    (style, item) =>
      item && (
        <Portal>
          <animated.div
            style={{ opacity: style.opacity }}
            css={css`
              position: fixed;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              padding: var(--site-content-padding);
              z-index: 900;
              background: ${rgba('#d5d7d7', 0.75)};

              .dark-mode & {
                background: ${rgba('#3a444b', 0.75)};
              }

              @media screen and (max-width: 760px) {
                padding: 0;
              }
            `}
            onClick={onClose}
          >
            <animated.div
              onClick={(e) => e.stopPropagation()}
              style={style}
              css={css`
                --horizontal-spacing: 1rem;

                z-index: 101;
                max-width: 1024px;
                width: 100%;
                margin: auto;
                max-height: calc(100vh - 2 * var(--site-content-padding));
                display: flex;
                flex-direction: column;
                position: relative;
                padding: 2.5rem;
                background-color: var(--modal-background-color);
                border-radius: 1rem;
                overflow: auto;
              `}
            >
              {children}
            </animated.div>
          </animated.div>
        </Portal>
      )
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default Modal;
