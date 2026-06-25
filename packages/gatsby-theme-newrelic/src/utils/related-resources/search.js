const fetch = require('node-fetch');
const { stripTrailingSlash } = require('./url');

// Build-time related-resources lookup against SearchGPT.
//
// This runs across many pages during the build, so it uses the lexical
// /v2/search/suggest endpoint: per the SearchGPT docs it is the recommended
// path for related-content lookups and is NOT rate limited (unlike /v2/search).
const BASE_URL =
  process.env.SEARCHGPT_BASE_URL ||
  process.env.GATSBY_SEARCHGPT_BASE_URL ||
  'https://support-search.service.newrelic.com';

const API_KEY =
  process.env.SEARCHGPT_API_KEY || process.env.GATSBY_SEARCHGPT_API_KEY;

const SOURCES = ['nr-docs'];

module.exports = async (url, params = {}, { limit = 5, excludedUrls = [] }) => {
  const searchTerm = params.q;

  if (!searchTerm) {
    return [];
  }

  // urls to drop from results: the page itself plus its declared
  // resources/redirects, compared without trailing slashes
  const excluded = new Set([url, ...excludedUrls].map(stripTrailingSlash));

  // request extra so we still have `limit` results after filtering excludes
  const query = new URLSearchParams({
    q: searchTerm,
    sources: JSON.stringify(SOURCES),
    limit: String(limit + excluded.size + 5),
  });

  try {
    const res = await fetch(`${BASE_URL}/v2/search/suggest?${query}`, {
      headers: { 'api-key': API_KEY },
    });

    const { results = [] } = await res.json();

    return results
      .map((result) => ({
        title: result.title,
        url: result.url || result.href,
      }))
      .filter((result) => !excluded.has(stripTrailingSlash(result.url)))
      .slice(0, limit);
  } catch (err) {
    // related resources are non-critical enrichment; never fail the build
    // eslint-disable-next-line no-console
    console.warn(
      `[gatsby-theme-newrelic] related-resources lookup failed: ${err.message}`
    );
    return [];
  }
};
