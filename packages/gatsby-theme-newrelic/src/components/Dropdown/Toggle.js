import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Button from '../Button';
import Icon from '../Icon';
import useDropdown from './useDropdown';

const Toggle = ({ children, variant, size }) => {
  const { open, toggle } = useDropdown();

  return (
    <Button variant={variant} onClick={toggle} size={size}>
      {children}
      <Icon
        name="fe-chevron-down"
        css={css`
          margin-left: 0.25rem;
          transform: rotate(${open ? '180deg' : '0'});
        `}
      />
    </Button>
  );
};

Toggle.propTypes = {
  children: PropTypes.node,
  variant: Button.propTypes.variant,
  size: Button.propTypes.size,
};

export default Toggle;
