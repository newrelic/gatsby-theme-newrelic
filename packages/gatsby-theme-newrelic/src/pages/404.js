import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { navigate } from 'gatsby-link';

import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import Link from '../components/Link';
import SearchInput from '../components/SearchInput';
import search from '../utils/related-resources/search';
import getLocale from '../../gatsby/utils/getLocale';
import useThemeTranslation from '../hooks/useThemeTranslation';
import useTessen from '../hooks/useTessen';

const NotFoundPage = ({ location, pageContext: { themeOptions } }) => {
  const { t: translate } = useThemeTranslation();
  const [searchTerm, setSearchTerm] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const tessen = useTessen();

  const {
    relatedResources: {
      swiftype: { engineKey },
    },
  } = themeOptions;

  const pageLocale = getLocale({ location }, themeOptions);

  const searchTermFilter = (term) => {
    const termsToIgnore = ['docs', pageLocale];

    if (!term || termsToIgnore.includes(term)) {
      return false;
    }

    return true;
  };

  const localePostFix = () => {
    return pageLocale === 'en' ? '' : `-${pageLocale}`;
  };

  const getSearchResults = async () => {
    if (searchTerm !== null) {
      const results = await search(
        location.origin,
        {
          q: searchTerm,
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
        },
        {
          engineKey: engineKey,
          limit: 5,
          excludedUrls: [],
        }
      );

      const trimmedResults = results.map((r) => {
        return { url: r.url, title: r.title };
      });

      setSearchResult(trimmedResults);
    }
  };

  const displaySearchResults = () => {
    if (searchResult) {
      tessen.track('searchResultCount', '404Redirect', {
        resultCount: searchResult.length,
        searchTerm,
        searchResult,
      });
    }

    if (!searchResult || searchResult.length === 0) {
      return null;
    }

    return (
      <div id='search-results'>
        Or try one of the following links to find the information you're looking
        for:
        <ul
          css={css`
            list-style-type: none;
            margin: 0;
            padding: 0;
            line-height: 1.75rem;
            margin-top: 1rem;
          `}
        >
          {searchResult.map((result) => {
            return (
              <li>
                <Link
                  to={result.url}
                  css={css`
                    text-decoration: none;
                  `}
                  onClick={() =>
                    tessen.track('resultClick', '404Redirect', {
                      url: result.url,
                      title: result.title,
                      searchTerm,
                    })
                  }
                >
                  {result.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  useEffect(() => {
    setSearchTerm(
      location.pathname
        .split('/')
        .filter(searchTermFilter)
        .join(' ')
    );
  }, [location.pathname]);

  useEffect(() => {
    getSearchResults();
  }, [JSON.stringify(searchTerm)]);

  useEffect(() => {
    tessen.track('requestedUrl', `404Redirect`, {
      requestedUrl: location.href,
    });
  }, [location.pathname]);

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
              Error 404: Page not Found
            </h1>
            {translate('404.errorMessage')}
            <div
              id='search-section'
              css={css`
                margin-top: 2rem;
                margin-bottom: 2rem;
              `}
            >
              You may wish to try again by doing a search:
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
            {displaySearchResults()}
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
    origin: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    themeOptions: PropTypes.object.isRequired,
  }).isRequired,
};

export default NotFoundPage;
