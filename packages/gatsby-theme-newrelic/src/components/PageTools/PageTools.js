import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import Section from './Section';
import Title from './Title';

const PageTools = ({ className, children }) => {
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
    <aside
      data-swiftype-index={false}
      className={className}
      css={css`
        align-self: start;
        position: sticky;
        top: calc(var(--global-header-height) + ${layout.contentPadding});
        border: 1px solid var(--divider-color);
        border-radius: 0.25rem;
        overflow-y: auto;
        max-height: calc(
          100vh - (var(--global-header-height) + ${layout.contentPadding} * 2)
        );
      `}
    >
      {children}
    </aside>
  );
};

PageTools.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

PageTools.Section = Section;
PageTools.Title = Title;

export default PageTools;
