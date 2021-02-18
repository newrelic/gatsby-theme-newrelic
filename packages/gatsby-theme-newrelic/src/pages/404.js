import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import SkewedContainer from '../components/SkewedContainer';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import Link from '../components/Link';
import Trans from '../components/Trans';
import useThemeTranslation from '../hooks/useThemeTranslation';
import useInstrumentedData from '../hooks/useInstrumentedData';

const NotFoundPage = ({ location }) => {
  const { t } = useThemeTranslation();

  useInstrumentedData({
    actionName: '404_redirect',
    path: location.pathname,
  });

  return (
    <>
      <GlobalHeader />
      <div
        css={css`
          display: grid;
          grid-template-rows: 1fr auto;
          grid-template-areas:
            'content'
            'footer';
          min-height: calc(100vh - var(--global-header-height));
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            grid-area: content;
          `}
        >
          <SkewedContainer
            css={css`
              font-size: 1.125rem;
              padding: 8rem 0;
            `}
          >
            <h1
              css={css`
                font-size: 9rem;
                font-weight: normal;
                line-height: 1;
              `}
            >
              {t('404.statusCode')}
            </h1>
            <Trans i18nKey="404.errorMessage" parent="p">
              The URL you entered may be broken, or the page has been removed.{' '}
              <Link to="/">Go back to the home page</Link>.
            </Trans>
          </SkewedContainer>
        </div>
        <GlobalFooter />
      </div>
    </>
  );
};

NotFoundPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default NotFoundPage;
