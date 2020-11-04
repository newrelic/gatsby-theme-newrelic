import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';

const Content = ({ className, children }) => {
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
    <main
      data-swiftype-name="body"
      data-swiftype-type="text"
      className={className}
      css={css`
        grid-area: content;
        padding: ${layout.contentPadding} 0;
      `}
    >
      {children}
    </main>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Content;
