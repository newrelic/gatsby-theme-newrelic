/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';
import useLocale from '../hooks/useLocale';
import useInstrumentedHandler from '../hooks/useInstrumentedHandler';
import { localizeExternalLink, localizePath } from '../utils/localization';
import SignUpLink from './SignUpLink';

const isHash = (to) => to.startsWith('#');
const isExternal = (to) => to.startsWith('http');
const isNewRelic = (to) => to.startsWith('https://newrelic.com');
const isSignup = (to) => to.startsWith('https://newrelic.com/signup');

const Link = ({ to, onClick, instrumentation = {}, ...props }) => {
  const locale = useLocale();

  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(graphql`
    query {
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
  }

  if (isHash(to)) {
    return <a href={to} {...props} />;
  }

  if (isSignup(to)) {
    return (
      <SignUpLink
        {...props}
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
        {...props}
        href={link}
        onClick={handleExternalLinkClick}
        target="_blank"
        rel="noopener noreferrer"
      />
    );
  }

  return <GatsbyLink to={localizePath({ path: to, locale })} {...props} />;
};

Link.propTypes = {
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,
  instrumentation: PropTypes.object,
};

export default Link;
