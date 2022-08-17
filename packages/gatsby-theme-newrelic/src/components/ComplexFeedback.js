import React, { useState } from 'react';
import { css } from '@emotion/react';

import Button from './Button';
import PageTools from './PageTools';
import useThemeTranslation from '../hooks/useThemeTranslation';
import useTessen from '../hooks/useTessen';

const ComplexFeedback = () => {
  const [feedbackType, setfeedbackType] = useState(null);
  const [userComments, setUserComments] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { t } = useThemeTranslation();
  const tessen = useTessen();

  const handleFeedbackClick = (feedbackType) => {
    setfeedbackType(feedbackType);
    tessen.track({
      eventName: 'feedbackThumbClick',
      category: `${feedbackType}FeedbackClick`,
      path: location.pathname,
    });
  };

  const handleSubmit = () => {
    setFormSubmitted(true);
    // TODO submit to jira
  };

  const handleReset = () => {
    setfeedbackType(null);
    setFormSubmitted(false);
    setUserComments(null);
  };

  return (
    <PageTools.Section
      css={css`
        display: flex;
        border: none;
        flex-direction: column;
        justify-content: center;
        background: var(--erno-yellow);
        padding: 1rem;
        gap: 1rem;
        p {
          margin: 0;
          font-size: 14px;
        }

        @supports not (gap: 1rem) {
          > :first-of-type {
            margin-right: 1rem;
          }
        }
      `}
    >
      {formSubmitted ? (
        <h5
          css={css`
            margin: 0;
          `}
        >
          {t('feedback.submitMessage')} 🤠{' '}
          <Button
            onClick={handleReset}
            css={css`
              border-bottom: 1px solid;
              border-radius: 0;
              padding: 0;
              background: none;
            `}
          >
            {t('feedback.reset')}
          </Button>
        </h5>
      ) : (
        <>
          <h4
            css={css`
              margin-bottom: 0;
            `}
          >
            {t('feedback.question')}
          </h4>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: flex-start;

              @supports not (gap: 0.5rem) {
                a:first-of-type {
                  margin-right: 0.25rem;
                }
              }
            `}
          >
            <Button
              variant={Button.VARIANT.OUTLINE}
              size={Button.SIZE.SMALL}
              onClick={() => handleFeedbackClick('poor')}
              css={css`
                height: 3rem;
                color: var(--primary-text-color);
                ${feedbackType === 'poor' &&
                css`
                  background: var(--button-background-color);
                  color: var(--system-text-primary-dark);
                `}
              `}
            >
              <div
                css={css`
                  margin-right: 0.5rem;
                  font-size: 0.75rem;
                `}
              >
                🙁
              </div>
              {t('feedback.poor')}
            </Button>
            <Button
              variant={Button.VARIANT.OUTLINE}
              size={Button.SIZE.SMALL}
              onClick={() => handleFeedbackClick('good')}
              css={css`
                height: 3rem;
                color: var(--primary-text-color);

                ${feedbackType === 'good' &&
                css`
                  background: var(--button-background-color);
                  color: var(--system-text-primary-dark);
                `}
              `}
            >
              <div
                css={css`
                  margin-right: 0.5rem;
                  font-size: 0.75rem;
                `}
              >
                🙂
              </div>
              {t('feedback.good')}
            </Button>
            <Button
              variant={Button.VARIANT.OUTLINE}
              size={Button.SIZE.SMALL}
              onClick={() => handleFeedbackClick('great')}
              css={css`
                height: 3rem;
                color: var(--primary-text-color);
                ${feedbackType === 'great' &&
                css`
                  background: var(--button-background-color);
                  color: var(--system-text-primary-dark);
                `}
              `}
            >
              <div
                css={css`
                  margin-right: 0.5rem;
                  font-size: 0.75rem;
                `}
              >
                😁
              </div>
              {t('feedback.great')}
            </Button>
          </div>
          {feedbackType && (
            <>
              <p>{t('feedback.acknowledge')}</p>
              <p>{t('feedback.comments')}</p>
              <textarea
                value={userComments}
                onChange={(e) => setUserComments(e.target.value)}
                css={css`
                  font-size: 0.75rem;
                  padding: 0.5rem;
                  min-height: 100px;
                  border-radius: 4px;
                  border: 1px solid;
                `}
              />
              <p>{t('feedback.email')}</p>
              <input
                value={userEmail}
                placeholder="reli@example.com"
                onChange={(e) => setUserEmail(e.target.value)}
                css={css`
                  font-size: 0.75rem;
                  padding: 0.5rem;
                  border-radius: 4px;
                  border: 1px solid;
                `}
              />
              <Button
                variant={Button.VARIANT.NORMAL}
                size={Button.SIZE.LARGE}
                onClick={handleSubmit}
                css={css`
                  height: 3rem;
                `}
              >
                {t('feedback.submitButton')}
              </Button>
            </>
          )}
        </>
      )}
    </PageTools.Section>
  );
};

export default ComplexFeedback;
