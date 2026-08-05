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

// Maps a New Relic docs locale (en, jp, kr, es, pt, fr — see config/i18n.js) to
// the ISO language code the search API accepts (en, de, es, fr, ja, ko, pt-br).
// Most match directly; jp→ja, kr→ko, and pt→pt-br are the exceptions. Returns
// undefined for an unknown locale so callers can omit `language` (searching
// across all languages) rather than send a code the API would reject with 400.
const LOCALE_TO_SEARCH_LANGUAGE = {
  en: 'en',
  jp: 'ja',
  kr: 'ko',
  es: 'es',
  pt: 'pt-br',
  fr: 'fr',
  de: 'de',
};

export const localeToSearchLanguage = (locale) =>
  LOCALE_TO_SEARCH_LANGUAGE[locale] || undefined;

// When GATSBY_SEARCHGPT_BASE_URL is a relative path (e.g. "/"), search runs
// through a same-origin backend proxy: it is resolved against the current origin
// so the browser calls <origin>/v2/* — and deploy previews hit their own proxy
// rather than production. The proxy injects the api-key server-side, so no key
// ships to the client. An absolute URL is used verbatim; when unset we call the
// service directly. There is no `window` during SSR/build, so fall back to the
// default there (the build-time related-resources path has its own server-side
// key and does not go through this).
const getBaseUrl = () => {
  const configured = process.env.GATSBY_SEARCHGPT_BASE_URL;
  if (!configured) return DEFAULT_BASE_URL;
  if (configured.startsWith('/')) {
    return typeof window !== 'undefined'
      ? window.location.origin
      : DEFAULT_BASE_URL;
  }
  return configured;
};

// Undefined when proxying: the key lives only in the proxy's server env, never
// in the client bundle. request() then omits the api-key header and the proxy
// adds it.
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
    // `language` is a comma-delimited string (e.g. "en,ja"); every other array
    // param (sources, tags) is passed as a JSON-encoded string.
    if (key === 'language') {
      url.searchParams.set(key, Array.isArray(value) ? value.join(',') : value);
    } else {
      url.searchParams.set(
        key,
        Array.isArray(value) ? JSON.stringify(value) : value
      );
    }
  });

  return url.toString();
};

const request = async (path, params) => {
  const apiKey = getApiKey();
  const res = await fetch(buildUrl(path, params), {
    // Only send the api-key when we have one (direct-to-service mode). Behind a
    // same-origin proxy the browser has no key and the proxy injects it, so we
    // send no header rather than an empty one.
    headers: apiKey ? { 'api-key': apiKey } : undefined,
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
 * Hybrid search with full bodies. Rate limited. Use on submit / results page,
 * not on keystroke.
 *
 * Pagination: pass either `cursor` (opaque next/prev walk) OR `page` (1-indexed
 * jump to a numbered page). If both are given the API ignores `page` and honors
 * the cursor. `limit` is only applied on the first request (cursor absent); the
 * page size is then encoded into the returned cursors. Compute the page count
 * for numbered controls as ceil(totalCount / limit).
 */
export const search = async ({
  searchTerm,
  sources = DEFAULT_SOURCES,
  cursor,
  limit,
  page,
  sort,
  since,
  until,
  tags,
  language,
}) => {
  const body = await request('/v2/search', {
    q: searchTerm,
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
  language,
}) => {
  const body = await request('/v2/search/suggest', {
    q: searchTerm,
    sources,
    tags,
    limit,
    language,
  });

  return {
    results: (body.results || []).map(normalizeResult),
  };
};

/** Available tag values for the given sources, for building filter UI. */
export const fetchTags = async ({
  sources = DEFAULT_SOURCES,
  language,
} = {}) => {
  const body = await request('/v2/search/tags', { sources, language });

  return body.tags || [];
};

export { DEFAULT_SOURCES, DEFAULT_BASE_URL };
