import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import Button from './Button';
import GitHubIssueButton from './GitHubIssueButton';
import Icon from './Icon';
import PageTools from './PageTools';
import useThemeTranslation from '../hooks/useThemeTranslation';
import useInstrumentedHandler from '../hooks/useInstrumentedHandler';

const POSITIVE_ISSUE_BODY = `
### Tell us more about your feedback

We're glad to hear this doc was helpful! We've recorded your feedback. Help us 
improve other content by telling us what worked and what didn't:

* What worked well in this doc?
* How could we make this doc even better?
`;

const NEGATIVE_ISSUE_BODY = `
### Tell us more about your feedback

Sorry to hear this doc wasn't helpful, but we'd love to make it better! We've 
recorded your feedback. Help us improve this content by providing more info:

* How can we improve this doc?
`;

const SimpleFeedback = ({ pageTitle, labels = [] }) => {
  const { t } = useThemeTranslation();
  const issueTitle = pageTitle ? `Feedback: ${pageTitle}` : 'Docs feedback';

  const handleClick = useInstrumentedHandler(null, (feedback) => ({
    actionName: 'feedback_click',
    feedback,
  }));

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
        <GitHubIssueButton
          labels={[...labels, 'feedback', 'feedback-positive']}
          issueTitle={issueTitle}
          issueBody={POSITIVE_ISSUE_BODY}
          variant={Button.VARIANT.LINK}
          size={Button.SIZE.EXTRA_SMALL}
          onClick={() => handleClick('positive')}
        >
          <Icon
            size="0.75rem"
            name="fe-thumbsup"
            css={css`
              margin-right: 0.5rem;
            `}
          />
          {t('feedback.positive')}
        </GitHubIssueButton>
        <GitHubIssueButton
          labels={[...labels, 'feedback', 'feedback-negative']}
          issueTitle={issueTitle}
          issueBody={NEGATIVE_ISSUE_BODY}
          variant={Button.VARIANT.LINK}
          size={Button.SIZE.EXTRA_SMALL}
          onClick={() => handleClick('negative')}
        >
          <Icon
            size="0.75rem"
            name="fe-thumbsdown"
            css={css`
              margin-right: 0.5rem;
            `}
          />
          {t('feedback.negative')}
        </GitHubIssueButton>
      </div>
    </PageTools.Section>
  );
};

SimpleFeedback.propTypes = {
  pageTitle: PropTypes.string,
  labels: PropTypes.arrayOf(PropTypes.string),
};

export default SimpleFeedback;
