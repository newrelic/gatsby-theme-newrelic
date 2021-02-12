import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';

import Button from './Button';
import Icon from './Icon';
import PageTools from './PageTools';
import createIssueURL from '../utils/createIssueURL';
import useThemeTranslation from '../hooks/useThemeTranslation';

const SimpleFeedback = ({ pageTitle, labels }) => {
  const { t } = useThemeTranslation();
  const { site } = useStaticQuery(graphql`
    query FeedbackQuery {
      site {
        siteMetadata {
          siteUrl
          repository
        }
      }
    }
  `);

  const { repository, siteUrl } = site.siteMetadata;
  const { pathname } = useLocation();

  const page = { title: pageTitle, slug: pathname, siteUrl };
  const title = pageTitle && `Feedback: ${pageTitle}`;

  const positiveFeedback = createIssueURL({
    repository,
    page,
    title,
    labels: [...labels, 'feedback-positive'],
  });

  const negativeFeedback = createIssueURL({
    repository,
    page,
    title,
    labels: [...labels, 'feedback-negative'],
  });

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
        <Button
          as="a"
          href={positiveFeedback}
          variant={Button.VARIANT.LINK}
          target="_blank"
          role="button"
          size={Button.SIZE.EXTRA_SMALL}
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
          as="a"
          href={negativeFeedback}
          variant={Button.VARIANT.LINK}
          target="_blank"
          role="button"
          size={Button.SIZE.EXTRA_SMALL}
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
    </PageTools.Section>
  );
};

SimpleFeedback.propTypes = {
  pageTitle: PropTypes.string,
  labels: PropTypes.arrayOf(PropTypes.string),
};

SimpleFeedback.defaultProps = {
  labels: ['feedback'],
};

export default SimpleFeedback;
