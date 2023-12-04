import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { animated } from 'react-spring';
import { darken, rgba } from 'polished';
import { useScroll } from 'react-use';
import Icon from './Icon';
import Portal from './Portal';
import useThemeTranslation from '../hooks/useThemeTranslation';

const REM = 16;

const MobileNavModal = ({ children, style, onClose }) => {
  const scrollRef = useRef(null);
  const { y } = useScroll(scrollRef);
  const { t } = useThemeTranslation();

  const shadowPoint = 0.5 * REM;

  return (
    <Portal>
      <animated.div
        style={{ opacity: style.opacity }}
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
      />
      <animated.div
        style={style}
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
          background-color: var(--erno-black);
          padding-bottom: 1rem;
        `}
      >
        <header
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem 1rem;
            border-bottom: 1px solid;
            border-bottom-color: var(--nav-item);
            box-shadow: ${y > shadowPoint ? 'var(--shadow-3)' : 'none'};
            transition: 0.25s ease-out;
          `}
        >
          <span
            css={css`
              color: var(--nav-category);
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
              color: var(--nav-item);
              border: none;
              padding: 0.25rem;
              border-radius: 0.25rem;

              &:active {
                background: var(--nav-highlight);
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
          ref={scrollRef}
          css={css`
            flex: 1;
            padding: 1rem;
            height: 100%;
            overflow: auto;
            span,
            svg {
              color: var(--nav-item);
            }
          `}
        >
          {children}
        </div>
      </animated.div>
    </Portal>
  );
};

MobileNavModal.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileNavModal;
