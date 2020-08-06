import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from '@reach/router';

const useQueryParams = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = useMemo(() => new URLSearchParams(location.search), [
    location.search,
  ]);

  const setQueryParam = useCallback(
    (key, value) => {
      queryParams.set(key, value);

      navigate(`?${queryParams}`);
    },
    [queryParams, navigate]
  );

  return { queryParams, setQueryParam };
};

export default useQueryParams;
