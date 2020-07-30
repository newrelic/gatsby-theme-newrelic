import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Icon from './Icon';

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
    <StyledContainer
      width={width}
      className={className}
      style={style}
      size={size}
    >
      <StyledIcon
        css={css`
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
        `}
        name={Icon.TYPE.SEARCH}
      />
      <StyledInput
        value={value}
        size={size}
        {...props}
        type="text"
        onKeyDown={handleKeyDown}
      />
      {value && onClear && (
        <StyledButton
          onClick={handleClick}
          css={css`
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            &:hover {
              cursor: pointer;
            }
          `}
          onKeyDown={handleKeyDown}
          type="button"
          size={size}
        >
          <StyledIcon name={Icon.TYPE.X} />
        </StyledButton>
      )}
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
        padding: 0.5rem calc(1.5rem + var(--icon-size));
      `,
      container: css`
        --icon-size: 1rem;
      `,
    },
    [SIZES.LARGE]: {
      input: css`
        font-size: 1.25rem;
        padding: 1rem calc(1.5rem + var(--icon-size));
      `,
      container: css`
        --icon-size: 1.5rem;
      `,
    },
  },
};

const StyledContainer = styled.div`
  position: relative;
  width: ${(props) => props.width || '100%'};
  ${({ size }) => size && styles.size[size].container}
`;

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--primary-background-color);
  color: var(--primary-text-color);
  ${({ size }) => size && styles.size[size].input}

  &:focus {
    outline: none;
    border: 1px solid rgba(0, 126, 138, 0.6);
    box-shadow: 0 0 0 4px rgba(0, 126, 138, 0.1);
  }
`;

const StyledIcon = styled(Icon)`
  stroke: var(--primary-text-color);
  height: var(--icon-size);
  width: var(--icon-size);
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
