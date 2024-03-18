import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { animated, useTransition } from 'react-spring';
import { css } from '@emotion/react';
import Portal from './Portal';
import Icon from './Icon';
import useScrollFreeze from '../hooks/useScrollFreeze';
import useKeyPress from '../hooks/useKeyPress';
import Button from './Button';
import { addPageAction } from '../utils/nrBrowserAgent.js';

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
  useKeyPress('Escape', () => setLightboxOpen(false));

  return (
    <>
      <button
        type="button"
        onClick={() => {
          addPageAction({
            eventName: 'openLightbox',
            category: 'LightboxClick',
          });
          setLightboxOpen(true);
        }}
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
                    background: var(--modal-wrapper-color);

                    img {
                      max-height: unset;
                      max-width: unset;
                      // removes any manually set img width from mdx when opened in lightbox
                      width: 100%;
                    }
                  `}
                  onClick={() => setLightboxOpen(false)}
                >
                  <div
                    css={css`
                      max-height: 90vh;
                      max-width: 90%;
                      width: auto;
                      display: flex;
                      flex-direction: column;
                      position: relative;
                      background: var(--primary-background-color);
                    `}
                  >
                    <Button
                      type="button"
                      css={css`
                        position: absolute;
                        top: -1rem;
                        right: -1rem;
                        align-self: flex-end;
                        background: var(--system-background-surface-1-dark);
                        color: var(--system-text-primary-dark);
                        border: var(--system-border-regular-dark) solid 1.5px;
                        border-radius: 50%;
                        padding: 0.25rem;
                        display: flex;
                        align-items: center;
                      `}
                      onClick={() => setLightboxOpen(false)}
                    >
                      <Icon name="fe-x" size="1rem" />
                    </Button>
                    <div
                      css={css`
                        overflow-y: scroll;
                        overflow-x: hidden;
                      `}
                    >
                      {children}
                    </div>
                  </div>
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
