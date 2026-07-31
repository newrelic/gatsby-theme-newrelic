import { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import {
  suggest,
  DEFAULT_SOURCES,
  localeToSearchLanguage,
} from '../../utils/searchGPT';
import useLocale from '../../hooks/useLocale';

// The header dropdown is an as-you-type surface, so it uses the lexical
// /v2/search/suggest endpoint: not rate limited and safe on every keystroke.
// suggest() has no cursor, but it honors `limit`, so "View more" grows the
// limit and re-queries — appending the next page of results inline. Because
// suggest isn't rate limited, re-fetching a slightly larger list is cheap.
const PAGE_SIZE = 5;

const useSearch = ({ searchTerm, filters }) => {
  // `filters` is retained for API compatibility. SearchGPT queries a single
  // source (developer/opensource/quickstarts were deprecated and redirect to
  // docs) and does not support field boosting (title/body), so those legacy
  // filters no longer alter the query. Tag filtering can be layered on later.
  const tags = useMemo(() => {
    const tagFilter = filters?.find(({ type }) => type === 'tags');
    const selected = tagFilter?.defaultFilters
      ?.filter((filter) => filter.isSelected)
      .map((filter) => filter.name);

    return selected?.length ? selected : undefined;
  }, [filters]);

  const [limit, setLimit] = useState(PAGE_SIZE);

  // Scope suggestions to the site's language (jp→ja, kr→ko, pt→pt-br); on the
  // default English site this is `en`. undefined for an unmapped locale, which
  // omits the param and searches across all languages.
  const { locale } = useLocale() || {};
  const language = localeToSearchLanguage(locale);

  // reset back to the first page whenever the query or filters change
  useEffect(() => {
    setLimit(PAGE_SIZE);
  }, [searchTerm, tags]);

  const { status, data } = useQuery(
    ['searchSuggest', searchTerm, tags, limit, language],
    () =>
      suggest({ searchTerm, sources: DEFAULT_SOURCES, tags, limit, language }),
    {
      enabled: Boolean(searchTerm),
      select: ({ results }) => results,
      // keep the current results visible while the larger page loads, so
      // growing the limit reads as an append rather than a reload
      keepPreviousData: true,
    }
  );

  const results = data || [];

  return {
    status,
    results,
    // if we asked for `limit` and got fewer back, there are no more results
    hasMore: results.length >= limit,
    fetchNextPage: useCallback(() => setLimit((l) => l + PAGE_SIZE), []),
  };
};

export default useSearch;
