const ENDPOINT =
  'https://search-api.swiftype.com/api/v1/public/engines/search.json';

const search = async ({ searchTerm, filters = {}, perPage = 10, page = 1 }) => {
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
      search_fields: {
        page: ['title', 'body'],
      },
      filters: {
        ...filters,
        page: {
          ...filters.page,
          document_type: ['!views_page_menu', '!views_page_content'],
        },
      },
    }),
  });

  return res.json();
};

export default search;
