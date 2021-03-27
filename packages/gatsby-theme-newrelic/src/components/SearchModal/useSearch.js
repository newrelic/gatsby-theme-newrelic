import { useCallback, useEffect, useReducer, useMemo } from 'react';
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
  pageData: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    case ACTIONS.RECEIVE_PAGE_DATA:
      return {
        ...state,
        pageData: {
          ...state.pageData,
          [action.payload.page]: action.payload.data,
        },
      };
    case ACTIONS.RESET:
      return { ...initialState, previousData: state.pageData };
    default:
      return state;
  }
};

const useSearch = ({ searchTerm, filters }) => {
  const [{ page, pageData }, dispatch] = useReducer(reducer, initialState);

  const { status, refetch } = useQuery(
    ['searchResults', searchTerm, page, filters],
    async ({ queryKey: [, searchTerm, page, filters] }) => {
      const { records } = await search({ searchTerm, filters, page });

      return records.page;
    },
    {
      enabled: false,
      keepPreviousData: true,
      onSuccess: (data) =>
        dispatch({ type: ACTIONS.RECEIVE_PAGE_DATA, payload: { page, data } }),
    }
  );

  const results = useMemo(() => Object.values(pageData).flat(), [pageData]);

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
