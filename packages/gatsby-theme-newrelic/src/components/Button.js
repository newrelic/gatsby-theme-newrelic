import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { rgba } from 'polished';

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
      color: var(--color-white);
      background-color: var(--color-brand-600);

      &:hover {
        color: var(--color-white);
        background-color: var(--color-brand-500);
      }
    `,
    [VARIANTS.LINK]: css`
      color: var(--link-color);
      background: transparent;

      &:hover {
        color: var(--link-hover-color);
      }
    `,
    [VARIANTS.NORMAL]: css`
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
    [VARIANTS.PLAIN]: css`
      color: var(--color-neutrals-700);
      background: transparent;

      &:hover {
        color: var(--color-brand-600);
        background: ${rgba('#70ccd2', 0.17)};
      }

      .dark-mode & {
        color: var(--color-dark-700);

        &:hover {
          color: var(--color-brand-200);
          background-color: ${rgba('#70ccd2', 0.17)};
        }
      }
    `,
    [VARIANTS.OUTLINE]: css`
      color: var(--color-neutrals-700);
      border: 1px solid var(--border-color);
      background-color: transparent;

      &:hover {
        color: var(--color-brand-600);
        border-color: var(--color-brand-500);
      }

      .dark-mode & {
        color: var(--color-dark-700);

        &:hover {
          color: var(--color-brand-200);
          border-color: ${rgba('#70ccd2', 0.17)};
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
