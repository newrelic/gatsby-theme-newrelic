/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Icon from './Icon';
import Portal from './Portal';
import NewRelicLogo from './NewRelicLogo';
import useKeyPress from '../hooks/useKeyPress';
import useThemeTranslation from '../hooks/useThemeTranslation';

const Overlay = ({ children, onCloseOverlay, isOpen = false }) => {
  const { t } = useThemeTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = null;
    };
  }, [isOpen]);

  useKeyPress('Escape', onCloseOverlay);

  return (
    <Portal>
      <div
        css={css`
          z-index: 1000;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow-y: scroll;
          background-color: var(--primary-background-color);
          opacity: ${isOpen ? 1 : 0};
          transform: scale(${isOpen ? 1 : 1.04});
          transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
          visibility: ${isOpen ? 'visible' : 'hidden'};
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
            transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
            padding: 0.25rem 0;
            height: 30px;
          `}
          onClick={onCloseOverlay}
        >
          <div
            css={css`
              max-width: var(--site-max-width);
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 0 auto;
              padding: 0 var(--site-content-padding);
              height: 100%;
            `}
          >
            <NewRelicLogo />
            <div
              css={css`
                display: flex;
                align-items: center;
                padding: 0.25rem 0;
              `}
            >
              <span
                css={css`
                  margin-right: 0.25rem;
                  font-size: 0.75rem;
                `}
              >
                {t('button.close')}
              </span>
              <Icon name="fe-x" size="1rem" />
            </div>
          </div>
        </div>
        <div
          css={css`
            max-width: var(--site-max-width);
            padding: 0 var(--site-content-padding);
            margin: 0 auto;
          `}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
  onCloseOverlay: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Overlay;
