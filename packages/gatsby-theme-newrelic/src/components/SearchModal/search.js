const ENDPOINT =
  'https://search-api.swiftype.com/api/v1/public/engines/search.json';

const search = async ({ searchTerm, filters, perPage = 10, page = 1 }) => {
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
          type: getFilters(filters).map((filter) => filter.name),
          document_type: ['!views_page_menu'],
        },
      },
    }),
  });

  return res.json();
};

const getFilters = (filters) => {
  const filteredTypes = filters.filter((filter) => filter.isSelected === true);

  return filteredTypes.length !== 0 ? filteredTypes : filters;
};

export default search;
