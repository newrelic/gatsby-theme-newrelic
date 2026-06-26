// Client-side term highlighting for fields the SearchGPT API returns plain
// (notably `title` — the API only highlights `summary`/`bodyHighlights`).
// Wraps occurrences of the query terms with <span class='highlight'>, matching
// the markup the server uses, so the same `.highlight` CSS styles both.
//
// `text` is HTML-escaped before matching, so the result is safe to pass to
// dangerouslySetInnerHTML. Matching is a naive case-insensitive term match and
// will not mirror the server's stemming/semantic matching exactly.

const HTML_ESCAPES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

const escapeHtml = (str) =>
  str.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);

const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const highlightText = (text, query) => {
  const safe = escapeHtml(text ?? '');

  if (!query) return safe;

  const terms = query
    .trim()
    .split(/\s+/)
    .filter((term) => term.length > 1)
    .map(escapeRegExp);

  if (terms.length === 0) return safe;

  const regex = new RegExp(`(${terms.join('|')})`, 'gi');

  return safe.replace(regex, "<span class='highlight'>$1</span>");
};

export default highlightText;
