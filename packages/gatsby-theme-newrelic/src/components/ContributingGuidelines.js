import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import { css } from '@emotion/core';
import Button from './Button';
import ExternalLink from './ExternalLink';
import Icon from './Icon';
import PageTools from './PageTools';
import { graphql, useStaticQuery } from 'gatsby';
import createIssueURL from '../utils/createIssueURL';
import useThemeTranslation from '../hooks/useThemeTranslation';
import Trans from './Trans';

const ContributingGuidelines = ({ fileRelativePath, pageTitle }) => {
  const { t } = useThemeTranslation();
  const {
    site: {
      siteMetadata: { repository, branch, contributingUrl, siteUrl },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          repository
          branch
          contributingUrl
        }
      }
    }
  `);

  const { pathname } = useLocation();

  const page = { title: pageTitle, slug: pathname, siteUrl };
  const title = pageTitle && `Issue: ${pageTitle}`;
  const labels = ['bug'];

  const issueUrl = createIssueURL({ repository, title, page, labels });

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
          href={issueUrl}
          variant={Button.VARIANT.OUTLINE}
          size={Button.SIZE.SMALL}
        >
          <Icon
            name="fe-github"
            css={css`
              margin-right: 0.5rem;
            `}
          />
          {t('github.createIssue')}
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
            {t('github.editPage')}
          </Button>
        )}
      </div>
      {contributingUrl && (
        <Trans
          i18nKey="contributing.guide"
          parent="p"
          css={css`
            margin-bottom: 0 !important;
            font-size: 0.75rem;
            text-align: center;
          `}
        >
          Suggest a change or learn how to
          <ExternalLink href={contributingUrl}>contribute</ExternalLink>
        </Trans>
      )}
    </PageTools.Section>
  );
};

ContributingGuidelines.propTypes = {
  fileRelativePath: PropTypes.string,
  pageTitle: PropTypes.string,
};

export default ContributingGuidelines;
