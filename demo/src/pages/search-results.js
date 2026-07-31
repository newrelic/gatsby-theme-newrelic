// TEMPORARY replica of the docs-website /search-results page, adapted to the
// SearchGPT search() contract so we can test the "press Enter" full-search
// experience locally (the header dropdown's submit navigates here).
//
// This mirrors docs-website/src/pages/search-results.js in look, with the
// migration-driven changes the real page also needs (Task #10):
//   1. New result shape: result.title (plain) + result.summary (highlighted
//      with <span class='highlight'>), instead of result.highlight.title/body.
//   2. Numbered pagination via the v2 `page` param (1-indexed random access),
//      replacing Swiftype's page model — no cursor walk needed. Page count is
//      clamped to the API's per-source cap (100 results => 20 pages at 5/page).
//   3. Results scoped to the site language (jp→ja, kr→ko, pt→pt-br) via the
//      new `language` param.
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  Icon,
  Button,
  Link,
  search,
  Spinner,
  Surface,
  highlightText,
  useLocale,
  localeToSearchLanguage,
} from '@newrelic/gatsby-theme-newrelic';
import { useLocation, navigate } from '@reach/router';

const LIMIT = 5;
// The API caps a single source at 100 fetched results, so pages past 100/LIMIT
// come back empty. Clamp the numbered controls to that ceiling.
const MAX_RESULTS_PER_SOURCE = 100;
const MAX_PAGES = MAX_RESULTS_PER_SOURCE / LIMIT;
const DOTS = '…';

