import { useCallback, useEffect, useReducer } from 'react';
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

  const { status, refetch } = useQuery(
    ['searchResults', searchTerm, page, filters],
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
      enabled: false,
      keepPreviousData: true,
      onSuccess: (data) =>
        dispatch({ type: ACTIONS.RECEIVE_PAGE_DATA, payload: { page, data } }),
    }
  );

  useDebounce(
    () => {
      if (searchTerm) {
        refetch();
      }
    },
    200,
    [searchTerm, refetch]
  );

  useEffect(() => {
    if (page > 1) {
      refetch();
    }
  }, [page, refetch]);

  useEffect(() => {
    if (searchTerm) {
      refetch();
    }
  }, [filters, searchTerm, refetch]);

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
