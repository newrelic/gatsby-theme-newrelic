/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Link from './Link';
import Icon from './Icon';
import Button from './Button';
import useNRBrowserAgent from '../hooks/useNRBrowserAgent';

const NavLink = ({
  active,
  children,
  className,
  to,
  icon,
  isExpanded,
  expandable,
  onClick,
  onToggle,
  mobileBreakpoint,
  ...props
}) => {
  const nrBrowserAgent = useNRBrowserAgent();

  const isExternalLink = to && !to.startsWith('/');
  const Element = to ? Link : 'div';

  return (
    <Element
      to={to}
      onClick={onClick}
      instrumentation={{
        navInteractionType: 'leftNavLinkClick',
      }}
      className={className}
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        color: var(--primary-text-color);
        transition: 0.2s ease-out;
        padding: 0.5rem var(--nav-link-padding);
        margin: 0 calc(var(--nav-link-padding) * -1);
        font-size: 0.875rem;
        text-decoration: none;
        border-radius: 0.25rem;

        &:hover {
          color: var(--secondary-text-color);
        }

        ${mobileBreakpoint &&
        css`
          @media screen and (max-width: ${mobileBreakpoint}) {
            border-radius: 0;
            border-left: var(--border-width) solid transparent;
          }
        `}

        ${active &&
        css`
          background: var(--nav-highlight);
        `}
      `}
      {...props}
    >
      {icon && (
        <Icon
          name={icon}
          size="var(--icon-size)"
          css={css`
            margin-right: var(--icon-spacing);
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
        <Icon name="fe-external-link" size="1rem" />
      ) : expandable ? (
        <Button
          size={Button.SIZE.EXTRA_SMALL}
          variant={Button.VARIANT.PLAIN}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggle && onToggle();
            nrBrowserAgent.addPageAction({
              eventName: 'navLinkInteraction',
              category: 'NavLink',
              name: 'navLinkClick',
              navInteractionType: 'leftNavMenuToggle',
              to,
              isExpanded,
            });
          }}
          css={css`
            font-size: 1rem;
            padding: 0.25rem;
            transform: translateX(0.25rem);
          `}
        >
          <Icon
            name="fe-chevron-down"
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
  className: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  expandable: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  onToggle: PropTypes.func,
  mobileBreakpoint: PropTypes.string,
};

export default NavLink;
