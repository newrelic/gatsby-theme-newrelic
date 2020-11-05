import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';

const Link = ({ href, ...props }) => {
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

  if (href.startsWith(siteUrl)) {
    href = href.replace(siteUrl, '');
  }

  if (href.startsWith('/')) {
    return <GatsbyLink to={href} {...props} />;
  }

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
};

Link.propTypes = {
  href: PropTypes.string,
};

export default Link;
