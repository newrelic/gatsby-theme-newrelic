import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Icon from './Icon';
import Logo from './Logo';
import ExternalLink from './ExternalLink';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { css } from '@emotion/core';

const Footer = ({ fileRelativePath }) => {
  const { site } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          repository
          branch
        }
        layout {
          contentPadding
        }
      }
    }
  `);

  const { siteMetadata, layout } = site;
  const { branch, repository } = siteMetadata;

  return (
    <footer
      data-swiftype-index={false}
      css={css`
        color: var(--secondary-text-color);
        background-color: var(--color-neutrals-050);
        grid-area: footer;
        z-index: 1;

        .dark-mode & {
          background-color: var(--color-dark-050);
        }

        a {
          color: currentColor;
        }
      `}
    >
      <div
        css={css`
          font-size: 0.75rem;
          align-items: center;
          justify-content: space-between;
          display: flex;
          padding: ${layout.contentPadding};
        `}
      >
        <Link to="/">
          <Logo />
        </Link>
        <div>
          {fileRelativePath && (
            <Button
              as={ExternalLink}
              href={`${repository}/blob/${branch}/${fileRelativePath}`}
              variant={Button.VARIANT.OUTLINE}
              size={Button.SIZE.SMALL}
              css={css`
                margin-right: 1rem;
              `}
            >
              <Icon
                name="edit"
                size="1rem"
                css={css`
                  margin-right: 0.5rem;
                `}
              />
              Edit this page
            </Button>
          )}

          <Button
            as={ExternalLink}
            href={`${repository}/issues/new/choose`}
            variant={Button.VARIANT.OUTLINE}
            size={Button.SIZE.SMALL}
          >
            <Icon
              name="github"
              size="1rem"
              css={css`
                margin-right: 0.5rem;
              `}
            />
            Create an issue
          </Button>
        </div>
      </div>

      <div
        css={css`
          background-color: rgba(0, 0, 0, 0.05);
          font-size: 0.75rem;
          align-items: center;
          justify-content: space-between;
          display: flex;
          padding: 0.5rem ${layout.contentPadding};

          .dark-mode & {
            background-color: rgba(0, 0, 0, 0.2);
          }
        `}
      >
        <div
          css={css`
            text-transform: uppercase;
            font-size: 0.5rem;
            letter-spacing: 0.1rem;
          `}
        >
          Copyright &copy; 2020 New Relic Inc.
        </div>
        <div>
          <Link to="/terms">Terms of service</Link>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  fileRelativePath: PropTypes.string,
};

export default Footer;
