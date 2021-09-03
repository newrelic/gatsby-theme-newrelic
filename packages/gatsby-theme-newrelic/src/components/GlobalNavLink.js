import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import ExternalLink from './ExternalLink';
import { useLocation } from '@reach/router';

const GlobalNavLink = ({ children, href }) => {
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

  const location = useLocation();
  let isCurrentSite = href.startsWith(siteUrl);

  if (location.pathname.includes('/instant-observability/')) {
    isCurrentSite = href.includes('/instant-observability/');
  }

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
};

export default GlobalNavLink;
