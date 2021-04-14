import { useCallback, useMemo } from 'react';
import { useLocation, navigate } from '@reach/router';

const useQueryParams = () => {
  const location = useLocation();

  const queryParams = useMemo(() => new URLSearchParams(location.search), [
    location.search,
  ]);

  const setQueryParam = useCallback(
    (key, value) => {
      queryParams.set(key, value);

      navigate(`?${queryParams}`);
    },
    [queryParams]
  );

  return { queryParams, setQueryParam };
};

export default useQueryParams;
