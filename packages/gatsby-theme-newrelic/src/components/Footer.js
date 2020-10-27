import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Logo from './Logo';
import ExternalLink from './ExternalLink';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { css } from '@emotion/core';

const Footer = ({ fileRelativePath, noEdit }) => {
  const { site } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          repository
        }
        layout {
          contentPadding
        }
      }
    }
  `);

  const { siteMetadata, layout } = site;

  return (
    <footer
      data-swiftype-index={false}
      css={css`
        align-items: center;
        border-top: 1px solid var(--divider-color);
        color: var(--secondary-text-color);
        display: flex;
        font-size: 0.75rem;
        grid-area: footer;
        justify-content: space-between;
        margin-right: ${layout.contentPadding};
        padding: ${layout.contentPadding} 0;
        z-index: 1;

        @media (max-width: 1080px) {
          flex-direction: column;
        }

        a {
          color: currentColor;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;

          @media (max-width: 760px) {
            display: block;
          }
        `}
      >
        <Link to="/">
          <Logo />
        </Link>
        <div
          css={css`
            margin-left: 0.5rem;
            padding-left: 0.5rem;
            border-left: 1px dotted var(--border-color);

            @media (max-width: 760px) {
              border-left: none;
              margin-left: 0;
              padding: 0.5rem;
            }
          `}
        >
          Copyright &copy; 2020 New Relic Inc.
        </div>
      </div>

      <div
        css={css`
          display: flex;

          a {
            padding-right: 0;
            display: flex;
            align-items: center;

            &:hover {
              color: var(--secondary-text-hover-color);
            }

            &:not(:first-child) {
              margin-left: 1rem;
            }

            svg {
              margin-right: 0.5rem;
            }
          }
        `}
      >
        <Link to="/terms">
          <Icon name="pen" size="1rem" />
          Terms of service
        </Link>

        {fileRelativePath && !noEdit && (
          <ExternalLink
            href={`${siteMetadata.repository}/blob/main/${fileRelativePath}`}
          >
            <Icon name="edit" size="1rem" />
            Edit this page
          </ExternalLink>
        )}

        <ExternalLink href={`${siteMetadata.repository}/issues/new/choose`}>
          <Icon name="github" size="1rem" />
          Create an issue
        </ExternalLink>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  noEdit: PropTypes.bool,
  fileRelativePath: PropTypes.string,
};

Footer.propTypes = {
  noEdit: false,
};

export default Footer;
