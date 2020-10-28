import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Icon from './Icon';
import Logo from './Logo';
import ExternalLink from './ExternalLink';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { css } from '@emotion/core';

const Footer = ({ fileRelativePath, className }) => {
  const { site, sitePage } = useStaticQuery(graphql`
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
      sitePage(path: { eq: "/terms" }) {
        id
      }
    }
  `);

  const { siteMetadata, layout } = site;
  const { branch, repository } = siteMetadata;

  return (
    <footer
      data-swiftype-index={false}
      className={className}
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
        <div
          css={css`
            a {
              margin-left: 0.75rem;
            }
          `}
        >
          {sitePage ? (
            <Link to="/terms">Terms of Service</Link>
          ) : (
            <ExternalLink href="https://newrelic.com/termsandconditions/terms">
              Terms of Service
            </ExternalLink>
          )}

          <ExternalLink href="https://newrelic.com/termsandconditions/dmca">
            DCMA Policy
          </ExternalLink>
          <ExternalLink href="https://newrelic.com/termsandconditions/services-notices">
            Privacy Notice
          </ExternalLink>
          <ExternalLink href="https://newrelic.com/termsandconditions/cookie-policy">
            Cookie Policy
          </ExternalLink>
          <ExternalLink href="https://newrelic.com/termsandconditions/uk-slavery-act">
            UK Slavery Act
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  fileRelativePath: PropTypes.string,
  className: PropTypes.string,
};

export default Footer;
