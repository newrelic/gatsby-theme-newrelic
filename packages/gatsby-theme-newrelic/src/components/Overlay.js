import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Icon from './Icon';
import Portal from './Portal';
import NewRelicLogo from './NewRelicLogo';
import { rgba } from 'polished';
import { useTransition, animated } from 'react-spring';

const Overlay = ({ children, onClick, isOpen = false }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = null;
    };
  }, [isOpen]);
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
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClick();
  };

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
                background-color: ${rgba('#000000', 0.9)};
              `}
            >
              <div
                role="button"
                tabIndex="0"
                onKeyDown={handleKeyDown}
                css={css`
                  &:hover {
                    background-color: ${rgba('#FFFFFF', 0.2)};
                    color: var(--color-neutrals-400);
                  }
                  color: var(--color-neutrals-600);
                  cursor: pointer;
                  position: fixed;
                  top: 0;
                  left: 0;
                  right: 0;
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  padding: 0.5rem;
                `}
                onClick={onClick}
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
  children: PropTypes.node,
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Overlay;
