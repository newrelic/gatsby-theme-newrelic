import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import ExternalLink from './ExternalLink';

const GlobalNavLink = ({ children, href, activeSite }) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(graphql`
    query GlobalNavLinkQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  // Does the href start with this URL (and we don't have a site manually set)
  // OR do we have a site manually set and the href matches.
  const isCurrentSite =
    (href.startsWith(siteUrl) && !activeSite) ||
    (activeSite && activeSite.href === href);

  const Component = isCurrentSite ? Link : ExternalLink;
  const props = isCurrentSite ? { to: '/' } : { href };

  return (
    <Component
      {...props}
      css={css`
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0.25rem 9px;
        color: var(--secondary-text-color);
        font-size: 0.6875rem;
        transition: 0.2s;
        text-decoration: none;

        ${isCurrentSite && '&,'}
        &:hover {
          background-color: var(--color-neutrals-300);
          color: var(--color-neutrals-700);

          .dark-mode & {
            background-color: var(--color-dark-300);
            color: var(--color-dark-700);
          }
        }
      `}
    >
      {children}
    </Component>
  );
};

GlobalNavLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
  activeSite: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
};

export default GlobalNavLink;
