import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import useDropdown from './useDropdown';

const ARROW_ALIGNMENTS = {
  left: css`
    left: var(--arrow-offset);
  `,
  center: css`
    left: 50%;
    transform: translateX(-50%);
  `,
  right: css`
    right: var(--arrow-offset);
  `,
};

const Menu = ({ children, className }) => {
  const { align, open } = useDropdown();

  return (
    <div
      css={css`
        --arrow-size: 5px;
        --arrow-offset: 0.5rem;

        position: absolute;
        top: calc(100% + var(--arrow-size));
        display: ${open ? 'block' : 'none'};
        background: var(--secondary-background-color);
        border-radius: 0.25rem;
        z-index: var(--depth-9);
        padding: 0.5rem;
        box-shadow: 0 3px 8px 0 rgba(22, 38, 59, 0.2);

        .dark-mode & {
          background-color: var(--primary-hover-color);
        }

        &::before {
          content: '';
          position: absolute;
          display: block;
          top: calc(-1 * var(--arrow-size));
          border-left: var(--arrow-size) solid transparent;
          border-right: var(--arrow-size) solid transparent;
          border-bottom: var(--arrow-size) solid var(--background-color);
          width: 0;
          height: 0;
          z-index: var(--depth-9);

          ${ARROW_ALIGNMENTS[align]};
        }
      `}
      className={className}
    >
      <div
        css={css`
          max-height: 20rem;
          min-width: 100px;
          overflow-y: auto;
        `}
      >
        {children}
      </div>
    </div>
  );
};

Menu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Menu;
