import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { animated, useTransition } from 'react-spring';
import { rgba } from 'polished';
import { css } from '@emotion/react';
import Portal from './Portal';
import useKeyPress from '../hooks/useKeyPress';
import useScrollFreeze from '../hooks/useScrollFreeze';

const Lightbox = ({ children }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const transitions = useTransition(lightboxOpen, {
    config: { tension: 220, friction: 22 },
    from: {
      opacity: 0,
      transform: 'scale(0.96)',
    },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.96)' },
  });
  useScrollFreeze(lightboxOpen);
  useKeyPress('Escape', () => setLightboxOpen(false), {
    ignoreTextInput: false,
  });

  return (
    <>
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        css={css`
          border: none;
          width: 100%;
          padding: 0;
          background: none;
          img {
            cursor: -moz-zoom-in;
            cursor: -webkit-zoom-in;
            cursor: zoom-in;
          }
        `}
      >
        {children}
      </button>
      {lightboxOpen &&
        transitions(
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
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 900;
                    background: ${rgba('#d5d7d7', 0.75)};

                    img {
                      max-height: 90vh;
                      max-width: 90%;
                      width: auto;
                    }

                    .dark-mode & {
                      background: ${rgba('#3a444b', 0.75)};
                    }
                  `}
                  onClick={() => setLightboxOpen(false)}
                >
                  {children}
                </animated.div>
              </Portal>
            )
        )}
    </>
  );
};

Lightbox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Lightbox;
