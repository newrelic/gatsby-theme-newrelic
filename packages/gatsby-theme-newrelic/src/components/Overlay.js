import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Icon from './Icon';
import Portal from './Portal';
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
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: ${rgba('#000000', 0.75)};
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
            </animated.div>
          )
      )}
    </Portal>
  );
};

export default Overlay;
