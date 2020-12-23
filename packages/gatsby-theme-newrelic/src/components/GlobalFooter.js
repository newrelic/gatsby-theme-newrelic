import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Icon from './Icon';
import Logo from './Logo';
import ExternalLink from './ExternalLink';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { css } from '@emotion/core';
import createIssueURL from '../utils/createIssueURL';

const GlobalFooter = ({ fileRelativePath, className, title, slug }) => {
  const { site, sitePage } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          siteUrl
          repository
          branch
        }
        layout {
          contentPadding
          maxWidth
        }
      }
      sitePage(path: { eq: "/terms" }) {
        id
      }
    }
  `);

  const { siteMetadata, layout } = site;
  const { branch, repository, siteUrl } = siteMetadata;

  const issueUrl = createIssueURL(
    repository,
    title && `Issue: ${title}`,
    ['bug'],
    { title, slug, siteUrl }
  );

  return (
    <footer
      data-swiftype-index={false}
      className={className}
      css={css`
        color: var(--secondary-text-color);
        background-color: var(--color-neutrals-050);
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
          padding: 1rem ${layout.contentPadding};
          max-width: ${layout.maxWidth};
          margin: 0 auto;

          @media screen and (max-width: 550px) {
            flex-direction: column;
            justify-content: center;
          }
        `}
      >
        <Link to="/">
          <Logo
            width="150px"
            css={css`
              display: block;

              @media screen and (max-width: 550px) {
                margin-bottom: 1rem;
              }
            `}
          />
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
                name="fe-edit"
                css={css`
                  margin-right: 0.5rem;
                `}
              />
              Edit this page
            </Button>
          )}

          <Button
            as={ExternalLink}
            href={issueUrl}
            variant={Button.VARIANT.OUTLINE}
            size={Button.SIZE.SMALL}
          >
            <Icon
              name="fe-github"
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

          .dark-mode & {
            background-color: rgba(0, 0, 0, 0.2);
          }
        `}
      >
        <div
          css={css`
            font-size: 0.75rem;
            align-items: center;
            justify-content: space-between;
            display: grid;
            grid-template-columns: auto auto;
            grid-template-areas: 'copyright legal';
            padding: 0.5rem ${layout.contentPadding};
            max-width: ${layout.maxWidth};
            margin: 0 auto;

            @media screen and (max-width: 760px) {
              justify-content: center;
              text-align: center;
              grid-template-columns: auto;
              grid-gap: 0.5rem;
              grid-template-areas:
                'legal'
                'copyright';
            }
          `}
        >
          <div
            css={css`
              grid-area: copyright;
              text-transform: uppercase;
              font-size: 0.5rem;
              letter-spacing: 0.1rem;
            `}
          >
            Copyright &copy; 2020 New Relic Inc.
          </div>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              grid-area: legal;

              a {
                margin-left: 0.75rem;
                white-space: nowrap;
              }
            `}
          >
            <ExternalLink href="https://newrelic.com/about/careers">
              Careers
            </ExternalLink>
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
      </div>
    </footer>
  );
};

GlobalFooter.propTypes = {
  fileRelativePath: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  slug: PropTypes.string,
};

export default GlobalFooter;
