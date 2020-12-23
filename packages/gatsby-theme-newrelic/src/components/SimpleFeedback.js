import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';

import Button from './Button';
import Icon from './Icon';
import PageTools from './PageTools';
import createIssueURL from '../utils/createIssueURL';

const SimpleFeedback = ({ title, slug, labels }) => {
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

  const positiveFeedback = createIssueURL({
    repository,
    title: title && `Feedback: ${title}`,
    labels: [...labels, 'feedback-positive'],
    page: { title, slug, siteUrl },
  });

  const negativeFeedback = createIssueURL({
    repository,
    title: title && `Feedback: ${title}`,
    labels: [...labels, 'feedback-negative'],
    page: { title, slug, siteUrl },
  });

  return (
    <PageTools.Section>
      <PageTools.Title>Feedback</PageTools.Title>
      <div
        css={css`
          font-size: 0.875rem;
        `}
      >
        Was this page helpful?
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
          Yes
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
          No
        </Button>
      </div>
    </PageTools.Section>
  );
};

SimpleFeedback.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  labels: PropTypes.arrayOf(PropTypes.string),
};

SimpleFeedback.defaultProps = {
  labels: ['feedback'],
};

export default SimpleFeedback;
