import React from 'react';
import PropTypes from 'prop-types';
import FeatherIcon from './FeatherIcon';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const SIZES = {
  MEDIUM: 'medium',
  LARGE: 'large',
};

const SearchInput = ({
  onClear,
  value,
  width,
  size = 'medium',
  className,
  style,
  ...props
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClear();
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClear();
  };

  return (
    <StyledContainer width={width} className={className} style={style}>
      <StyledButton
        onClick={handleClick}
        css={value && clearButtonStyles}
        onKeyDown={(e) => e.preventDefault()}
        type="button"
        size={size}
      >
        <StyledFeatherIcon name={value ? 'x' : 'search'} size={size} />
      </StyledButton>
      <StyledInput
        value={value}
        size={size}
        {...props}
        type="text"
        onKeyDown={handleKeyDown}
      />
    </StyledContainer>
  );
};

SearchInput.propTypes = {
  className: PropTypes.string,
  onClear: PropTypes.func,
  value: PropTypes.string,
  width: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
};

SearchInput.SIZE = SIZES;

export default SearchInput;

const styles = {
  size: {
    [SIZES.MEDIUM]: {
      input: css`
        font-size: 0.875rem;
        padding: 0.5rem;
        padding-left: 2rem;
      `,
      icon: css`
        height: 1rem;
      `,
      button: css`
        top: calc(50% - 8px);
        left: 2%;
      `,
    },
    [SIZES.LARGE]: {
      input: css`
        font-size: 1.25rem;
        padding: 1rem;
        padding-left: 2.65rem;
      `,
      icon: css`
        height: 1.5rem;
      `,
      button: css`
        top: 50%;
        transform: translateY(-50%);
        left: 2%;
      `,
    },
  },
};

const StyledContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : '100%')};
`;

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--primary-background-color);
  ${({ size }) => size && styles.size[size].input}

  &:focus {
    outline: none;
    border: 1px solid rgba(0, 126, 138, 0.6);
    box-shadow: 0 0 0 4px rgba(0, 126, 138, 0.1);
  }
`;

const StyledFeatherIcon = styled(FeatherIcon)`
  align-items: center;
  display: block;
  font-size: 1rem;
  stroke: var(--primary-text-color);
  ${({ size }) => size && styles.size[size].icon}
`;

const StyledButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  outline: none;
  ${({ size }) => size && styles.size[size].button}
`;

const clearButtonStyles = css`
  &:hover {
    cursor: pointer;
  }
`;
