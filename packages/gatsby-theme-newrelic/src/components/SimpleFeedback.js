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
    <PageTools.Section>
      <PageTools.Title>{t('feedback.title')}</PageTools.Title>
      <div
        css={css`
          font-size: 0.875rem;
        `}
      >
        {t('feedback.question')}
      </div>
      <div
        css={css`
          display: flex;
          margin-top: 0.5rem;
          justify-content: center;
          align-items: flex-start;
          gap: 0.5rem;

          a {
            flex-grow: 1;
          }

          @supports not (gap: 0.5rem) {
            a:first-of-type {
              margin-right: 0.5rem;
            }
          }
        `}
      >
        <Button
          as="a"
          href={positiveFeedback}
          variant={Button.VARIANT.NORMAL}
          target="_blank"
          role="button"
        >
          <Icon
            size="0.75rem"
            name={Icon.TYPE.THUMBSUP}
            css={css`
              margin-right: 0.5rem;
            `}
          />
          {t('feedback.positive')}
        </Button>
        <Button
          as="a"
          href={negativeFeedback}
          variant={Button.VARIANT.NORMAL}
          target="_blank"
          role="button"
        >
          <Icon
            size="0.75rem"
            name={Icon.TYPE.THUMBSDOWN}
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
