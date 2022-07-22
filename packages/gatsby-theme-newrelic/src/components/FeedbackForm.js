import React, { useState } from 'react';
import { css } from '@emotion/react';

import Button from './Button';
import Icon from './Icon';
import PageTools from './PageTools';
import useThemeTranslation from '../hooks/useThemeTranslation';
import useTessen from '../hooks/useTessen';
import ContributingGuidelines from './ContributingGuidelines';

const FeedbackForm = () => {
  const [clicked, setClicked] = useState('');
  const { t } = useThemeTranslation();
  const tessen = useTessen();

  const handleClick = (feedbackType) => {
    setClicked(feedbackType);
    tessen.track({
      eventName: 'feedbackThumbClick',
      category: `${feedbackType}FeedbackClick`,
      path: location.pathname,
    });
  };

  return (
    <PageTools.Section
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 1rem;
        background: var(--primary-hover-color);
        padding: 0.5rem 1rem;
        gap: 1rem;

        @supports not (gap: 1rem) {
          > :first-of-type {
            margin-right: 1rem;
          }
        }
      `}
    >
      <>
        {' '}
        <h4
          css={css`
            letter-spacing: 0.5px;
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
            gap: 2rem;

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
            css={css`
              color: var(--secondary-text-color);
              font-size: 1rem;
              transition: transform 200ms;

              ${clicked === 'Positive' &&
              css`
                border-bottom: solid 2px var(--secondary-text-color);
                font-weight: bold;

                svg {
                  stroke-width: 3;
                }

                .thumbs-up {
                  stroke: var(--brand-button-primary-accent);
                }
              `}

              &:hover {
                color: var(--primary-text-color);
                transform: scale(1.3);
                transition: transform 200ms;

                svg {
                  stroke-width: 2;
                }

                .thumbs-up {
                  fill: var(--brand-button-primary-accent);
                  stroke: var(--primary-text-color);
                }
              }
            `}
          >
            <Icon
              size="1.25rem"
              name="fe-thumbsup"
              css={css`
                margin-right: 0.5rem;
                color: var(--primary-text-color);
              `}
              className="thumbs-up"
            />
            {t('feedback.positive')}
          </Button>
          <Button
            variant={Button.VARIANT.LINK}
            size={Button.SIZE.EXTRA_SMALL}
            onClick={() => handleClick('Negative')}
            css={css`
              color: var(--secondary-text-color);
              font-size: 1rem;
              transition: transform 200ms;

              ${clicked === 'Negative' &&
              css`
                border-bottom: solid 2px var(--secondary-text-color);
                font-weight: bold;

                svg {
                  stroke-width: 3px;
                }

                .thumbs-down {
                  stroke: var(--color-red);
                }
              `}

              &:hover {
                color: var(--primary-text-color);
                transform: scale(1.3);
                transition: transform 200ms;

                svg {
                  stroke-width: 2;
                }

                .thumbs-down {
                  fill: var(--color-red);
                  stroke: var(--primary-text-color);
                }
              }
            `}
          >
            <Icon
              size="1.25rem"
              name="fe-thumbsdown"
              css={css`
                margin-right: 0.5rem;
                color: var(--primary-text-color);
              `}
              className="thumbs-down"
            />
            {t('feedback.negative')}
          </Button>
          {/* <ContributingGuidelines fileRelativePath="demo/src/pages/index.js" /> */}
        </div>
      </>
    </PageTools.Section>
  );
};

export default FeedbackForm;
