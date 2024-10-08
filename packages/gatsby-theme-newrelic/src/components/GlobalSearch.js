import React, { useRef, useState } from 'react';
import { navigate, useLocation } from '@reach/router';
import { css } from '@emotion/react';

import useKeyPress from '../hooks/useKeyPress';
import useSearch from './SearchModal/useSearch';
import useThemeTranslation from '../hooks/useThemeTranslation';

import SearchInput from './SearchInput';
import SearchDropdown, { SAVED_SEARCH_KEY } from './SearchDropdown';

const GlobalSearch = ({}) => {
  const [query, setQuery] = useState('');
  const recentQueries = JSON.parse(
    localStorage.getItem(SAVED_SEARCH_KEY) ?? '[]'
  );
  const { fetchNextPage, results, status } = useSearch({
    searchTerm: query,
    filters: DEFAULT_FILTER_TYPES,
  });

  const [selected, setSelected] = useState(null);
  const moveUp = () =>
    setSelected((s) => {
      if (s == null) return results.length - 1;
      const next = s - 1;
      if (next < 0) {
        return results.length - 1;
      }
      return next;
    });
  const moveDown = () =>
    setSelected((s) => {
      console.log(s, results.length);
      if (s == null) return 0;
      const next = s + 1;
      if (next > results.length) {
        return 0;
      }
      return next;
    });
  const searchRef = useRef(null);
  const { t } = useThemeTranslation();

  useKeyPress('/', (e) => {
    // prevent quick search from opening in Firefox
    e.preventDefault();
    // rAF prevents `/` from being typed in input after focusing
    requestAnimationFrame(() => searchRef.current?.focus());
  });

  const showSearchDropdown =
    query.length > 1 && document.activeElement === searchRef.current;

  return (
    <>
      <SearchInput
        onFocus={() => {}}
        onMove={(direction) => {
          if (direction === 'prev') {
            moveUp();
          } else {
            moveDown();
          }
        }}
        onSubmit={(value) => {
          if (value.length < 2) return;
          saveSearch(value);
          navigate(`/search-results?query=value&page=1`);
        }}
        placeholder={t('searchInput.placeholder')}
        ref={searchRef}
        setValue={setQuery}
        size={SearchInput.SIZE.MEDIUM}
        value={query}
        css={css`
          --icon-size: 1.5rem;
          width: var(--search-width);

          svg {
            width: 1rem;
            height: 1rem;
          }

          input {
            border: none;
            height: 40px;
          }

          // TODO: use right bp here
          @media (max-width: 760px) {
            border: 0;
            border-radius: 0;
            position: absolute;
            left: 0;
            top: 0;
            width: 100vw;
            height: var(--global-header-height);
            z-index: 99;

            & input {
              border-radius: 0;
              height: var(--global-header-height);
            }
          }
        `}
      />
      {showSearchDropdown && (
        <SearchDropdown
          fetchNextPage={fetchNextPage}
          query={query}
          recentQueries={recentQueries}
          results={results}
          selected={selected}
          status={status}
        />
      )}
    </>
  );
};

const saveSearch = (value) => {
  const savedSearches = JSON.parse(
    localStorage.getItem(SAVED_SEARCH_KEY) ?? '[]'
  );
  savedSearches.push(value);
  // only save the four most recent searches
  const updated = savedSearches.slice(-4);
  localStorage.setItem(SAVED_SEARCH_KEY, JSON.stringify(updated));
};

const defaultFilters = [
  { name: 'docs', isSelected: false },
  { name: 'developer', isSelected: false },
  { name: 'opensource', isSelected: false },
  { name: 'quickstarts', isSelected: false },
];

const defaultSearchByFilters = [
  { name: 'title', isSelected: false },
  { name: 'body', isSelected: false },
];

const DEFAULT_FILTER_TYPES = [
  { type: 'source', defaultFilters: defaultFilters },
  { type: 'searchBy', defaultFilters: defaultSearchByFilters },
];

export default GlobalSearch;
