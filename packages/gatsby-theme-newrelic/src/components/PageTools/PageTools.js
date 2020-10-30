import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { css, ClassNames } from '@emotion/core';
import { borderRadius } from 'polished';
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
      {Children.map(children, (child, idx) => (
        <ClassNames>
          {({ cx, css }) =>
            cloneElement(child, {
              className: cx(
                child.props?.className,
                idx === 0 && css(borderRadius('top', '0.25rem')),
                idx === Children.count(children) - 1 &&
                  css(borderRadius('bottom', '0.25rem'))
              ),
            })
          }
        </ClassNames>
      ))}
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
