import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Logo from './Logo';
import ExternalLink from './ExternalLink';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { css } from '@emotion/core';
import CreateIssueButton from './CreateIssueButton';
import EditPageButton from './EditPageButton';
import useThemeTranslation from '../hooks/useThemeTranslation';
import Trans from './Trans';

// We need to use this as a JS value otherwise the HTML entity gets saved in the
// string and escaped by React, therefore rendering the literal &copy; text in
// the footer
const copyrightSymbol = String.fromCharCode(169);

const GlobalFooter = ({ fileRelativePath, className, pageTitle }) => {
  const { t } = useThemeTranslation();
  const { site, sitePage } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          siteUrl
          repository
        }
      }
      sitePage(path: { eq: "/terms" }) {
        id
      }
    }
  `);

  const { siteMetadata } = site;
  const { repository } = siteMetadata;

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
          padding: 1rem var(--site-content-padding);
          max-width: var(--site-max-width);
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
          {repository && (
            <CreateIssueButton
              pageTitle={pageTitle}
              variant={Button.VARIANT.OUTLINE}
              size={Button.SIZE.SMALL}
              instrumentation={{ component: 'GlobalFooter' }}
              css={css`
                margin-right: 0.5rem;
              `}
            />
          )}

          {repository && fileRelativePath && (
            <EditPageButton
              fileRelativePath={fileRelativePath}
              variant={Button.VARIANT.OUTLINE}
              size={Button.SIZE.SMALL}
              instrumentation={{ component: 'GlobalFooter' }}
            />
          )}
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
            padding: 0.5rem var(--site-content-padding);
            max-width: var(--site-max-width);
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
          <Trans
            i18nKey="footer.copyright"
            parent="div"
            css={css`
              grid-area: copyright;
              text-transform: uppercase;
              font-size: 0.5rem;
              letter-spacing: 0.1rem;
            `}
          >
            Copyright {{ copyrightSymbol }} 2021 New Relic Inc.
          </Trans>
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
              {t('footer.careers', 'Careers')}
            </ExternalLink>
            {sitePage ? (
              <Link to="/terms">{t('footer.terms', 'Terms of Service')}</Link>
            ) : (
              <ExternalLink href="https://newrelic.com/termsandconditions/terms">
                {t('footer.terms', 'Terms of Service')}
              </ExternalLink>
            )}

            <ExternalLink href="https://newrelic.com/termsandconditions/dmca">
              {t('footer.dcmaPolicy', 'DCMA Policy')}
            </ExternalLink>
            <ExternalLink href="https://newrelic.com/termsandconditions/services-notices">
              {t('footer.privacyNotice', 'Privacy Notice')}
            </ExternalLink>
            <ExternalLink href="https://newrelic.com/termsandconditions/cookie-policy">
              {t('footer.cookiePolicy', 'Cookie Policy')}
            </ExternalLink>
            <ExternalLink href="https://newrelic.com/termsandconditions/uk-slavery-act">
              {t('footer.ukSlaveryAct', 'UK Slavery Act')}
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
  pageTitle: PropTypes.string,
};

export default GlobalFooter;
