import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const menuLine = css`
  width: 100%;
  height: 2px;
  background-color: var(--primary-text-color);
  margin: 2px 0;
  border-radius: 5px;
  transition: 0.18s;
`;

const HamburgerMenu = ({ onToggle, isOpen, className }) => (
  <button
    aria-expanded={isOpen}
    aria-label="Mobile Menu"
    type="button"
    css={css`
      --line-width: 1rem;
      --x-padding: 1rem;

      display: block;
      border: 0;
      cursor: pointer;
      width: calc(var(--line-width) + 2 * var(--x-padding));
      outline: none;
      padding: 0.5rem 1rem;
      background: transparent;
      backface-visibility: hidden;
      transition: transform 0.2s ease-out;

      &:active {
        transform: scale(0.8);
      }
    `}
    className={className}
    onClick={() => onToggle()}
  >
    <div css={menuLine} />
    <div css={menuLine} />
    <div css={menuLine} />
  </button>
);

HamburgerMenu.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  className: PropTypes.string,
};

HamburgerMenu.defaultProps = {
  isOpen: false,
};

export default HamburgerMenu;
