import { useCallback, useState, useEffect, useReducer, useMemo } from 'react';
import { useDebounce } from 'react-use';
import search from './search';
import { useQuery } from 'react-query';
import useLocale from '../../hooks/useLocale';

const ACTIONS = {
  NEXT_PAGE: 'nextPage',
  RECEIVE_PAGE_DATA: 'receivePageData',
  RESET: 'reset',
};

const initialState = {
  page: 1,
  results: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    case ACTIONS.RECEIVE_PAGE_DATA: {
      const { page, data } = action.payload;

      return {
        ...state,
        results: page === 1 ? data : state.results.concat(data),
      };
    }
    case ACTIONS.RESET:
      return { ...state, page: 1 };
    default:
      return state;
  }
};

const useSearch = ({ searchTerm, filters }) => {
  const locale = useLocale();
  const [{ page, results }, dispatch] = useReducer(reducer, initialState);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const defaultSources = locale.isDefault
    ? ['developer', 'docs', 'opensource', 'quickstarts']
    : [
        `developer-${locale.locale}`,
        `docs-${locale.locale}`,
        `opensource-${locale.locale}`,
        `quickstarts`,
      ];

  const swiftypeFilters = useMemo(() => {
    const selectedFilters = filters.map(({ defaultFilters, type }) => {
      const updatedDefaultFilters = defaultFilters?.filter(
        (filter) => filter.isSelected
      );
      return { defaultFilters: updatedDefaultFilters, type };
    });
    const allFilters = selectedFilters.length === 0 ? filters : selectedFilters;

    return allFilters.map(({ defaultFilters, type }) => {
      if (type === 'source') {
        const filters = defaultFilters.map((filter) =>
          locale.isDefault ? filter.name : `${filter.name}-${locale.locale}`
        );
        return { defaultFilters: filters, type };
      }
      return { defaultFilters, type };
    });
  }, [filters, locale]);

  const queryKey = useMemo(
    () => ['searchResults', debouncedSearchTerm, page, swiftypeFilters],
    [debouncedSearchTerm, page, swiftypeFilters]
  );

  const { status } = useQuery(
    queryKey,
    ({ queryKey: [, searchTerm, page, filters] }) =>
      search({
        searchTerm,
        defaultSources,
        filters,
        page,
        perPage: 5,
      }),
    {
      enabled: Boolean(debouncedSearchTerm),
      onSuccess: (data) =>
        dispatch({ type: ACTIONS.RECEIVE_PAGE_DATA, payload: { page, data } }),
      select: ({ records }) => records.page,
    }
  );

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 200, [searchTerm]);

  useEffect(() => {
    dispatch({ type: ACTIONS.RESET });
  }, [searchTerm, filters]);

  return {
    status,
    results,
    fetchNextPage: useCallback(() => dispatch({ type: ACTIONS.NEXT_PAGE }), []),
  };
};

export default useSearch;
