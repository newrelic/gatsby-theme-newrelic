/* eslint-disable jsx-a11y/anchor-has-content */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';
import useLocale from '../hooks/useLocale';
import useTessen from '../hooks/useTessen';
import { localizeExternalLink, localizePath } from '../utils/localization';
import SignUpLink from './SignUpLink';
import Icon from './Icon';
import { addTrailingSlash } from '../utils/location';
import { css } from '@emotion/react';

const isHash = (to) => to.startsWith('#');
const isExternal = (to) => to.startsWith('http');
const isNewRelic = (to) => to.startsWith('https://newrelic.com');
const isNewRelicDomain = (to) =>
  to.endsWith('newrelic.com') || to.includes('newrelic.com/');
const isSignup = (to) => to.startsWith('https://newrelic.com/signup');
const isImageLink = (className) => className === 'gatsby-resp-image-link';

const Link = forwardRef(({ to, instrumentation = {}, displayExternalIcon, ...props }, ref) => {
  const locale = useLocale();
  const tessen = useTessen();

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

  const handleExternalLinkClick = () => {
    tessen.track('gatsbyTheme', 'ExternalLinkClick', {
      actionName: 'externalLink_click',
      href: to,
      ...instrumentation,
    });
  };

  const handleInternalLinkClick = () => {
    tessen.track('gatsbyTheme', 'InternalLinkClick', {
      actionName: 'internalLink_click',
      href: to,
      ...instrumentation,
    });
  };

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
    const link = isNewRelic(to)
      ? localizeExternalLink({ link: to, locale })
      : to;

    return (
      <>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a
          {...props}
          href={link}
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
});

Link.propTypes = {
  to: PropTypes.string.isRequired,
  instrumentation: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  displayExternalIcon: PropTypes.bool,
};

export default Link;
