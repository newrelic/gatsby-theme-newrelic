import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Icon from './Icon';
import Input from './SearchModal/Input';
import Portal from './Portal';
import Result from './SearchModal/Result';
import ResultPreview from './SearchModal/ResultPreview';
import useThemeTranslation from '../hooks/useThemeTranslation';
import { useQuery } from 'react-query';
import { useDebounce } from 'react-use';
import useKeyPress from '../hooks/useKeyPress';
import useScrollFreeze from '../hooks/useScrollFreeze';
import { animated, useTransition } from 'react-spring';
import { rgba } from 'polished';
import Link from './Link';

const defaultFilters = [
  { name: 'docs', isSelected: false },
  { name: 'developer', isSelected: false },
  { name: 'opensource', isSelected: false },
];

const SearchModal = ({ onClose, isOpen }) => {
  const { t } = useThemeTranslation();
  const searchInput = useRef();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filters, setFilters] = useState(defaultFilters);
  const { isLoading, refetch, data = {}, isSuccess } = useSwiftypeSearch(
    searchTerm,
    filters
  );

  const { records: { page: results } = {} } = data;

  const transitions = useTransition(isOpen, null, {
    config: { tension: 220, friction: 22 },
    from: {
      opacity: 0,
      transform: 'scale(0.96)',
    },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.96)' },
  });

  useScrollFreeze(isOpen);
  useKeyPress('Escape', onClose, { ignoreTextInput: false });

  useKeyPress(
    ['ArrowUp', 'ArrowDown'],
    (e) => {
      if (e.key === 'ArrowUp' && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      }

      if (e.key === 'ArrowDown' && selectedIndex < results.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      }
    },
    { ignoreTextInput: false }
  );

  const bucketedResults = (results || []).reduce((acc, result) => {
    return acc.set(result.type, [...(acc.get(result.type) ?? []), result]);
  }, new Map());

  useEffect(() => {
    isOpen && searchInput.current.focus();
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchTerm]);

  useDebounce(
    () => {
      if (searchTerm) {
        refetch();
      }
    },
    200,
    [searchTerm]
  );

  useEffect(() => {
    refetch();
  }, [filters]);

  const flattenedResults = Array.from(bucketedResults.values()).flat();
  const selectedResult = flattenedResults[selectedIndex];

  const onFilter = (filterName) => {
    const updatedFilters = filters.map(({ name, isSelected }) => {
      if (name === filterName) {
        return { name: name, isSelected: !isSelected };
      }
      return { name, isSelected };
    });
    setFilters(updatedFilters);
  };

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <Portal key={key}>
          <animated.div
            style={{ opacity: props.opacity }}
            css={css`
              position: fixed;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              padding: var(--site-content-padding);
              z-index: 100;
              background: ${rgba('#d5d7d7', 0.5)};

              .dark-mode & {
                background: hsla(195, 20%, 20%, 0.5);
              }

              em {
                border-radius: 0.125rem;
                padding: 0.125rem 0.25rem;
                color: var(--color-neutrals-800);
                background: var(--color-neutrals-200);
                font-style: normal;
                font-weight: bold;
                font-size: 85%;

                .dark-mode & {
                  color: var(--color-brand-300);
                  background: var(--color-dark-200);
                }
              }

              h2,
              h3,
              h4 {
                em {
                  font-size: inherit;
                }
              }
            `}
            onClick={onClose}
          >
            <animated.div
              onClick={(e) => e.stopPropagation()}
              style={props}
              css={css`
                --horizontal-spacing: 1rem;

                z-index: 101;
                max-width: 1024px;
                width: 100%;
                margin: auto;
                box-shadow: var(--shadow-4);
                max-height: calc(100vh - 2 * var(--site-content-padding));
                display: flex;
                flex-direction: column;
                position: relative;
              `}
            >
              <Input
                placeholder={t('searchInput.placeholder')}
                ref={searchInput}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                onFilter={onFilter}
                value={searchTerm}
                onClear={() => setSearchTerm('')}
                onCancel={onClose}
                loading={isLoading}
                filters={filters}
                css={
                  searchTerm &&
                  css`
                    input {
                      border-bottom-left-radius: 0;
                      border-bottom-right-radius: 0;
                    }
                  `
                }
              />

              <div
                css={css`
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  flex-grow: 1;
                  background-color: white;
                  border-bottom-left-radius: 0.25rem;
                  border-bottom-right-radius: 0.25rem;
                  box-shadow: var(--shadow-6);
                  border: 1px solid var(--border-color);
                  border-top: none;
                  overflow: hidden;

                  .dark-mode & {
                    background: var(--color-dark-050);
                  }
                `}
              >
                {searchTerm && Boolean(results?.length) && (
                  <>
                    <div
                      css={css`
                        border-right: 1px solid var(--border-color);
                        height: calc(100vh - 6 * var(--site-content-padding));
                        max-width: 512px;
                        overflow: scroll;
                      `}
                    >
                      {Array.from(bucketedResults.entries()).map(
                        ([type, results]) => {
                          return (
                            <React.Fragment key={type}>
                              <h2
                                css={css`
                                  font-size: 0.75rem;
                                  color: var(--color-neutrals-700);
                                  margin-bottom: 0;
                                  text-transform: uppercase;
                                  padding: 0.5rem var(--horizontal-spacing);
                                  background: var(--divider-color);
                                  letter-spacing: 1px;
                                  border-bottom: 1px solid var(--border-color);

                                  .dark-mode & {
                                    background: var(--color-dark-100);
                                    color: var(--color-dark-700);
                                  }
                                `}
                              >
                                {type}
                              </h2>
                              {results.map((result) => {
                                const resultIndex = flattenedResults.indexOf(
                                  result
                                );

                                return (
                                  <Result
                                    selected={resultIndex === selectedIndex}
                                    key={result.id}
                                    result={result}
                                    onSelect={() =>
                                      setSelectedIndex(resultIndex)
                                    }
                                  />
                                );
                              })}
                            </React.Fragment>
                          );
                        }
                      )}
                    </div>
                    <ResultPreview result={selectedResult} />
                    <div
                      css={css`
                        font-size: 0.75rem;
                        display: flex;
                        border-top: 1px solid var(--border-color);
                        padding: 1rem var(--horizontal-spacing);
                        background: var(--color-neutrals-100);
                        grid-column: span 2;

                        .dark-mode & {
                          background: var(--color-dark-100);
                          color: var(--color-dark-700);
                        }
                      `}
                    >
                      <div
                        css={css`
                          display: flex;
                          align-items: center;
                          margin-right: 1rem;
                        `}
                      >
                        <Key>
                          <Icon name="fe-corner-down-left" />
                        </Key>
                        Select
                      </div>
                      <div
                        css={css`
                          display: flex;
                          align-items: center;
                          margin-right: 1rem;
                        `}
                      >
                        <Key>
                          <Icon name="fe-arrow-up" />
                          <Icon name="fe-arrow-down" />
                        </Key>
                        Navigate
                      </div>
                      <div
                        css={css`
                          display: flex;
                          align-items: center;
                        `}
                      >
                        <Key
                          css={css`
                            line-height: 1;
                            font-family: var(--code-font);
                          `}
                        >
                          esc
                        </Key>
                        Close
                      </div>
                    </div>
                  </>
                )}
                {searchTerm && results.length === 0 && isSuccess && (
                  <div
                    css={css`
                      display: flex;
                      border-top: 1px solid var(--border-color);
                      padding: 1rem var(--horizontal-spacing);
                      background: var(--color-neutrals-100);
                      grid-column: span 2;
                      align-items: center;
                      flex-direction: column;

                      .dark-mode & {
                        background: var(--color-dark-100);
                        color: var(--color-dark-700);
                      }
                    `}
                  >
                    <h5
                      css={css`
                        font-size: 0.875rem;
                        text-transform: uppercase;
                      `}
                    >
                      No Results Found
                    </h5>
                    <p
                      css={css`
                        font-size: 0.75rem;
                        max-width: 512px;
                        line-height: 1.25;
                        text-align: center;
                      `}
                    >
                      Make a{' '}
                      <Link
                        to={
                          'https://github.com/newrelic/docs-website/issues/new?assignees=&labels=content&template=content-issue.md&title=Summarize+your+docs+request'
                        }
                      >
                        request
                      </Link>{' '}
                      for new documentation or start a conversation on our{' '}
                      <Link to={'https://discuss.newrelic.com/'}>
                        Explorer's Hub
                      </Link>
                      !
                    </p>
                  </div>
                )}
              </div>
            </animated.div>
          </animated.div>
        </Portal>
      )
  );
};

const Key = ({ className, children }) => (
  <span
    className={className}
    css={css`
      display: inline-flex;
      border-radius: 0.25rem;
      padding: 0.25rem;
      margin-right: 0.5rem;
      background: var(--color-neutrals-300);

      .dark-mode & {
        background: var(--color-dark-400);
      }
    `}
  >
    {children}
  </span>
);

Key.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const useSwiftypeSearch = (query, filters, params = {}) => {
  return useQuery(
    'swiftype',
    () => {
      return fetch(
        'https://search-api.swiftype.com/api/v1/public/engines/search.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...params,
            q: query,
            engine_key: 'Ad9HfGjDw4GRkcmJjUut',
            per_page: 10,
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
        }
      ).then((res) => res.json());
    },
    {
      enabled: false,
    }
  );
};

const getFilters = (filters) => {
  const filteredTypes = filters.filter((filter) => filter.isSelected === true);
  return filteredTypes.length !== 0 ? filteredTypes : filters;
};

SearchModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default SearchModal;
