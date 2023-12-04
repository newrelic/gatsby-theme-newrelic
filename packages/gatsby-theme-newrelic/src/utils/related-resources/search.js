const fetch = require('node-fetch');
const { appendTrailingSlash, stripTrailingSlash } = require('./url');

const normalizeUrl = (url) => {
  const prefix = url.startsWith('!') ? '!' : '';
  const plainUrl = url.replace(/^!/, '');

  return [
    prefix + appendTrailingSlash(plainUrl),
    prefix + stripTrailingSlash(plainUrl),
  ];
};

const uniq = (arr) => [...new Set(arr)];

module.exports = async (
  url,
  params = {},
  { engineKey, limit, excludedUrls }
) => {
  const { page: pageFilters = {} } = params.filters || {};

  const res = await fetch(
    'https://search-api.swiftype.com/api/v1/public/engines/search.json',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...params,
        engine_key: engineKey,
        per_page: limit,
        filters: {
          ...params.filters,
          page: {
            ...pageFilters,
            url: uniq([
              ...excludedUrls.flatMap((url) => normalizeUrl(`!${url}`)),
              ...normalizeUrl(`!${url}`),
              ...(pageFilters.url || []).flatMap(normalizeUrl),
            ]),
          },
        },
      }),
    }
  );

  const { records } = await res.json();

  return records.page;
};
