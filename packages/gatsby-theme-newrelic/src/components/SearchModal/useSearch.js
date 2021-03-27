import { useCallback, useState, useEffect, useReducer, useMemo } from 'react';
import { useDebounce } from 'react-use';
import search from './search';
import { useQuery } from 'react-query';

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
  const [{ page, results }, dispatch] = useReducer(reducer, initialState);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  const queryKey = useMemo(
    () => ['searchResults', debouncedSearchTerm, page, filters],
    [debouncedSearchTerm, page, filters]
  );

  const { status } = useQuery(
    queryKey,
    async ({ queryKey: [, searchTerm, page, filters] }) => {
      const { records } = await search({
        searchTerm,
        filters,
        page,
        perPage: 20,
      });

      return records.page;
    },
    {
      enabled: Boolean(debouncedSearchTerm),
      onSuccess: (data) =>
        dispatch({ type: ACTIONS.RECEIVE_PAGE_DATA, payload: { page, data } }),
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
