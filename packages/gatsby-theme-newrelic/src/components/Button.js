import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { rgba } from 'polished';

const VARIANTS = {
  PRIMARY: 'primary',
  NORMAL: 'normal',
  LINK: 'link',
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
      font-size: 0.675rem;
      padding: 0.25rem 0.625rem;
      border-radius: 0.125rem;
    `,
  },
  variant: {
    [VARIANTS.PRIMARY]: css`
      border: 0;
      color: var(--color-white);
      background-color: var(--color-brand-600);

      &:hover {
        background-color: var(--color-brand-500);
      }
    `,
    [VARIANTS.LINK]: css`
      border: 0;
      color: var(--link-color);
      background: transparent;

      &:hover {
        color: var(--link-hover-color);
      }
    `,
    [VARIANTS.NORMAL]: css`
      border: 0;
      color: var(--color-neutrals-700);
      background-color: var(--color-neutrals-100);

      &:hover {
        color: var(--color-brand-600);
        background: ${rgba('#70ccd2', 0.17)};
      }

      .dark-mode & {
        color: var(--color-dark-700);
        background-color: var(--color-dark-200);

        &:hover {
          color: var(--color-brand-200);
          background-color: ${rgba('#70ccd2', 0.17)};
        }
      }
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
  font-weight: 600;
  border-radius: 3px;
  font-family: var(--primary-font-family);
  line-height: 1;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  transition: all 0.09s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: translateY(-1px);
  }

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
