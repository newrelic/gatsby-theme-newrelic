// Client for the SearchGPT REST API (v2), which replaces Swiftype.
//
// Two endpoints back two different UI surfaces:
//   - suggest(): GET /v2/search/suggest — lexical typeahead. NOT rate limited,
//     safe to call on every keystroke, returns no body.
//   - search():  GET /v2/search — hybrid semantic search with cursor pagination
//     and full bodies. Rate limited per principal, but cached/identical queries
//     and pagination requests do not count against the limit.
//
// The base URL is env-driven so we can move from direct-browser calls to a
// backend proxy later without touching any callers — only the env var changes.

const DEFAULT_BASE_URL = 'https://support-search.service.newrelic.com';

// developer/opensource/quickstarts were deprecated and redirect to docs, so a
// single source covers everything we previously queried in Swiftype.
const DEFAULT_SOURCES = ['nr-docs'];

const getBaseUrl = () =>
  process.env.GATSBY_SEARCHGPT_BASE_URL || DEFAULT_BASE_URL;

const getApiKey = () => process.env.GATSBY_SEARCHGPT_API_KEY;

// Thrown on HTTP 429 so callers can surface a "try again" state and read the
// reset window. rateLimit shape: { limit, remaining, resetInSeconds }.
export class RateLimitError extends Error {
  constructor(rateLimit) {
    super('SearchGPT rate limit exceeded');
    this.name = 'RateLimitError';
    this.rateLimit = rateLimit;
  }
}

const buildUrl = (path, params) => {
  const url = new URL(path, getBaseUrl());

  Object.entries(params).forEach(([key, value]) => {
    if (value == null || value === '') return;
    // array params (sources, tags) are passed as a JSON-encoded string
    url.searchParams.set(
      key,
      Array.isArray(value) ? JSON.stringify(value) : value
    );
  });

  return url.toString();
};

const request = async (path, params) => {
  const res = await fetch(buildUrl(path, params), {
    headers: { 'api-key': getApiKey() },
  });

  const body = await res.json();

  if (res.status === 429) {
    throw new RateLimitError(body?.error?.rateLimit);
  }

  if (!res.ok || body.success === false) {
    throw new Error(
      body?.error?.message || `Search request failed (${res.status})`
    );
  }

  return body;
};

// href/url and sourceName/sourceLabel are duplicate fields kept for historical
// client shapes; we normalize to a single canonical key for each.
const normalizeResult = (result) => ({
  id: result.id,
  url: result.url || result.href,
  title: result.title,
  // highlighted (contains <span class='highlight'>…</span>)
  summary: result.summary,
  // longer highlighted body — only present on /v2/search, not suggest
  bodyHighlights: result.bodyHighlights,
  sourceLabel: result.sourceLabel || result.sourceName,
  score: result.score,
  tags: result.tags || [],
  createdDate: result.createdDate,
  lastModifiedDate: result.lastModifiedDate,
});

/**
 * Hybrid search with full bodies and cursor pagination. Rate limited.
 * Use on submit / results page, not on keystroke.
 */
export const search = async ({
  searchTerm,
  sources = DEFAULT_SOURCES,
  cursor,
  sort,
  since,
  until,
  tags,
}) => {
  const body = await request('/v2/search', {
    q: searchTerm,
    sources,
    cursor,
    sort,
    since,
    until,
    tags,
  });

  const results = (body.results || []).map(normalizeResult);

  return {
    results,
    nextCursor: body.nextCursor || null,
    prevCursor: body.prevCursor || null,
    // top-level totalCount isn't present in every response shape; each result
    // also carries resultsTotal, so fall back to that.
    totalCount: body.totalCount ?? body.results?.[0]?.resultsTotal ?? null,
  };
};

/**
 * Lexical (FTS) typeahead. NOT rate limited and returns no body, so it is safe
 * to call on every keystroke. Results differ from search() because suggest is
 * lexical-only while search is hybrid/semantic.
 */
export const suggest = async ({
  searchTerm,
  sources = DEFAULT_SOURCES,
  tags,
  limit,
}) => {
  const body = await request('/v2/search/suggest', {
    q: searchTerm,
    sources,
    tags,
    limit,
  });

  return {
    results: (body.results || []).map(normalizeResult),
  };
};

/** Available tag values for the given sources, for building filter UI. */
export const fetchTags = async ({ sources = DEFAULT_SOURCES } = {}) => {
  const body = await request('/v2/search/tags', { sources });

  return body.tags || [];
};

export { DEFAULT_SOURCES, DEFAULT_BASE_URL };
