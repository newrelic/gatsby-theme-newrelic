import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';

import Button from './Button';
import Icon from './Icon';
import PageTools from './PageTools';

const getParams = (title, labels, sentiment, slug, site) => {
  const params = new URLSearchParams();

  params.set('labels', [...labels, sentiment].join(','));
  params.set('title', title ? `Feedback: ${title}` : 'Website Feedback');

  if (title && slug) {
    params.set('body', `Page: [${title}](${site}${slug})`);
  }

  return params.toString();
};

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
  const issueUrl = `${repository}/issues/new`;

  const positiveFeedback = [
    issueUrl,
    getParams(title, labels, 'feedback-positive', slug, siteUrl),
  ].join('?');

  const negativeFeedback = [
    issueUrl,
    getParams(title, labels, 'feedback-negative', slug, siteUrl),
  ].join('?');

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
