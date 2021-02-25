import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Input from './SearchModal/Input';
import Portal from './Portal';
import useThemeTranslation from '../hooks/useThemeTranslation';
import { useQuery } from 'react-query';
import { useDebounce } from 'react-use';
import useKeyPress from '../hooks/useKeyPress';
import useScrollFreeze from '../hooks/useScrollFreeze';
import { animated, useTransition } from 'react-spring';
import { rgba } from 'polished';

const SearchModal = ({ onClose, isOpen }) => {
  const { t } = useThemeTranslation();
  const searchInput = useRef();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isLoading, refetch, data = {} } = useSwiftypeSearch(searchTerm);
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

  useDebounce(
    () => {
      if (searchTerm) {
        refetch();
      }
    },
    200,
    [searchTerm]
  );

  const flattenedResults = Array.from(bucketedResults.values()).flat();

  const selectedResult = flattenedResults[selectedIndex];

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
                value={searchTerm}
                onClear={() => setSearchTerm('')}
                loading={isLoading}
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
              {searchTerm && results && (
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

                    .dark-mode & {
                      background: var(--color-dark-050);
                    }
                  `}
                >
                  <div
                    css={css`
                      border-right: 1px solid var(--border-color);
                      max-height: 100%;
                      overflow: auto;
                    `}
                  >
                    {Array.from(bucketedResults.entries()).map(
                      ([type, results]) => {
                        return (
                          <React.Fragment key={type}>
                            <h4
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
                            </h4>
                            {results.map((result) => {
                              const resultIndex = flattenedResults.indexOf(
                                result
                              );
                              return (
                                <Result
                                  selected={resultIndex === selectedIndex}
                                  key={result.id}
                                  onMouseOver={() =>
                                    setSelectedIndex(resultIndex)
                                  }
                                  {...result}
                                />
                              );
                            })}
                          </React.Fragment>
                        );
                      }
                    )}
                  </div>
                  <div
                    css={css`
                      padding: 1rem;
                      overflow: auto;
                      max-height: 100%;
                      background: white;

                      .dark-mode & {
                        background: transparent;
                      }
                    `}
                  >
                    <h2>{selectedResult.title}</h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: selectedResult.highlight.body,
                      }}
                    />
                  </div>
                </div>
              )}
            </animated.div>
          </animated.div>
        </Portal>
      )
  );
};

const Result = ({ title, breadcrumb, selected, onMouseOver }) => {
  return (
    <div
      onFocus={() => {}}
      css={css`
        cursor: pointer;
        padding: 0.5rem var(--horizontal-spacing);
        transition: background-color 0.2s ease-out;

        &:not(:last-child) {
          border-bottom: 1px solid var(--border-color);
        }

        ${selected &&
        css`
          border-left: 0.25rem solid var(--border-color);
          background: var(--color-neutrals-100);
          padding-left: calc(var(--horizontal-spacing) - 0.25rem);

          .dark-mode & {
            background: var(--color-dark-100);
          }
        `}
      `}
      onMouseOver={onMouseOver}
    >
      <h4>{title}</h4>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        {breadcrumb}
      </p>
    </div>
  );
};

Result.propTypes = {
  title: PropTypes.string,
  breadcrumb: PropTypes.string,
  selected: PropTypes.bool,
  onMouseOver: PropTypes.func,
};

const useSwiftypeSearch = (query, params = {}) => {
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
                body: {
                  size: 200,
                },
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

SearchModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default SearchModal;
