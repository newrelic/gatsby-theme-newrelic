import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Button from './Button';
import ExternalLink from './ExternalLink';
import Icon from './Icon';
import PageTools from './PageTools';
import { graphql, useStaticQuery } from 'gatsby';

const ContributingGuidelines = ({ fileRelativePath }) => {
  const {
    site: {
      siteMetadata: { repository, branch, contributingUrl },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          repository
          branch
          contributingUrl
        }
      }
    }
  `);

  return (
    <PageTools.Section
      css={css`
        background-color: var(--divider-color);
      `}
    >
      <div
        css={css`
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 0.5rem;

          @supports not (gap: 1rem) {
            > :first-child {
              margin-right: 0.5rem;
            }
          }
        `}
      >
        <Button
          as={ExternalLink}
          href={`${repository}/issues/new/choose`}
          variant={Button.VARIANT.OUTLINE}
          size={Button.SIZE.SMALL}
        >
          <Icon
            name="fe-github"
            css={css`
              margin-right: 0.5rem;
            `}
          />
          Create an issue
        </Button>

        {fileRelativePath && (
          <Button
            as={ExternalLink}
            href={`${repository}/blob/${branch}/${fileRelativePath}`}
            variant={Button.VARIANT.OUTLINE}
            size={Button.SIZE.SMALL}
          >
            <Icon
              name="fe-edit"
              css={css`
                margin-right: 0.5rem;
              `}
            />
            Edit this page
          </Button>
        )}
      </div>
      {contributingUrl && (
        <p
          css={css`
            margin-bottom: 0 !important;
            font-size: 0.75rem;
            text-align: center;
          `}
        >
          Read our <ExternalLink href={contributingUrl}>guide</ExternalLink> on
          how to contribute
        </p>
      )}
    </PageTools.Section>
  );
};

ContributingGuidelines.propTypes = {
  fileRelativePath: PropTypes.string,
};

export default ContributingGuidelines;
