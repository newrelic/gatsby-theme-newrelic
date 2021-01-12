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
          titleTemplate
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

  const { defaultTitle, titleTemplate } = siteMetadata;

  const template = title ? titleTemplate : '%s';

  const subPath =
    currentLocale.locale === defaultLocale.locale
      ? location.pathname
      : location.pathname.replace(
          new RegExp(`\\/${currentLocale.locale}`),
          '/'
        );

  return (
    <Helmet titleTemplate={template}>
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
  location: PropTypes.shape({
    pathname: PropTypes.string,
    origin: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
};

export default SEO;
