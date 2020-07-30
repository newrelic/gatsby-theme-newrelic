import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Button from './Button';
import Icon from './Icon';

const ALIGNMENT = {
  LEFT: 'left',
  CENTER: 'center',
};

const iconStyles = css`
  margin-right: 0.5rem;
`;

const Feedback = ({ align, onPositiveClick, onNegativeClick, message }) => (
  <div
    css={css`
      text-align: ${align};
    `}
  >
    <p>{message}</p>
    <div
      css={css`
        display: flex;
        justify-content: ${align};

        button {
          margin-right: 0.5rem;
        }
      `}
    >
      <Button onClick={onPositiveClick} variant={Button.VARIANT.PRIMARY}>
        <Icon css={iconStyles} name={Icon.TYPE.THUMBSUP} />
        Yes
      </Button>
      <Button onClick={onNegativeClick} variant={Button.VARIANT.PRIMARY}>
        <Icon css={iconStyles} name={Icon.TYPE.THUMBSDOWN} />
        No
      </Button>
    </div>
  </div>
);

Feedback.ALIGNMENT = ALIGNMENT;

Feedback.propTypes = {
  align: PropTypes.oneOf(Object.values(Feedback.ALIGNMENT)),
  onPositiveClick: PropTypes.func.isRequired,
  onNegativeClick: PropTypes.func.isRequired,
  message: PropTypes.string,
};

Feedback.defaultProps = {
  align: Feedback.ALIGNMENT.CENTER,
  message: 'Was this page helpful?',
};

export default Feedback;
