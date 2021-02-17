/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';
import useLocale from '../hooks/useLocale';
import useInstrumentedHandler from '../hooks/useInstrumentedHandler';
import { localizePath } from '../utils/localization';

const isHash = (to) => to.startsWith('#');
const isExternal = (to) => to.startsWith('http');

const Link = ({ to, onClick, ...props }) => {
  const locale = useLocale();
  const handleExternalLinkClick = useInstrumentedHandler(onClick, {
    actionName: 'externalLink_click',
    href: to,
  });

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

  if (to.startsWith(siteUrl)) {
    to = to.replace(siteUrl, '');
  }

  if (isHash(to)) {
    return <a href={to} {...props} />;
  }

  if (isExternal(to)) {
    return (
      <a
        href={to}
        onClick={handleExternalLinkClick}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    );
  }

  return <GatsbyLink to={localizePath({ path: to, locale })} {...props} />;
};

Link.propTypes = {
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,
};

export default Link;
