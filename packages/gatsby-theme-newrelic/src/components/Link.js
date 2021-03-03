/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';
import useLocale from '../hooks/useLocale';
import { localizePath } from '../utils/localization';
import ExternalLink from './ExternalLink';

const isHash = (to) => to.startsWith('#');
const isExternal = (to) => to.startsWith('http');

const Link = ({ to, onClick, ...props }) => {
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

  if (to.startsWith(siteUrl)) {
    to = to.replace(siteUrl, '');
  }

  if (isHash(to)) {
    return <a href={to} {...props} />;
  }

  if (isExternal(to)) {
    return <ExternalLink href={to} onClick={onClick} {...props} />;
  }

  return <GatsbyLink to={localizePath({ path: to, locale })} {...props} />;
};

Link.propTypes = {
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,
};

export default Link;
