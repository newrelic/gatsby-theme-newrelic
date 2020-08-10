/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Icon from './Icon';
import Portal from './Portal';
import NewRelicLogo from './NewRelicLogo';
import { useTransition, animated } from 'react-spring';

const Overlay = ({ children, onCloseOverlay, isOpen = false }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = null;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onCloseOverlay();
      }
    };

    document.body.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseOverlay]);

  const open = useTransition(isOpen, null, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });

  return (
    <Portal>
      {open.map(
        ({ item, props, key }) =>
          item && (
            <animated.div
              style={props}
              key={key}
              css={css`
                z-index: 100;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow-y: scroll;
                background-color: var(--primary-background-color);
              `}
            >
              <div
                role="button"
                tabIndex="0"
                css={css`
                  &:hover {
                    background-color: var(--secondary-background-color);
                    color: var(--tertiary-text-color);
                  }
                  color: var(--secondary-text-color);
                  cursor: pointer;
                  outline: none;
                  position: fixed;
                  top: 0;
                  left: 0;
                  right: 0;
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  padding: 0.25rem;
                `}
                onClick={onCloseOverlay}
              >
                <NewRelicLogo />
                <div
                  css={css`
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                  `}
                >
                  <span
                    css={css`
                      font-size: 0.75rem;
                      margin-right: 0.25rem;
                    `}
                  >
                    Close
                  </span>
                  <Icon name={Icon.TYPE.X} />
                </div>
              </div>
              <div
                css={css`
                  position: static;
                `}
              >
                {children}
              </div>
            </animated.div>
          )
      )}
    </Portal>
  );
};

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
  onCloseOverlay: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Overlay;
