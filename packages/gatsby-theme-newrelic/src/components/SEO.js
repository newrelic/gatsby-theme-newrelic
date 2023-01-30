import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import useLocale from '../hooks/useLocale';
import path from 'path';

const SEO = ({ title, location, type, children }) => {
  const {
    site: { siteMetadata },
    allLocale: { nodes: locales },
    newRelicThemeConfig,
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
      newRelicThemeConfig {
        signup {
          reCaptchaToken
        }
        feedback {
          reCaptchaToken
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
    if (type) {
      return type;
    }
    const hostname = new URL(siteUrl).hostname;
    const nrSubDomain = /.*\.newrelic\.com/.test(hostname)
      ? hostname.split('.')[0]
      : null;
    const localeString = locale.isDefault ? '' : `-${locale.locale}`;
    return nrSubDomain ? nrSubDomain.concat(localeString) : null;
  };

  const recaptchaLinkScript = () => {
    // commenting out since we aren't using signup at the moment
    // if (newRelicThemeConfig.signup?.reCaptchaToken) {
    //   return (
    //     <script
    //       key="google-recaptcha"
    //       async
    //       defer
    //       src={`https://www.google.com/recaptcha/api.js?render=${newRelicThemeConfig.signup?.reCaptchaToken}`}
    //     />
    //   );
    // }
    if (newRelicThemeConfig.feedback?.reCaptchaToken) {
      return (
        <script
          key="google-recaptcha"
          async
          defer
          src={`https://www.google.com/recaptcha/api.js?render=${newRelicThemeConfig.feedback?.reCaptchaToken}`}
        />
      );
    }
  };

  const siteLinkScript = () => {
    const { pathname } = location;
    const homepage = '/';
    if (pathname === homepage && siteUrl) {
      return (
        <script type="application/ld+json">
          {`{
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "${siteUrl}",
              "potentialAction": [{
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "${siteUrl}/?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }]
            }`}
        </script>
      );
    }
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
            hrefLang={isDefault ? 'x-default' : hrefLang}
          />
        );
      })}

      {/* Android and Safari iOS */}
      <meta name="theme-color" content="#293338" />

      {getSwiftypeSiteType() && (
        <meta
          className="swiftype"
          name="type"
          data-type="enum"
          content={getSwiftypeSiteType()}
        />
      )}
      {recaptchaLinkScript()}
      {siteLinkScript()}
      {children}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  type: PropTypes.string,
  children: PropTypes.node,
};

export default SEO;
