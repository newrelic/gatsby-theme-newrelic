import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Button from './Button';
import Icon from './Icon';
import useThemeTranslation from '../hooks/useThemeTranslation';

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
  const { t } = useThemeTranslation();
  const [sentiment, updateSentiment] = useState(null);
  const [comment, updateComment] = useState('');
  const [submitted, updateSubmitted] = useState(false);
  const [error, updateError] = useState(false);

  if (submitted) {
    return <p>{t('feedback.thanks')}</p>;
  }

  return (
    <div
      css={css`
        text-align: ${align};
      `}
    >
      <p>{message || t('feedback.question')}</p>
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
          <Icon css={iconStyles} name="fe-thumbsup" size="1.1rem" />
          {t('feedback.positive')}
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
          <Icon css={iconStyles} name="fe-thumbsdown" size="1.1rem" />
          {t('feedback.negative')}
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
        placeholder={t(
          'feedback.commentPlaceholder',
          'Additional feedback (optional)'
        )}
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
              updateError(t('feedback.validationError'));
            }
          }}
        >
          {t('feedback.submitButton')}
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
};

export default Feedback;
