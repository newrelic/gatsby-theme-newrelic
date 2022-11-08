import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { React } from 'react';

const BASES = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
};

const styles = {
  base: {
    [BASES.PRIMARY]: css`
      border: 1px solid var(--border-color);
      background: var(--primary-background-color);
    `,

    [BASES.SECONDARY]: css`
      background: var(--primary-background-color);
      .dark-mode & {
        background: var(--primary-hover-color);
      }
    `,
  },
  interactive: {
    [BASES.PRIMARY]: css`
      &:hover {
        border-color: var(--border-color);
      }
    `,
  },
};

const Surface = (props) => {
  const { base, interactive, children, className, as: Component } = props;
  return (
    <Component
      {...props}
      css={css`
        border-radius: 0.25rem;
        box-shadow: var(--shadow-3);
        text-decoration: none;

        ${styles.base[base]};

        ${interactive &&
        css`
          cursor: pointer;
          transition: transform 0.15s ease-out, border-color 0.15s ease-out,
            box-shadow 0.15s ease-out;

          &:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-4);
          }

          ${styles.interactive[base]};
        `}
      `}
      className={className}
    >
      {children}
    </Component>
  );
};

Surface.propTypes = {
  /**
   * Must be either 'PRIMARY' or 'SECONDARY'
   */
  base: PropTypes.oneOf(Object.values(BASES)).isRequired,
  /**
   * Whether the surface will move on hover defaulting to "false"
   */
  interactive: PropTypes.bool,
  /**
   * The inner HTML
   */
  children: PropTypes.node,
  /**
   * This will usually need to be specified whenever the Surface has a 'css' prop, for those injected styles to render
   */
  className: PropTypes.string,
  /**
   * Changes the react component/html tag of Surface (for example, 'img' or {Link}), defaulting to 'div'
   */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Surface.defaultProps = {
  interactive: false,
  as: 'div',
};

Surface.BASE = BASES;

export default Surface;
