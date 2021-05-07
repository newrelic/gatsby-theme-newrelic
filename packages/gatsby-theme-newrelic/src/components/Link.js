/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';
import useLocale from '../hooks/useLocale';
import useInstrumentedHandler from '../hooks/useInstrumentedHandler';
import { localizeExternalLink, localizePath } from '../utils/localization';
import SignUpLink from './SignUpLink';
import { addTrailingSlash } from '../utils/location';

const isHash = (to) => to.startsWith('#');
const isExternal = (to) => to.startsWith('http');
const isNewRelic = (to) => to.startsWith('https://newrelic.com');
const isSignup = (to) => to.startsWith('https://newrelic.com/signup');

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
const ATTRIBUTES = [
  'download',
  'href',
  'hreflang',
  'ping',
  'rel',
  'target',
  'type',
  'children',
  'role',
];

const Link = ({ to, onClick, instrumentation = {}, ...props }) => {
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

  const handleExternalLinkClick = useInstrumentedHandler(onClick, {
    actionName: 'externalLink_click',
    href: to,
    ...instrumentation,
  });

  if (to.startsWith(siteUrl)) {
    to = to.replace(siteUrl, '');

    // absolute links to the home page without trailing slash
    to = to || '/';
  }

  const normalizedProps = Object.entries(props)
    .filter(([attribute]) => ATTRIBUTES.includes(attribute))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

  if (isHash(to)) {
    return <a href={to} {...normalizedProps} />;
  }

  if (isSignup(to)) {
    return (
      <SignUpLink
        {...normalizedProps}
        href={to}
        onClick={handleExternalLinkClick}
        instrumentation={instrumentation}
      />
    );
  }

  if (isExternal(to)) {
    const link = isNewRelic(to)
      ? localizeExternalLink({ link: to, locale })
      : to;

    return (
      <a
        {...normalizedProps}
        href={link}
        onClick={handleExternalLinkClick}
        target="_blank"
        rel="noopener noreferrer"
      />
    );
  }

  return (
    <GatsbyLink
      to={localizePath({
        path: forceTrailingSlashes ? addTrailingSlash(to) : to,
        locale,
      })}
      {...normalizedProps}
    />
  );
};

Link.propTypes = {
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,
  instrumentation: PropTypes.object,
};

export default Link;
