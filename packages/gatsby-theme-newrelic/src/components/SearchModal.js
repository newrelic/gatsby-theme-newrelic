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

const SearchModal = ({ onClose, isOpen }) => {
  const { t } = useThemeTranslation();
  const searchInput = useRef();
  const [searchTerm, setSearchTerm] = useState('');
  const { isLoading, refetch, data = {} } = useSwiftypeSearch(searchTerm);
  const { records: { page: results } = {} } = data;

  console.log(data);

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
            <div>
              {results.map(({ title, highlight }) => {
                return (
                  <div>
                    <h4>{title}</h4>
                    <p dangerouslySetInnerHTML={{ __html: highlight.body }}></p>
                  </div>
                );
              })}
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
