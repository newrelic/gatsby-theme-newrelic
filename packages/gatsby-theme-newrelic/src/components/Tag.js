import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Link } from '@newrelic/gatsby-theme-newrelic';
import { rgba } from 'polished';

const isInteractive = ({ Component: as, interactive }) =>
  interactive || as === 'a' || as === Link;

const Tag = ({
  uppercase,
  children,
  className,
  interactive,
  as: Component,
  ...props
}) => {
  return (
    <Component
      {...props}
      css={css`
        background: var(--system-background-muted-light);
        padding: 0.125rem 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        transition: all 0.07s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        backface-visibility: hidden;
        text-decoration: none;

        .dark-mode & {
          background: var(--system-background-selected-low-contrast-dark);
        }

        ${isInteractive({ interactive, Component }) &&
        css`
          &:hover {
            cursor: pointer;
            background: ${rgba('#70ccd2', 0.17)};
            transform: translateY(-1px);
          }
        `}
        ${uppercase &&
        css`
          text-transform: uppercase;
          letter-spacing: 1px;
        `}
      `}
      className={className}
    >
      {children}
    </Component>
  );
};

Tag.propTypes = {
  interactive: PropTypes.bool,
  uppercase: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Tag.defaultProps = {
  interactive: false,
  uppercase: false,
  as: 'span',
};

export default Tag;
