import { useState, useEffect } from 'react';
import { useDebounce } from 'react-use';
import useQueryParams from '../../hooks/useQueryParams';
import { addPageAction } from '../../utils/nrBrowserAgent.js';

const useSearchQuery = (filters) => {
  const { queryParams, setQueryParam } = useQueryParams();
  const searchQueryParam = queryParams.get('q');
  const [searchTerm, setSearchTerm] = useState(searchQueryParam);
  const hasQParam = queryParams.has('q');

  // when 'trailingSlash = "always"' is set in the gatsby-config
  // it adds a slash to query params on the 404 page, this
  // ensures no slash is set at the end of the search term
  const handleSearchTerm = (term) => {
    if (term && term.substr(-1) === '/') {
      setSearchTerm(term.substr(0, term.length - 1));
      return;
    }
    setSearchTerm(term);
  };

  const filtersUsedForSearch = filters.flatMap((filter) => {
    const selectedFilterObjects = filter.defaultFilters.filter(
      (f) => f.isSelected === true
    );

    return selectedFilterObjects.map((filterObject) => filterObject.name);
  });

  useDebounce(
    () => {
      if (hasQParam) {
        setQueryParam('q', searchTerm);
        if (searchTerm && searchTerm.length > 2) {
          addPageAction({
            eventName: 'swiftypeSearchInput',
            category: 'GlobalSearch',
            name: 'searchInput',
            layoutElement: 'globalHeader',
            searchTerm,
            filtersUsedForSearch,
          });
        }
      }
    },
    400,
    [searchTerm, setQueryParam, hasQParam, filters]
  );

  useEffect(() => {
    handleSearchTerm(searchQueryParam);
  }, [searchQueryParam]);

  return [searchTerm, setSearchTerm];
};

export default useSearchQuery;
