import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from './ExternalLink';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/react';
import useThemeTranslation from '../hooks/useThemeTranslation';
import Trans from './Trans';
import Link from './Link';
import RecaptchaFooter from './SignupModal/RecaptchaFooter';
import Button from './Button';

// We need to use this as a JS value otherwise the HTML entity gets saved in the
// string and escaped by React, therefore rendering the literal &copy; text in
// the footer
const copyrightSymbol = String.fromCharCode(169);
const year = new Date().getFullYear();

const GlobalFooter = ({ className }) => {
  const { t } = useThemeTranslation();
  const { sitePage } = useStaticQuery(graphql`
    query FooterQuery {
      sitePage(path: { eq: "/terms" }) {
        id
      }
    }
  `);

  const hasOsano = () => {
    if (typeof window !== 'undefined') {
      return window.Osano !== undefined;
    }
    return false;
  };

  const handlePrivacyClick = () => {
    window.Osano.cm.showDrawer('osano-cm-dom-info-dialog-open');
  };

  return (
    <footer
      data-swiftype-index={false}
      className={className}
      css={css`
        color: var(--system-text-primary-dark);
        background-color: var(--system-text-primary-light);
        z-index: var(--depth-1);

        a {
          color: var(--system-text-primary-dark);
          border-color: var(--system-text-primary-dark);
        }
      `}
    >
      <div>
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
            Copyright {{ copyrightSymbol }} {{ year }} New Relic Inc.
          </Trans>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: flex-end;
            `}
          >
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
                {t('footer.dmcaPolicy', 'DMCA Policy')}
              </ExternalLink>
              <ExternalLink href="https://newrelic.com/termsandconditions/services-notices">
                {t('footer.privacyNotice', 'Privacy Notice')}
              </ExternalLink>
              {hasOsano() && (
                <Button
                  variant={Button.VARIANT.LINK}
                  css={css`
                    padding: 0;
                    margin-left: 0.75rem;
                    font-size: 0.75rem;
                    text-decoration: underline;
                    white-space: nowrap;
                    color: var(--system-text-primary-dark);
                  `}
                  onClick={handlePrivacyClick}
                >
                  {t('footer.privacyChoices')}
                </Button>
              )}

              <ExternalLink href="https://newrelic.com/termsandconditions/cookie-policy">
                {t('footer.cookiePolicy', 'Cookie Policy')}
              </ExternalLink>
              <ExternalLink href="https://newrelic.com/termsandconditions/uk-slavery-act">
                {t('footer.ukSlaveryAct', 'UK Slavery Act')}
              </ExternalLink>
            </div>
            <RecaptchaFooter />
          </div>
        </div>
      </div>
    </footer>
  );
};

GlobalFooter.propTypes = {
  className: PropTypes.string,
};

export default GlobalFooter;
