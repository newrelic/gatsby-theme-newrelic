import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Backdrop from './Backdrop';
import SearchInput from './SearchInput';
import Portal from './Portal';
import useThemeTranslation from '../hooks/useThemeTranslation';
import { useQuery } from 'react-query';
import useQueryParams from '../hooks/useQueryParams';
import Spinner from './Spinner';
import { useDebounce } from 'react-use';
import useKeyPress from '../hooks/useKeyPress';

const SearchModal = ({ onClose, isOpen }) => {
  const { t } = useThemeTranslation();
  const searchInput = useRef();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isLoading, refetch, data = {} } = useSwiftypeSearch(searchTerm);
  const { records: { page: results } = {} } = data;

  useKeyPress(
    ['ArrowUp', 'ArrowDown'],
    (e) => {
      console.log(e.key, selectedIndex);
      if (e.key === 'ArrowUp' && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      }

      if (e.key === 'ArrowDown' && selectedIndex < results.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      }
    },
    { ignoreTextInput: false }
  );
  useKeyPress(
    'ArrowDown',
    (e) => {
      console.log(e.key, selectedIndex);
      if (e.key === 'ArrowUp' && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      }

      if (e.key === 'ArrowDown' && selectedIndex < results.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      }
    },
    { ignoreTextInput: false }
  );

  const bucketedResults = results?.reduce((acc, result) => {
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

  return true ? (
    <Portal>
      <Backdrop onClick={onClose} />
      <div
        css={css`
          z-index: 101;
          position: absolute;
          max-width: 900px;
          width: 100%;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          margin: var(--site-content-padding);
          box-shadow: var(--shadow-4);
          height: calc(100vh - 2 * var(--site-content-padding));
          display: flex;
          flex-direction: column;
        `}
      >
        <SearchInput
          placeholder={t('searchInput.placeholder')}
          size={SearchInput.SIZE.LARGE}
          ref={searchInput}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
        />
        {isLoading && (
          <Spinner
            css={css`
              margin-top: 1rem;
            `}
          />
        )}
        {results && (
          <div
            css={css`
              display: grid;
              grid-template-columns: 1fr 1fr;
              background-color: var(--color-dark-100);
              flex-grow: 1;
            `}
          >
            <div
              css={css`
                box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.15);
              `}
            >
              {Array.from(bucketedResults.entries()).map(
                ([type, results], index) => {
                  return (
                    <React.Fragment key={type}>
                      <div
                        css={css`
                          background-color: var(--color-dark-400);
                          text-align: center;
                          text-transform: uppercase;
                        `}
                      >
                        <h4>{type}</h4>
                      </div>
                      {results.map((result, resultIndex) => {
                        return (
                          <Result
                            selected={resultIndex + index === selectedIndex}
                            key={result.id}
                            onMouseOver={() =>
                              setSelectedIndex(resultIndex + index)
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
              `}
            >
              Right
            </div>
          </div>
        )}
      </div>
    </Portal>
  ) : null;
};

const Result = ({ title, highlight, breadcrumb, selected, onMouseOver }) => {
  return (
    <div
      css={css`
        border: ${selected ? '2px solid white' : 'none'};
      `}
      onMouseOver={onMouseOver}
    >
      <h4>{title}</h4>
      <p
        css={css`
          font-size: 12px;
        `}
      >
        {breadcrumb}
      </p>
      <hr></hr>
    </div>
  );
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
                  size: 60,
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
