/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Link from './Link';
import Icon from './Icon';
import Button from './Button';

const NavLink = ({
  active,
  children,
  href,
  icon: LinkIcon,
  isExpanded,
  expandable,
  onClick,
}) => {
  const isExternalLink = href && !href?.startsWith('/');
  const Element = href ? Link : 'div';

  return (
    <Element
      href={href}
      onClick={onClick}
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        color: var(--primary-text-color);
        transition: 0.2s ease-out;
        padding: 0.5rem 0.5rem 0.5rem 1rem;
        margin: 0 -1rem;
        font-size: 0.875rem;

        &:hover {
          color: var(--primary-text-hover-color);
        }

        ${active &&
        css`
          background: var(--color-neutrals-100);
          border-radius: 0.25rem;

          .dark-mode & {
            background: var(--color-dark-100);
          }
        `}
      `}
    >
      {LinkIcon && (
        <LinkIcon
          size="1.75rem"
          css={css`
            margin-right: 0.5rem;
          `}
        />
      )}

      <span
        css={css`
          flex: 1;
        `}
      >
        {children}
      </span>

      {isExternalLink ? (
        <Icon name="external-link" size="1rem" />
      ) : expandable ? (
        <Button
          size={Button.SIZE.EXTRA_SMALL}
          variant={Button.VARIANT.PLAIN}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClick && onClick();
          }}
          css={css`
            font-size: 1rem;
            padding: 0.25rem;
          `}
        >
          <Icon
            name="chevron-down"
            css={css`
              transform: rotate(${isExpanded ? 0 : -90}deg);
              transition: 0.2s ease-out;
            `}
          />
        </Button>
      ) : null}
    </Element>
  );
};

NavLink.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  expandable: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
};

export default NavLink;
