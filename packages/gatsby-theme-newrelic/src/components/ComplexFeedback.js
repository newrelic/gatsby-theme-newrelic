import React, { useState } from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';

import { isValidEmail } from '../utils/isValidEmail';
import { titleCaseify } from '../utils/titleCase';
import RecaptchaFooter from './SignupModal/RecaptchaFooter';
import Button from './Button';
import PageTools from './PageTools';
import useThemeTranslation from '../hooks/useThemeTranslation';
import useTessen from '../hooks/useTessen';

const ComplexFeedback = ({ pageTitle }) => {
  const [feedbackType, setfeedbackType] = useState(null);
  const [userComments, setUserComments] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { t } = useThemeTranslation();
  const tessen = useTessen();
  const location = useLocation();
  const CAPTCHA_ACTION = 'userFeedback';

  const recaptchaReady = () => {
    return new Promise((resolve, reject) => {
      try {
        window.grecaptcha.ready(resolve);
      } catch (err) {
        reject(err);
      }
    });
  };

  const generateRecaptchaToken = () => {
    // turn the recaptcha thenable into an actual promise
    return new Promise((resolve, reject) => {
      window.grecaptcha
        .execute(window._nr_feedback.reCaptchaToken, {
          action: CAPTCHA_ACTION,
        })
        .then(resolve, reject);
    });
  };

  const handleFeedbackClick = (feedbackType) => {
    setfeedbackType(feedbackType);
    setShouldSubmit(true);
    tessen.track({
      eventName: 'feedbackRating',
      category: `${titleCaseify(feedbackType)}FeedbackClick`,
      path: location.pathname,
    });
  };

  const handleSubmit = async () => {
    setFormSubmitted(true);
    await recaptchaReady();
    const recaptchaToken = await generateRecaptchaToken();
    tessen.track({
      eventName: 'feedbackSubmitted',
      category: `${titleCaseify(feedbackType)}FeedbackSubmit`,
      path: location.pathname,
      userEmail,
      userComments,
    });
    const jiraSubmission = {
      title: pageTitle,
      description: userComments,
      rating: feedbackType,
      pageUrl: location.pathname,
      email: userEmail,
      recaptchaToken,
    };
    if (userComments) {
      fetch(
        'https://docs-user-feedback-service.newrelic-external.com/user-feedback-service',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jiraSubmission),
        }
      );
    }
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
        max-width: 320px;
        background: var(--erno-yellow);
        gap: 1rem;
        p {
          color: var(--system-text-primary-light);
          margin: 0;
          font-size: 14px;
        }
        input::placeholder {
          color: var(--system-text-primary-light);
        }
        h5,
        h4 {
          color: var(--system-text-primary-light);
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
              border: none;
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
              onClick={() => handleFeedbackClick('yes')}
              css={css`
                height: 3rem;
                color: var(--system-text-primary-light);
                border-color: var(--system-text-primary-light);

                ${feedbackType === 'yes' &&
                css`
                  background: var(--system-text-primary-light);
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
              {t('feedback.yes')}
            </Button>
            <Button
              variant={Button.VARIANT.OUTLINE}
              size={Button.SIZE.SMALL}
              onClick={() => handleFeedbackClick('no')}
              css={css`
                height: 3rem;
                color: var(--system-text-primary-light);
                border-color: var(--system-text-primary-light);

                ${feedbackType === 'no' &&
                css`
                  background: var(--system-text-primary-light);
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
              {t('feedback.no')}
            </Button>

            <Button
              variant={Button.VARIANT.OUTLINE}
              size={Button.SIZE.SMALL}
              onClick={() => handleFeedbackClick('somewhat')}
              css={css`
                height: 3rem;
                color: var(--system-text-primary-light);
                border-color: var(--system-text-primary-light);

                ${feedbackType === 'somewhat' &&
                css`
                  background: var(--system-text-primary-light);
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
                😐
              </div>
              {t('feedback.somewhat')}
            </Button>
          </div>
          {feedbackType && (
            <>
              <p>{t('feedback.comments')}</p>
              <textarea
                value={userComments}
                maxLength="30000"
                onChange={(e) => {
                  setUserComments(e.target.value);
                }}
                css={css`
                  font-size: 0.75rem;
                  padding: 0.5rem;
                  min-height: 100px;
                  border-radius: 4px;
                  border: 1px solid;
                `}
              />
              <p>{t('feedback.email')}</p>
              <div
                css={css`
                  p {
                    font-size: 0.625rem;
                  }
                `}
              >
                <p>{t('feedback.emailDisclaimer')}</p>
              </div>
              <input
                value={userEmail}
                placeholder="datanerd@example.com"
                onChange={(e) => {
                  setUserEmail(e.target.value);
                  setShouldSubmit(
                    isValidEmail(e.target.value) || e.target.value.length === 0
                  );
                }}
                css={css`
                  font-size: 0.75rem;
                  padding: 0.5rem;
                  border-radius: 4px;
                  border: 1px solid;
                `}
              />
              {userEmail && !isValidEmail(userEmail) && (
                <p
                  css={css`
                    // using && here to increase specificity over the p styling in the section above
                    && {
                      color: var(--attention-notification-critical);
                      margin-top: -1rem;
                    }
                  `}
                >
                  {t('feedback.validEmail')}
                </p>
              )}
              <Button
                variant={Button.VARIANT.NORMAL}
                size={Button.SIZE.LARGE}
                onClick={handleSubmit}
                disabled={!shouldSubmit}
                css={css`
                  height: 3rem;
                  background: var(--system-text-primary-light);
                  color: var(--system-text-primary-dark);
                  .dark-mode &:hover {
                    background: var(--color-black);
                    color: var(--system-text-primary-dark);
                  }
                  &:disabled {
                    cursor: not-allowed;
                  }
                `}
              >
                {t('feedback.submitButton')}
              </Button>
              <RecaptchaFooter />
            </>
          )}
        </>
      )}
    </PageTools.Section>
  );
};

ComplexFeedback.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default ComplexFeedback;
