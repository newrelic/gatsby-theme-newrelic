import React from 'react';
import propTypes from 'prop-types';
import { css } from '@emotion/core';
import Backdrop from './Backdrop';

const SearchModal = ({ onClose, isOpen }) => {
  return isOpen ? (
    <>
      <Backdrop onClick={onClose} />
    </>
  ) : null;
};

export default SearchModal;
