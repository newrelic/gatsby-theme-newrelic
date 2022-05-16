import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const VARIANTS = {
  PRIMARY: 'primary',
  NORMAL: 'normal',
  PLAIN: 'plain',
  LINK: 'link',
  OUTLINE: 'outline',
};

const SIZES = {
  EXTRA_SMALL: 'extraSmall',
  SMALL: 'small',
};

const styles = {
  size: {
    [SIZES.SMALL]: css`
      font-size: 0.75rem;
    `,
    [SIZES.EXTRA_SMALL]: css`
      font-size: 0.625rem;
      padding: 0.375rem 0.625rem;
      border-radius: 0.125rem;
    `,
  },
  variant: {
    [VARIANTS.PRIMARY]: css`
      color: var(--color-black);
      background-color: var(--brand-button-primary-accent);

      &:hover {
        color: var(--color-black);
        background-color: var(--brand-button-primary-accent-hover);
      }
    `,
    [VARIANTS.LINK]: css`
      color: var(--link-color);
      background: transparent;
    `,
    [VARIANTS.NORMAL]: css`
      color: var(--button-text-color);
      background-color: var(--button-background-color);

      &:hover {
        color: var(--button-text-color);
        background: var(--color-black);
        .dark-mode & {
          color: var(--button-text-color);
          background: #d0d6d7;
        }
      }
    `,
    [VARIANTS.PLAIN]: css`
      color: var(--button-outline-color);
      background: transparent;
    `,
    [VARIANTS.OUTLINE]: css`
      color: var(--button-outline-color);
      border: 1px solid var(--button-outline-color);
      background-color: transparent;
    `,
  },
  disabled: css`
    opacity: 0.5;
    cursor: default;
  `,
};

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  border-radius: 3px;
  font-family: var(--primary-font-family);
  line-height: 1;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.15s ease-out;
  white-space: nowrap;
  text-decoration: none;

  ${({ variant }) => styles.variant[variant]}
  ${({ size }) => styles.size[size]}
  ${({ disabled }) => disabled && styles.disabled}
`;

Button.VARIANT = VARIANTS;
Button.SIZE = SIZES;

Button.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(Button.SIZE)),
  variant: PropTypes.oneOf(Object.values(Button.VARIANT)).isRequired,
};

export default Button;
