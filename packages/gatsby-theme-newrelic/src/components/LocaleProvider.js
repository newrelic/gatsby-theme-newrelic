import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import LocaleContext from './LocaleContext';
import { useStaticQuery, graphql } from 'gatsby';

const LocaleProvider = ({ children, i18n }) => {
  const {
    allLocale: { nodes: locales },
  } = useStaticQuery(graphql`
    query {
      allLocale {
        nodes {
          name
          locale
          isDefault
        }
      }
    }
  `);

  const { language } = i18n;

  const locale = useMemo(() => {
    const defaultLocale = locales.find((locale) => locale.isDefault);

    if (!language) {
      return defaultLocale;
    }

    return (
      locales.find((locale) => locale.locale === language) || defaultLocale
    );
  }, [locales, language]);

  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
};

LocaleProvider.propTypes = {
  children: PropTypes.node,
  i18n: PropTypes.object.isRequired,
};

export default LocaleProvider;
