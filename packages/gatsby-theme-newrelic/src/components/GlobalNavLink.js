import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql, Link, useStaticQuery } from 'gatsby';
import ExternalLink from './ExternalLink';

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

  const isCurrentSite = href.startsWith(siteUrl);

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
