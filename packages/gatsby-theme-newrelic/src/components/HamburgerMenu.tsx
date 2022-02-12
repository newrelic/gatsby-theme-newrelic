import { css } from '@emotion/react';

interface HamburgerMenuProps {
  onToggle: () => void;
  isOpen?: boolean;
  className?: string;
}

const menuLine = css`
  width: 100%;
  height: 2px;
  background-color: var(--color-neutrals-800);
  margin: 2px 0;
  border-radius: 5px;
  transition: 0.18s;

  .dark-mode & {
    background-color: var(--color-dark-800);
  }
`;

const HamburgerMenu = ({
  onToggle,
  isOpen = false,
  className,
}: HamburgerMenuProps): JSX.Element => (
  <button
    aria-expanded={isOpen}
    aria-label="Mobile Menu"
    type="button"
    css={css`
      --line-width: 1rem;
      --x-padding: 1rem;

      display: block;
      background: var(--color-neutrals-100);
      border: 0;
      cursor: pointer;
      width: calc(var(--line-width) + 2 * var(--x-padding));
      outline: none;
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      backface-visibility: hidden;
      transition: transform 0.2s ease-out;

      &:active {
        transform: scale(0.8);
      }

      .dark-mode & {
        background: var(--color-dark-100);
      }
    `}
    className={className}
    onClick={(): void => onToggle()}
  >
    <div css={menuLine} />
    <div css={menuLine} />
    <div css={menuLine} />
  </button>
);

export default HamburgerMenu;
