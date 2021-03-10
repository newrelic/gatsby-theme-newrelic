import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import useLocale from '../hooks/useLocale';
import path from 'path';

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
          siteUrl
        }
      }
      allLocale {
        nodes {
          locale
          hrefLang
          isDefault
        }
      }
    }
  `);

  const locale = useLocale();
  const defaultLocale = locales.find(({ isDefault }) => isDefault);
  const { defaultTitle, titleTemplate, siteUrl } = siteMetadata;
  const template = title ? titleTemplate : '%s';

  const subPath =
    locale.locale === defaultLocale.locale
      ? location.pathname
      : location.pathname.replace(new RegExp(`^\\/${locale.locale}`), '/');

  const getSwiftypeSiteType = () => {
    const nrSubDomain = /.*\.newrelic\.com/.test(location.hostname)
      ? location.hostname.split('.')[0]
      : 'demo';
    const localeString = locale.isDefault ? '' : `-${locale.locale}`;
    return nrSubDomain ? nrSubDomain.concat(localeString) : null;
  };

  return (
    <Helmet titleTemplate={template}>
      <html lang={locale.hrefLang} />
      <title>{title || defaultTitle}</title>
      <link rel="canonical" href={new URL(location.pathname, siteUrl).href} />
      {locales.map(({ hrefLang, isDefault, locale }) => {
        const url = new URL(
          path.join(isDefault ? '/' : locale, subPath),
          siteUrl
        );

        return (
          <link
            key={locale}
            rel="alternate"
            href={url.href}
            hrefLang={hrefLang}
          />
        );
      })}
      {getSwiftypeSiteType() && (
        <meta
          className="swiftype"
          name="type"
          data-type="enum"
          content={getSwiftypeSiteType()}
        />
      )}
      {children}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    hostname: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
};

export default SEO;
