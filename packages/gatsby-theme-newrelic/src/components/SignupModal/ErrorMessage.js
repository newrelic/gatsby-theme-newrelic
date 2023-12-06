import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Icon from '../Icon';
import Button from '../Button';

const ErrorMessage = ({ onClickBack }) => {
  return (
    <div
      css={css`
        font-size: 1.125rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
      `}
    >
      <p>
        Whoops, looks like something went wrong. Please check your name and
        email for any errors!
      </p>
      <Button onClick={() => onClickBack()}>
        <Icon
          name="fe-arrow-left"
          css={css`
            margin-right: 0.5rem;
          `}
        />{' '}
        Back
      </Button>
    </div>
  );
};

ErrorMessage.propTypes = {
  onClickBack: PropTypes.func.isRequired,
};

export default ErrorMessage;
