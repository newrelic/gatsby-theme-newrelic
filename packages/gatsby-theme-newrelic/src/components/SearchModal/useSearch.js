import { useCallback, useEffect } from 'react';
import { useDebounce } from 'react-use';
import search from './search';
import { useInfiniteQuery, useQueryClient } from 'react-query';

const useSearch = ({ searchTerm, filters }) => {
  const queryClient = useQueryClient();

  // prevents fetching unless there is a search term
  if (searchTerm === '') {
    queryClient.clear();
  }

  const { isLoading, data = {}, isSuccess, fetchNextPage } = useInfiniteQuery(
    'swiftype',
    ({ pageParam = 1 }) => search({ searchTerm, filters, page: pageParam }),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage) {
          return;
        }

        const { page } = lastPage.info;
        const nextPage = page.current_page + 1;

        return nextPage < page.num_pages ? nextPage : undefined;
      },
    }
  );

  const refetch = useCallback(() => {
    queryClient.setQueryData('swiftype', () => ({
      pages: [],
      pageParam: 1,
    }));

    fetchNextPage({ pageParam: 1 });
  }, [queryClient, fetchNextPage]);

  useDebounce(
    () => {
      if (searchTerm) {
        refetch();
      }
    },
    200,
    [searchTerm, refetch]
  );

  useEffect(() => refetch(), [refetch]);

  const { pages } = data;
  const results = pages?.flatMap((page) => page.records.page) ?? [];

  return { isLoading, isSuccess, results, fetchNextPage };
};

export default useSearch;
