import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Button from './Button';
import Icon from './Icon';

const ALIGNMENT = {
  LEFT: 'left',
  CENTER: 'center',
};

const SENTIMENT = {
  POSITIVE: 'POSITIVE',
  NEGATIVE: 'NEGATIVE',
};

const iconStyles = css`
  margin-right: 0.5rem;
`;

const Feedback = ({ align, onSubmit, message }) => {
  const [sentiment, updateSentiment] = useState(null);
  const [comment, updateComment] = useState('');
  const [submitted, updateSubmitted] = useState(false);
  const [error, updateError] = useState(false);

  if (submitted) return <p>Thank you for your feedback</p>;

  return (
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
        <Button
          onClick={() => {
            updateSentiment(Feedback.SENTIMENT.POSITIVE);
          }}
          variant={Button.VARIANT.PRIMARY}
          css={css`
            ${sentiment === Feedback.SENTIMENT.NEGATIVE && `opacity: 0.5;`}
          `}
        >
          <Icon css={iconStyles} name={Icon.TYPE.THUMBSUP} size="1.1rem" />
          Yes
        </Button>
        <Button
          onClick={() => {
            updateSentiment(Feedback.SENTIMENT.NEGATIVE);
          }}
          variant={Button.VARIANT.PRIMARY}
          css={css`
            ${sentiment === Feedback.SENTIMENT.POSITIVE && `opacity: 0.5;`}
          `}
        >
          <Icon css={iconStyles} name={Icon.TYPE.THUMBSDOWN} size="1.1rem" />
          No
        </Button>
      </div>

      <textarea
        css={css`
          display: block;
          margin: ${align === Feedback.ALIGNMENT.CENTER
            ? '0.5rem auto'
            : '0.5rem 0'};
          height: 2.25rem;
          padding: 0.5rem;
          background-color: var(--primary-background-color);
          color: var(--primary-text-color);
          border: 1px solid var(--tertiary-background-color);
          border-radius: 3px;
          transition: all 0.2s;
          width: 100%;

          &:active,
          &:focus,
          &:not(:placeholder-shown) {
            outline: none;
            height: 4.25rem;
          }

          &:focus {
            border-color: var(--primary-text-color);
          }
        `}
        placeholder="Additional feedback (optional)"
        onChange={(e) => {
          updateComment(e.target.value);
        }}
        value={comment}
      />

      {error && (
        <p
          css={css`
            color: red;
            margin-bottom: 0.5rem;
          `}
        >
          {error}
        </p>
      )}

      <div
        css={css`
          text-align: right;
        `}
      >
        <Button
          variant={Button.VARIANT.PRIMARY}
          onClick={() => {
            if (sentiment || comment) {
              updateError(false);
              onSubmit({ sentiment, comment });
              updateSubmitted(true);
            } else {
              updateError('Please provide a vote or comment');
            }
          }}
        >
          Submit feedback
        </Button>
      </div>
    </div>
  );
};

Feedback.ALIGNMENT = ALIGNMENT;
Feedback.SENTIMENT = SENTIMENT;

Feedback.propTypes = {
  align: PropTypes.oneOf(Object.values(Feedback.ALIGNMENT)),
  onSubmit: PropTypes.func.isRequired,
  message: PropTypes.string,
};

Feedback.defaultProps = {
  align: Feedback.ALIGNMENT.LEFT,
  message: 'Was this page helpful?',
};

export default Feedback;
