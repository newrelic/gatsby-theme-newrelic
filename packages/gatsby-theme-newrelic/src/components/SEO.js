import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import useLocale from '../hooks/useLocale';
const path = require('path');

const SEO = ({ title, location, children }) => {
  const {
    site: { siteMetadata },
    allLocale: { nodes: locales },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
        }
      }
      allLocale {
        nodes {
          locale
          localizedPath
          isDefault
        }
      }
    }
  `);

  const currentLocale = useLocale();

  const defaultLocale = locales.find(({ isDefault }) => isDefault);

  const { defaultTitle } = siteMetadata;

  const subPath =
    currentLocale.locale === defaultLocale.locale
      ? location.pathname
      : location.pathname.replace(
          new RegExp(`\\/${currentLocale.locale}`),
          '/'
        );

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      {locales.map(({ locale, localizedPath }, i) => {
        return (
          <link
            key={i}
            rel="alternate"
            href={path.join(location.origin, localizedPath, subPath)}
            hreflang={locale}
          />
        );
      })}
      {children}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  children: PropTypes.node,
};

export default SEO;
