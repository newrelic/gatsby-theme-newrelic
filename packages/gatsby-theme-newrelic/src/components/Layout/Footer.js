import React from 'react';
import PropTypes from 'prop-types';
import GlobalFooter from '../GlobalFooter';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = ({ fileRelativePath }) => {
  const {
    site: { layout },
  } = useStaticQuery(graphql`
    query {
      site {
        layout {
          contentPadding
        }
      }
    }
  `);

  return (
    <GlobalFooter
      fileRelativePath={fileRelativePath}
      css={css`
        grid-area: footer;
        margin: 0 -${layout.contentPadding};
      `}
    />
  );
};

Footer.propTypes = {
  fileRelativePath: PropTypes.string,
};

export default Footer;
