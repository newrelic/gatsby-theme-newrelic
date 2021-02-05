import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Backdrop from './Backdrop';
import SearchInput from './SearchInput';
import Portal from './Portal';
import useThemeTranslation from '../hooks/useThemeTranslation';
import { useQuery } from 'react-query';

const SearchModal = ({ onClose, isOpen }) => {
  const { t } = useThemeTranslation();
  const searchInput = useRef();
  const { isLoading, data } = useSwiftypeSearch();

  console.log(data);

  useEffect(() => {
    isOpen && searchInput.current.focus();
  }, [isOpen]);

  return isOpen ? (
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
        `}
      >
        <SearchInput
          placeholder={t('searchInput.placeholder')}
          size={SearchInput.SIZE.LARGE}
          ref={searchInput}
        />
      </div>
    </Portal>
  ) : null;
};

const useSwiftypeSearch = () => {
  return useQuery('swiftype', () => {
    return fetch(
      'https://search-api.swiftype.com/api/v1/public/engines/search.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: 'agents',
          engine_key: 'Ad9HfGjDw4GRkcmJjUut',
          per_page: 10,
        }),
      }
    ).then((res) => res.json());
  });
};

SearchModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default SearchModal;
