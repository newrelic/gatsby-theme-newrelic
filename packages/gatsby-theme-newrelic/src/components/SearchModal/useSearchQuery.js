import { useState, useEffect } from 'react';
import { useDebounce } from 'react-use';
import useQueryParams from '../../hooks/useQueryParams';
import useTessen from '../../hooks/useTessen';

const useSearchQuery = (filters) => {
  const { queryParams, setQueryParam } = useQueryParams();
  const searchQueryParam = queryParams.get('q');
  const [searchTerm, setSearchTerm] = useState(searchQueryParam);
  const hasQParam = queryParams.has('q');
  const tessen = useTessen();

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
          tessen.track({
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
    setSearchTerm(searchQueryParam);
  }, [searchQueryParam]);

  return [searchTerm, setSearchTerm];
};

export default useSearchQuery;
