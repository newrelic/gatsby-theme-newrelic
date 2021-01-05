import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import { css } from '@emotion/core';

const MenuItem = ({ children, href, onClick }) => {
  const Component = href ? Link : 'div';

  return (
    <Component
      onClick={onClick}
      css={css`
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
        transition: all 0.2s ease-out;
        color: black;

        &:hover {
          cursor: pointer;
          background: var(--color-neutrals-300);
          border-radius: 0.25rem;
        }
      `}
    >
      {children}
    </Component>
  );
};

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default MenuItem;
