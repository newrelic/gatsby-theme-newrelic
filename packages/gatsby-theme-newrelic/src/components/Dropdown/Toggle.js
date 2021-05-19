import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Button from '../Button';
import Icon from '../Icon';
import useDropdown from './useDropdown';

const Toggle = ({ children, className, variant, size, chevron = true }) => {
  const { open, toggle } = useDropdown();

  return (
    <Button
      className={className}
      variant={variant}
      onClick={toggle}
      size={size}
    >
      {children}
      {chevron && (
        <Icon
          name="fe-chevron-down"
          css={css`
            margin-left: 0.25rem;
            transform: rotate(${open ? '180deg' : '0'});
          `}
        />
      )}
    </Button>
  );
};

Toggle.propTypes = {
  className: PropTypes.string,
  chevron: PropTypes.bool,
  children: PropTypes.node,
  variant: Button.propTypes.variant,
  size: Button.propTypes.size,
};

export default Toggle;
