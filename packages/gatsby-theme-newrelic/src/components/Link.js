/* eslint-disable jsx-a11y/anchor-has-content */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';
import useLocale from '../hooks/useLocale';
import { localizePath } from '../utils/localization';
import SignUpLink from './SignUpLink';
import Icon from './Icon';
import { addTrailingSlash } from '../utils/location';
import useInstrumentedHandler from '../hooks/useInstrumentedHandler';
import { css } from '@emotion/react';

const isHash = (to) => to.startsWith('#');
const isExternal = (to) => to.startsWith('http');
const isNewRelicDomain = (to) =>
  to.endsWith('newrelic.com') || to.includes('newrelic.com/');
const isSignup = (to) => to.startsWith('https://newrelic.com/signup');
const isImageLink = (className) => className === 'gatsby-resp-image-link';

const Link = forwardRef(
  (
    { to, onClick, instrumentation = {}, displayExternalIcon, ...props },
    ref
  ) => {
    const locale = useLocale();

    const {
      newRelicThemeConfig: { forceTrailingSlashes },
      site: {
        siteMetadata: { siteUrl },
      },
    } = useStaticQuery(graphql`
      query {
        newRelicThemeConfig {
          forceTrailingSlashes
        }
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `);

    const handleExternalLinkClick = useInstrumentedHandler(
      onClick,
      {
        tessenEventName: 'gatsbyTheme',
        tessenCategoryName: 'ExternalLinkClick',
        href: to,
        ...instrumentation,
      },
      'tessen'
    );

    const handleInternalLinkClick = useInstrumentedHandler(
      onClick,
      {
        tessenEventName: 'gatsbyTheme',
        tessenCategoryName: 'InternalLinkClick',
        href: to,
        ...instrumentation,
      },
      'tessen'
    );

    if (to.startsWith(siteUrl)) {
      to = to.replace(siteUrl, '');

      // absolute links to the home page without trailing slash
      to = to || '/';
    }

    if (isHash(to)) {
      return <a ref={ref} href={to} {...props} />;
    }

    if (isSignup(to)) {
      return (
        <SignUpLink
          {...props}
          href={to}
          onClick={handleExternalLinkClick}
          instrumentation={instrumentation}
          ref={ref}
        />
      );
    }

    if (isExternal(to)) {
      const rel = isNewRelicDomain(to) ? 'noopener' : 'noopener noreferrer';

      return (
        <>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a
            {...props}
            href={to}
            onClick={handleExternalLinkClick}
            target="_blank"
            rel={rel}
            ref={ref}
          >
            {props.children}
            {displayExternalIcon && (
              <Icon
                name="fe-external-link"
                css={css`
                  margin-left: 0.25rem;
                  position: relative;
                  top: -1px;
                `}
                size="1em"
              />
            )}
          </a>
        </>
      );
    }

    if (isImageLink(props.className)) {
      return <a {...props} href={to} />;
    }

    return (
      <GatsbyLink
        to={localizePath({
          path: forceTrailingSlashes ? addTrailingSlash(to) : to,
          locale,
        })}
        ref={ref}
        onClick={handleInternalLinkClick}
        {...props}
      />
    );
  }
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  instrumentation: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  displayExternalIcon: PropTypes.bool,
};

export default Link;