// Compact pagination range with a sibling window and leading/trailing dots.
const paginationRange = (currentPage, totalPages, siblingCount = 1) => {
  const totalNumbers = siblingCount * 2 + 5; // first,last,current,2 dots
  if (totalPages <= totalNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const left = Math.max(currentPage - siblingCount, 1);
  const right = Math.min(currentPage + siblingCount, totalPages);
  const showLeftDots = left > 2;
  const showRightDots = right < totalPages - 1;

  const range = [];
  range.push(1);
  if (showLeftDots) range.push(DOTS);
  for (
    let p = showLeftDots ? left : 2;
    p <= (showRightDots ? right : totalPages - 1);
    p++
  ) {
    range.push(p);
  }
  if (showRightDots) range.push(DOTS);
  range.push(totalPages);
  return range;
};

const SearchResultPageView = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('query');
  const page = Math.max(Number(params.get('page') ?? 1), 1);

  const locale = useLocale() || {};
  const language = localeToSearchLanguage(locale.locale);

  const [state, setState] = useState({ loading: true });
  const { results, totalCount, loading, error } = state;

  useEffect(() => {
    if (!query) {
      navigate('/');
      return;
    }

    let cancelled = false;
    setState((s) => ({ ...s, loading: true }));

    (async () => {
      try {
        const res = await search({
          searchTerm: query,
          page,
          limit: LIMIT,
          language,
        });
        if (cancelled) return;
        setState({
          results: res.results,
          totalCount: res.totalCount,
          loading: false,
        });
      } catch (err) {
        if (cancelled) return;
        setState({
          error:
            err.name === 'RateLimitError'
              ? `Rate limited. Try again in ${err.rateLimit?.resetInSeconds}s.`
              : 'Unable to get search results, an error has occurred',
          loading: false,
        });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [query, page, language]);

  const totalPages =
    totalCount != null ? Math.min(Math.ceil(totalCount / LIMIT), MAX_PAGES) : 0;
  const hasPrevPage = page > 1;
  const hasNextPage = page < totalPages;
  const range = paginationRange(page, totalPages);

  const pageHref = (n) => `${location.pathname}?query=${query}&page=${n}`;

  return (
    <PageContainer>
      {loading && (
        <LoadingContainer>
          <h2>Loading results</h2>
          <Spinner
            size="2rem"
            css={css`
              margin-top: 1rem;
              height: 50px;
            `}
          />
        </LoadingContainer>
      )}
      {results && !loading && (
        <>
          <h2>
            {totalCount} results for "{query}"
          </h2>
          {results.map((result, i) => (
            <Result
              key={`${i}-${result.title}`}
              result={result}
              query={query}
            />
          ))}
          {totalPages > 1 && (
            <PaginationContainer>
              <Link disabled={!hasPrevPage} to={pageHref(page - 1)}>
                <PaginationButton
                  disabled={!hasPrevPage}
                  css={css`
                    padding: 0.25rem 0.35rem;
                    margin-right: 0.5rem;
                  `}
                >
                  <Icon
                    name="fe-arrow-left"
                    css={css`
                      margin-right: 0.25rem;
                    `}
                  />
                  Previous
                </PaginationButton>
              </Link>
              {range.map((pageNumber, i) =>
                pageNumber === DOTS ? (
                  <span key={`dots-${i}`}>{DOTS}</span>
                ) : (
                  <Link
                    key={`searchpage-${pageNumber}`}
                    disabled={pageNumber === page}
                    to={pageHref(pageNumber)}
                  >
                    <PaginationButton
                      disabled={pageNumber === page}
                      css={css`
                        padding: 0.25rem 0.35rem;
                        ${pageNumber === page &&
                        css`
                          background: var(--primary-text-color);
                          color: var(--primary-background-color);
                          opacity: 1;
                        `}
                      `}
                    >
                      {pageNumber}
                    </PaginationButton>
                  </Link>
                )
              )}
              <Link disabled={!hasNextPage} to={pageHref(page + 1)}>
                <PaginationButton
                  disabled={!hasNextPage}
                  css={css`
                    padding: 0.25rem 0.35rem;
                    margin-left: 0.5rem;
                  `}
                >
                  Next
                  <Icon
                    name="fe-arrow-right"
                    css={css`
                      margin-left: 0.25rem;
                    `}
                  />
                </PaginationButton>
              </Link>
            </PaginationContainer>
          )}
        </>
      )}
      {error && !loading && <LoadingContainer>{error}</LoadingContainer>}
    </PageContainer>
  );
};

const PageContainer = styled.div`
  font-size: 1.125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 760px;
  margin: 2rem auto;
  padding: 0 1rem;
  h2 {
    font-weight: normal;
    margin-bottom: 1rem;
  }
`;

const LoadingContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 3rem auto 0;
  a {
    margin: 0 0.25rem 0;
    display: flex;
    text-decoration: none;
    &[disabled] {
      pointer-events: none;
    }
  }
`;

const PaginationButton = ({ children, ...props }) => (
  <Button {...props} variant={Button.VARIANT.OUTLINE} size={Button.SIZE.SMALL}>
    {children}
  </Button>
);

PaginationButton.propTypes = {
  children: PropTypes.node,
};

const Result = ({ result, query }) => {
  return (
    <Surface
      as={Link}
      to={result.url}
      css={css`
        .highlight {
          color: #00ac69;
          font-style: normal;
        }
        margin-bottom: 2rem;
        box-shadow: none;
        color: var(--primary-font-color);
        &:hover {
          color: var(--primary-font-color);
          h3 {
            text-decoration: underline;
          }
        }
      `}
    >
      <p
        css={css`
          margin-bottom: 0;
          color: var(--secondary-text-color);
          font-size: 0.875rem;
        `}
      >
        {result.url.replace('https://docs.newrelic.com/docs/', '')}
      </p>
      <h3
        css={css`
          margin-bottom: 0;
          font-weight: 500;
        `}
        dangerouslySetInnerHTML={{
          __html: highlightText(result.title, query),
        }}
      />
      <p dangerouslySetInnerHTML={{ __html: result.summary }} />
    </Surface>
  );
};

Result.propTypes = {
  query: PropTypes.string,
  result: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    summary: PropTypes.string,
  }).isRequired,
};

export default SearchResultPageView;
