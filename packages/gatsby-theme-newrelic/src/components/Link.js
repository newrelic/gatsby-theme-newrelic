import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';

const Link = ({ to, ...props }) => {
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

  if (to.startsWith('/')) {
    return <GatsbyLink to={to} {...props} />;
  }

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a href={to} target="_blank" rel="noopener noreferrer" {...props} />;
};

Link.propTypes = {
  to: PropTypes.string,
};

export default Link;
