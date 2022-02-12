import { css } from '@emotion/react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import ExternalLink, { ExternalLinkProps } from './ExternalLink';

interface GlobalNavLinkProps {
  href: string;
  activeSite: {
    text: string;
    href: string;
  };
  children?: Node | string;
  instrumentation?: Record<string, string>;
}

interface GlobalNavLinkQueryResults {
  site: {
    siteMetadata: { siteUrl: string };
  };
}

const GlobalNavLink = ({
  children,
  href,
  activeSite,
  instrumentation,
}: GlobalNavLinkProps): JSX.Element => {
  const data: GlobalNavLinkQueryResults = useStaticQuery(graphql`
    query GlobalNavLinkQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = data;
  // Does the href start with this URL (and we don't have a site manually set)
  // OR do we have a site manually set and the href matches.
  const isCurrentSite: boolean =
    (href.startsWith(siteUrl) && !activeSite) ||
    (activeSite && activeSite.href === href);

  type ComponentType =
    | typeof Link
    | (({ href, ...props }: ExternalLinkProps) => JSX.Element)
    | { instrumentation: Record<string, string>; navInteactionType: string };

  const Component: ComponentType = isCurrentSite ? Link : ExternalLink;
  const props = isCurrentSite ? { to: '/' } : { href };

  return (
    <Component
      {...props}
      css={css`
        --active-color: var(--color-neutrals-900);
        --hover-color: none;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0.25rem 0.5625rem;
        color: var(--color-neutrals-100);
        font-size: 0.75rem;
        line-height: 1.125rem;

        transition: 0.2s;
        text-decoration: none;

        ${isCurrentSite && '&,'}

        &:active {
          background-color: var(--active-color);
        }

        &:hover {
          color: var(--color-neutrals-600);
          background-color: var(--active-color);
        }

        .dark-mode & {
          --active-color: var(--color-dark-100);
          --hover-color: var(--color-neutrals-600);
        }
      `}
      instrumentation={{
        ...instrumentation,
        navInteractionType: 'globalNavLinkClick',
      }}
    >
      {children}
    </Component>
  );
};

export default GlobalNavLink;
