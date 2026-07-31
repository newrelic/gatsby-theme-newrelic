// Public package export (see index.js). Thin wrapper over the SearchGPT REST
// client so the existing `search` import path keeps working for consumers
// (e.g. the docs-website /search-results page).
//
// Returns the normalized hybrid-search shape:
//   { results, nextCursor, prevCursor, totalCount }
// Each result: { id, url, title, summary, bodyHighlights, sourceLabel, score,
//                tags, createdDate, lastModifiedDate }.
//
// NOTE: this is a breaking change from the Swiftype shape ({ records: { page }}
// with result.highlight.title/body). Consumers must update accordingly.
import { search as searchGPT } from '../../utils/searchGPT';

const search = ({
  searchTerm,
  sources,
  cursor,
  limit,
  page,
  sort,
  since,
  until,
  tags,
  language,
}) =>
  searchGPT({
    searchTerm,
    sources,
    cursor,
    limit,
    page,
    sort,
    since,
    until,
    tags,
    language,
  });

export default search;
