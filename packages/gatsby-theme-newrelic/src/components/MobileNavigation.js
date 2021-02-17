import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import { animated, useTransition } from 'react-spring';
import { css } from '@emotion/core';
import { rgba } from 'polished';
import useThemeTranslation from '../hooks/useThemeTranslation';

const MobileNavigation = ({ isOpen, children, onClose }) => {
  const { t } = useThemeTranslation();
  const transitions = useTransition(isOpen, null, {
    config: { mass: 1, tension: 350, friction: 25, velocity: 10 },
    from: {
      position: 'fixed',
      opacity: 0,
      transform: 'scale(0.92)',
    },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.92)' },
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div
          key={key}
          style={props}
          css={css`
            display: flex;
            flex-direction: column;
            border-radius: 0.5rem;
            position: fixed;
            top: 1rem;
            bottom: 0.5rem;
            left: 1rem;
            right: 1rem;
            z-index: 100;
            transform-origin: top right;
            box-shadow: var(--shadow-6);
            background-color: white;
            padding-bottom: 1rem;

            .dark-mode & {
              background: var(--color-dark-050);
            }
          `}
        >
          <header
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0.75rem 1rem;
              border-bottom: 1px solid;
              border-bottom-color: var(--divider-color);

              .dark-mode & {
                border-bottom-color: ${rgba('#22353c', 0.4)};
              }
            `}
          >
            <span
              css={css`
                color: var(--accent-text-color);
                text-transform: uppercase;
                font-size: 0.875rem;
              `}
            >
              {t('mobileNav.header')}
            </span>
            <button
              type="button"
              onClick={onClose}
              css={css`
                background: none;
                color: currentColor;
                border: none;
                padding: 0.25rem;
                border-radius: 0.25rem;

                &:active {
                  background: var(--color-neutrals-100);

                  .dark-mode & {
                    background: var(--color-dark-100);
                  }
                }
              `}
            >
              <Icon
                name="fe-x"
                size="1rem"
                css={css`
                  display: block;
                `}
              />
            </button>
          </header>
          <div
            css={css`
              flex: 1;
              padding: 1rem;
              height: 100%;
              overflow: auto;
            `}
          >
            {children}
          </div>
        </animated.div>
      )
  );
};

MobileNavigation.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileNavigation;
