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

const Feedback = ({
  align,
  onPositiveClick,
  onNegativeClick,
  onCommentSubmit,
  message,
}) => {
  const [sentiment, updateSentiment] = useState(null);
  const [showCommentForm, updateShowCommentForm] = useState(false);
  const [comment, updateComment] = useState('');
  const [submitted, updateSubmitted] = useState(false);

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
            updateShowCommentForm(true);
            onPositiveClick();
          }}
          variant={Button.VARIANT.PRIMARY}
          disabled={submitted}
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
            updateShowCommentForm(true);
            onNegativeClick();
          }}
          variant={Button.VARIANT.PRIMARY}
          disabled={submitted}
          css={css`
            ${sentiment === Feedback.SENTIMENT.POSITIVE && `opacity: 0.5;`}
          `}
        >
          <Icon css={iconStyles} name={Icon.TYPE.THUMBSDOWN} size="1.1rem" />
          No
        </Button>
      </div>

      {onCommentSubmit && showCommentForm && (
        <>
          <textarea
            css={css`
              display: block;
              margin: ${align === Feedback.ALIGNMENT.CENTER
                ? '0.5rem auto'
                : '0.5rem 0'};
              height: 2.25rem;
              min-width: 5rem;
              padding: 0.5rem;
              background-color: var(--primary-background-color);
              color: var(--primary-text-color);
              border: 1px solid var(--tertiary-background-color);
              border-radius: 3px;
              transition: all 0.2s;

              &:active,
              &:focus,
              &:not(:placeholder-shown) {
                outline: none;
                height: 4.25rem;
                min-width: 25rem;
                max-width: 100%;
              }

              &:focus {
                border-color: var(--primary-text-color);
              }
            `}
            placeholder="Additional Feedback"
            onChange={(e) => {
              updateComment(e.target.value);
            }}
            value={comment}
          />
          <Button
            variant={Button.VARIANT.PRIMARY}
            onClick={() => {
              updateShowCommentForm(false);
              onCommentSubmit(comment);
              updateSubmitted(true);
            }}
          >
            Submit
          </Button>
        </>
      )}
    </div>
  );
};

Feedback.ALIGNMENT = ALIGNMENT;
Feedback.SENTIMENT = SENTIMENT;

Feedback.propTypes = {
  align: PropTypes.oneOf(Object.values(Feedback.ALIGNMENT)),
  onPositiveClick: PropTypes.func.isRequired,
  onNegativeClick: PropTypes.func.isRequired,
  onCommentSubmit: PropTypes.func, // TODO: document
  message: PropTypes.string,
};

Feedback.defaultProps = {
  align: Feedback.ALIGNMENT.CENTER,
  message: 'Was this page helpful?',
};

export default Feedback;
