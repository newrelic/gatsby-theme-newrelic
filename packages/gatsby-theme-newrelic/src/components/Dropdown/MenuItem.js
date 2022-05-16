import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import { css } from '@emotion/react';

const MenuItem = ({ as, children, href, className, onClick }) => {
  const Component = as || (href ? Link : 'div');

  return (
    <Component
      onClick={onClick}
      className={className}
      to={href}
      css={css`
        display: block;
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
        transition: all 0.2s ease-out;
        color: var(--text-color);
        text-decoration: none;

        &:hover {
          color: var(--text-color);
          cursor: pointer;
          background: var(--primary-hover-color);
          border-radius: 0.25rem;

          .dark-mode & {
            background-color: var(--system-border-regular-dark);
          }
        }
      `}
    >
      {children}
    </Component>
  );
};

MenuItem.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default MenuItem;
