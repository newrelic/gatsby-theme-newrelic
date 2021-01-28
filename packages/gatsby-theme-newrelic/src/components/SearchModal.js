import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Backdrop from './Backdrop';
import SearchInput from './SearchInput';
import Portal from './Portal';
import useThemeTranslation from '../hooks/useThemeTranslation';

const SearchModal = ({ onClose, isOpen }) => {
  const { t } = useThemeTranslation();
  const searchInput = useRef();

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

SearchModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default SearchModal;
