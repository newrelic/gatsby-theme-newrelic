import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { navigate } from 'gatsby-link';
import { graphql, useStaticQuery } from 'gatsby';

import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import Link from '../components/Link';
import SearchInput from '../components/SearchInput';
import Tag from '../components/Tag';
import CreateIssueButton from '../components/CreateIssueButton';
import Button from '../components/Button';
import getLocale from '../../gatsby/utils/getLocale';
import useThemeTranslation from '../hooks/useThemeTranslation';
import Trans from '../components/Trans';
import useNRBrowserAgent from '../hooks/useNRBrowserAgent';

const NotFoundPage = ({
  location,
  pageContext: { themeOptions, swiftypeEngineKey },
}) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);
  const { t: translate } = useThemeTranslation();
  const [searchTerm, setSearchTerm] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const nrBrowserAgent = useNRBrowserAgent();

  const pageLocale = getLocale({ location }, themeOptions);

  const hostname = new URL(siteUrl).hostname;
  const nrSubDomain = /.*\.newrelic\.com/.test(hostname)
    ? hostname.split('.')[0]
    : null;

  const searchTermFilter = useCallback(
    (term) => {
      const termsToIgnore = ['docs', pageLocale];

      return term && !termsToIgnore.includes(term);
    },
    [pageLocale]
  );

  const getSearchResults = useCallback(async () => {
    const localePostFix = () => {
      return pageLocale === 'en' ? '' : `-${pageLocale}`;
    };

    const search = async () => {
      const res = await fetch(
        'https://search-api.swiftype.com/api/v1/public/engines/search.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: searchTerm,
            engine_key: swiftypeEngineKey,
            per_page: 5,
            filters: {
              page: {
                type: [
                  `docs${localePostFix()}`,
                  `developers${localePostFix()}`,
                  `opensource${localePostFix()}`,
                  `quickstarts${localePostFix()}`,
                ],
                document_type: [
                  '!views_page_menu',
                  '!term_page_api_menu',
                  '!term_page_landing_page',
                ],
              },
            },
          }),
        }
      );

      const { records } = await res.json();

      return records.page;
    };

    if (searchTerm !== null) {
      const results = await search();
      const trimmedResults = results.map((r) => {
        return { url: r.url, title: r.title, type: r.type };
      });

      setSearchResult(trimmedResults);
    }
  }, [pageLocale, searchTerm, swiftypeEngineKey]);

  const displaySearchResults = (locale) => {
    if (!searchResult || searchResult.length === 0) {
      return null;
    }

    return (
      <div id="search-results">
        {translate('404.searchResultMessage')}
        <ul
          css={css`
            list-style-type: none;
            padding: 0;
            line-height: 1.75rem;
            margin: 1rem 0 0;
          `}
        >
          {searchResult.map((result, index) => {
            return (
              <li key={`result-${index}`}>
                <div>
                  <Link
                    to={result.url}
                    css={css`
                      text-decoration: none;
                    `}
                    instrumentation={{
                      component: '404SuggestedLink',
                      href: result.url,
                      searchTerm,
                    }}
                    displayExternalIcon
                  >
                    {result.title}
                  </Link>
                </div>
                <Tag
                  css={css`
                    font-size: 0.625rem;
                    margin-right: 0.5em;
                  `}
                  uppercase
                >
                  {result.type?.replace(`-${locale}`, '').replace('_', ' ')}
                </Tag>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  useEffect(() => {
    setSearchTerm(
      location.pathname.split('/').filter(searchTermFilter).join(' ')
    );
  }, [searchTermFilter, location.pathname]);

  useEffect(() => {
    getSearchResults();
  }, [getSearchResults, searchTerm]);

  useEffect(() => {
    if (searchResult) {
      nrBrowserAgent.addPageAction({
        eventName: 'error404',
        category: 'ErrorPage',
        path: location.pathname,
        resultCount: searchResult.length,
        searchTerm,
      });
    }
  }, [location.pathname, searchResult, searchTerm, tessen]);

  return (
    <>
      <GlobalHeader />
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: auto;
          grid-template-areas:
            '. . . .'
            '. content content .'
            'footer footer footer footer';
          min-height: calc(100vh - var(--global-header-height));
          max-height: calc(100vh - var(--global-header-height));
        `}
      >
        <div
          css={css`
            display: flex;
            grid-area: content;
            justify-self: start;
          `}
        >
          <div
            css={css`
              font-size: 0.85rem;
              padding: 8rem 0;
            `}
          >
            <h1
              css={css`
                font-weight: normal;
                line-height: 1;
              `}
            >
              {translate('404.headingText')}
            </h1>

            <div
              id="search-section"
              css={css`
                margin-top: 2rem;
                margin-bottom: 2rem;
              `}
            >
              {translate('404.searchInputLabel')}
              <SearchInput
                placeholder={searchTerm}
                onFocus={() =>
                  navigate(`?q=${searchTerm.replaceAll(' ', '+')}`)
                }
                css={css`
                  min-width: 200px;
                  max-width: 2000px;
                  margin-top: 0.5rem;
                  margin-bottom: 0.5rem;
                `}
              />
            </div>
            {displaySearchResults(pageLocale)}

            <div
              css={css`
                > * {
                  margin: 3em 0;
                }
              `}
            >
              {/* <p>
                {translate('404.docsHomeMessage')}{' '}
                <Link to="/">{{nrSubDomain}} home</Link>.
              </p> */}
              <Trans i18nKey="404.docsHomeMessage" parent="p">
                Go back to <Link to="/">{{ nrSubDomain }} home</Link>.
              </Trans>
              <p>
                {translate('404.fileIssueMessage')}{' '}
                <CreateIssueButton
                  pageTitle="404"
                  variant={Button.VARIANT.OUTLINE}
                  size={Button.SIZE.SMALL}
                  labels={['bug', '404']}
                  instrumentation={{ component: '404Page' }}
                  css={css`
                    margin-left: 1em;
                  `}
                />
              </p>
            </div>
          </div>
        </div>
        <GlobalFooter
          css={css`
            grid-area: footer;
            align-self: end;
          `}
        />
      </div>
    </>
  );
};

NotFoundPage.propTypes = {
  location: PropTypes.shape({
    href: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    themeOptions: PropTypes.object.isRequired,
    swiftypeEngineKey: PropTypes.string.isRequired,
  }).isRequired,
};

export default NotFoundPage;
