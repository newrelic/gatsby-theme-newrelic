/* eslint-disable no-console */
// TEMPORARY manual-test page for the SearchGPT REST integration.
// Visit http://localhost:8001/search-test
// Remove this file before merging (tracked under the SearchGPT migration cleanup).
import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  search,
  suggest,
} from '../../../packages/gatsby-theme-newrelic/src/utils/searchGPT';

const LIMIT = 5;

const SearchTest = () => {
  const [term, setTerm] = useState('infrastructure');
  const [mode, setMode] = useState(null); // 'search' | 'suggest'
  const [state, setState] = useState({ status: 'idle' });
  const [results, setResults] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [totalCount, setTotalCount] = useState(null);
  // New v2 params: 1-indexed numbered page, and a comma-delimited language CSV
  // (e.g. "en" or "en,ja"; blank = all languages).
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState('');

  const totalPages = totalCount != null ? Math.ceil(totalCount / LIMIT) : null;

  const run = async (which, { append = false, pageOverride } = {}) => {
    setMode(which);
    setState({ status: 'loading' });
    const lang = language.trim() || undefined;
    try {
      if (which === 'suggest') {
        const res = await suggest({
          searchTerm: term,
          limit: LIMIT,
          language: lang,
        });
        console.log('[suggest] response', res);
        setResults(res.results);
        setCursor(null);
        setTotalCount(null);
      } else {
        const targetPage = pageOverride ?? page;
        const res = await search({
          searchTerm: term,
          cursor: append ? cursor : undefined,
          // page is honored only when cursor is absent (cursor wins if both).
          page: append ? undefined : targetPage,
          limit: LIMIT,
          language: lang,
        });
        console.log('[search] response', res);
        setResults((prev) => (append ? prev.concat(res.results) : res.results));
        setCursor(res.nextCursor);
        setTotalCount(res.totalCount);
        if (!append) setPage(targetPage);
      }
      setState({ status: 'success' });
    } catch (err) {
      console.error(err);
      setState({
        status: 'error',
        message: err.message,
        rateLimit: err.rateLimit,
      });
    }
  };

  return (
    <div
      css={css`
        max-width: 820px;
        margin: 2rem auto;
        padding: 0 1rem;
        font-family: system-ui, sans-serif;

        .highlight {
          background: #fff3a3;
          font-weight: 600;
        }
        .meta {
          color: #666;
          font-size: 0.75rem;
        }
        button {
          margin-right: 0.5rem;
        }
        input {
          padding: 0.4rem 0.6rem;
          width: 320px;
          margin-right: 0.5rem;
        }
        li {
          margin-bottom: 1.25rem;
          list-style: none;
        }
        ul {
          padding: 0;
        }
        pre {
          background: #f4f4f4;
          padding: 0.75rem;
          overflow: auto;
          font-size: 0.7rem;
        }
      `}
    >
      <h1>SearchGPT REST — manual test</h1>
      <p className="meta">
        TEMPORARY page. Tests the new client directly. Open DevTools → Network
        to confirm calls hit /v2/search and /v2/search/suggest (and watch for
        CORS).
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          run('search');
        }}
      >
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="search term"
        />
        <input
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          placeholder="language CSV (e.g. en,ja)"
          css={css`
            width: 200px;
          `}
        />
        <button type="submit">Search (/v2/search)</button>
        <button type="button" onClick={() => run('suggest')}>
          Suggest (/v2/search/suggest)
        </button>
      </form>

      <p className="meta">
        status: <strong>{state.status}</strong>
        {mode && ` · mode: ${mode}`}
        {totalCount != null && ` · totalCount: ${totalCount}`}
        {totalPages != null && ` · totalPages: ${totalPages}`}
        {mode === 'search' && ` · page: ${page}`}
        {` · showing: ${results.length}`}
      </p>

      {state.status === 'error' && (
        <div
          css={css`
            color: #b00;
          `}
        >
          Error: {state.message}
          {state.rateLimit && (
            <pre>{JSON.stringify(state.rateLimit, null, 2)}</pre>
          )}
        </div>
      )}

      <ul>
        {results.map((r) => (
          <li key={r.id || r.url}>
            <div className="meta">
              {r.sourceLabel} · score {r.score?.toFixed?.(3) ?? r.score}
            </div>
            <a href={r.url} target="_blank" rel="noreferrer">
              <strong>{r.title}</strong>
            </a>
            <div className="meta">{r.url}</div>
            {/* summary is highlighted with <span class='highlight'> */}
            <p dangerouslySetInnerHTML={{ __html: r.summary }} />
            {r.bodyHighlights && (
              <details>
                <summary className="meta">bodyHighlights (search only)</summary>
                <pre>{r.bodyHighlights}</pre>
              </details>
            )}
            {r.tags?.length > 0 && (
              <div className="meta">tags: {r.tags.join(', ')}</div>
            )}
          </li>
        ))}
      </ul>

      {mode === 'search' && totalPages > 1 && (
        <div
          css={css`
            margin-top: 1rem;
          `}
        >
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => run('search', { pageOverride: page - 1 })}
          >
            ← Prev
          </button>
          <span className="meta">
            page {page} / {totalPages}
          </span>
          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => run('search', { pageOverride: page + 1 })}
            css={css`
              margin-left: 0.5rem;
            `}
          >
            Next →
          </button>
        </div>
      )}

      {mode === 'search' && cursor && (
        <button
          type="button"
          onClick={() => run('search', { append: true })}
          css={css`
            margin-top: 1rem;
          `}
        >
          Load more (cursor walk)
        </button>
      )}
    </div>
  );
};

export default SearchTest;
