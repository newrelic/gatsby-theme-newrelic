const ENDPOINT =
  'https://search-api.swiftype.com/api/v1/public/engines/search.json';

const search = async ({
  searchTerm,
  filters = [],
  defaultSources,
  perPage = 10,
  page = 1,
}) => {
  const { searchBy, source } = filters.reduce(
    (acc, { type, defaultFilters }) => ({
      ...acc,
      [type]: defaultFilters,
    }),
    {}
  );

  const searchByFilters = searchBy?.map((filter) =>
    filter.isSelected ? `${filter.name}^10` : `${filter.name}^0`
  );

  const sourceFilters = { type: source.length > 0 ? source : defaultSources };
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      q: searchTerm,
      engine_key: 'Ad9HfGjDw4GRkcmJjUut',
      page,
      per_page: perPage,
      search_fields: {
        page: searchByFilters,
      },
      highlight_fields: {
        page: {
          title: {
            size: 100,
            fallback: true,
          },
          body: {
            size: 400,
            fallback: true,
          },
        },
      },
      filters: {
        page: {
          ...sourceFilters,
          document_type: ['!views_page_menu', '!views_page_content'],
        },
      },
    }),
  });

  return res.json();
};

export default search;
