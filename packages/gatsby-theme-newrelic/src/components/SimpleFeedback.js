import React, { useState } from 'react';
import { css } from '@emotion/react';

import Button from './Button';
import Icon from './Icon';
import PageTools from './PageTools';
import useThemeTranslation from '../hooks/useThemeTranslation';
import useTessen from '../hooks/useTessen';

const SimpleFeedback = () => {
  const [clicked, setClicked] = useState(false);
  const { t } = useThemeTranslation();
  const tessen = useTessen();

  const handleClick = (feedbackType) => {
    setClicked(true);
    tessen.track('feedbackThumbClick', `${feedbackType}FeedbackClick`, {
      path: location.pathname,
    });
  };

  return (
    <PageTools.Section
      css={css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: var(--divider-color);
        padding: 0.5rem 1rem;
        gap: 1rem;

        @supports not (gap: 1rem) {
          > :first-child {
            margin-right: 1rem;
          }
        }
      `}
    >
      {clicked ? (
        <h6
          css={css`
            padding: 0.3rem;
          `}
        >
          Thank you for your feedback!
        </h6>
      ) : (
        <>
          {' '}
          <h6
            css={css`
              margin-bottom: 0;
            `}
          >
            {t('feedback.question')}
          </h6>
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: flex-start;
              gap: 0.25rem;

              @supports not (gap: 0.5rem) {
                a:first-of-type {
                  margin-right: 0.25rem;
                }
              }
            `}
          >
            <Button
              variant={Button.VARIANT.LINK}
              size={Button.SIZE.EXTRA_SMALL}
              onClick={() => handleClick('Positive')}
            >
              <Icon
                size="0.75rem"
                name="fe-thumbsup"
                css={css`
                  margin-right: 0.5rem;
                `}
              />
              {t('feedback.positive')}
            </Button>
            <Button
              variant={Button.VARIANT.LINK}
              size={Button.SIZE.EXTRA_SMALL}
              onClick={() => handleClick('Negative')}
            >
              <Icon
                size="0.75rem"
                name="fe-thumbsdown"
                css={css`
                  margin-right: 0.5rem;
                `}
              />
              {t('feedback.negative')}
            </Button>
          </div>
        </>
      )}
    </PageTools.Section>
  );
};

export default SimpleFeedback;
