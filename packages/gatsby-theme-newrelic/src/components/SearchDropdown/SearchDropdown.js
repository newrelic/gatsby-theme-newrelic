import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import cx from 'classnames';

import KeyboardLegend from './KeyboardLegend';
import Results, { ResultType } from './Results';
import Skeleton from './Skeleton';

const SearchDropdown = ({
  fetchNextPage,
  onRecentClick,
  onResultClick,
  query,
  recentQueries,
  results,
  selected,
  status,
  ...rest
}) => {
  const loading = status === 'loading';
  const error = status === 'error';
  return (
    <>
      <Container {...rest}>
        <SectionHeading>Recent search terms</SectionHeading>
        {recentQueries.length > 0 && (
          <RecentQueries>
            {recentQueries.map((query, i) => (
              <li
                className={cx({ selected: selected === i })}
                onClick={() => onRecentClick(query, i)}
              >
                <a href={`/search-results?query=${query}&page=1`}>{query}</a>
              </li>
            ))}
          </RecentQueries>
        )}

        <SectionHeading>All searches</SectionHeading>
        {error && <Error />}
        {loading && !error && <Skeleton />}
        {!loading && !error && (
          <Results
            selected={selected - recentQueries.length}
            results={results}
            onResultClick={onResultClick}
            onViewMore={fetchNextPage}
          />
        )}
        <KeyboardLegend />
      </Container>
      <Overlay />
    </>
  );
};

SearchDropdown.propTypes = {
  fetchNextPage: PropTypes.func.isRequired,
  onRecentClick: PropTypes.func.isRequired,
  onResultClick: PropTypes.func.isRequired,
  query: PropTypes.string,
  recentQueries: PropTypes.arrayOf(PropTypes.string).isRequired,
  results: PropTypes.arrayOf(ResultType),
  selected: PropTypes.number,
  status: PropTypes.oneOf(['idle', 'loading', 'error']).isRequired,
};

const Error = () => (
  <div
    css={css`
      line-height: 1.1;
      margin-bottom: 1rem;
    `}
  >
    unable to load search results
  </div>
);

const Container = styled.div`
  --outer-padding: 16px;

  background: var(--search-dropdown-background);
  border: 1px solid var(--search-dropdown-border);
  border-radius: 4px;
  left: 0;
  padding: var(--outer-padding);
  position: absolute;
  top: 48px;
  width: var(--search-dropdown-width);
  z-index: 1;

  @media (max-width: 760px) {
    top: var(--global-header-height);
    width: 100vw;
  }
`;

const SectionHeading = styled.p`
  font-weight: 500;
  line-height: 1.125;
  margin-bottom: 0.5rem;
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.2);
  height: calc(100vh - var(--global-header-height));
  left: 0;
  position: fixed;
  top: var(--global-header-height);
  width: 100vw;
`;

const RecentQueries = styled.ul`
  display: flex;
  gap: 0.5rem;
  list-style: none;
  margin: 0 0 1rem;
  padding: 0;

  & li {
    line-height: 1.125;
  }
  & li:hover,
  & li.selected {
    text-decoration: underline;
  }

  & a {
    color: currentColor;
    text-decoration: none;
  }
`;

export default SearchDropdown;
