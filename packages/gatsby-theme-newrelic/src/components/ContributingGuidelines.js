import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Button from './Button';
import Link from './Link';
import PageTools from './PageTools';
import { graphql, useStaticQuery } from 'gatsby';
import CreateIssueButton from './CreateIssueButton';
import EditPageButton from './EditPageButton';
import Trans from './Trans';

const ContributingGuidelines = ({ className, fileRelativePath, pageTitle }) => {
  const {
    site: {
      siteMetadata: { contributingUrl },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          contributingUrl
        }
      }
    }
  `);

  return (
    <PageTools.Section
      className={className}
      css={css`
        border-bottom: 1px solid var(--divider-color);
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
        <CreateIssueButton
          pageTitle={pageTitle}
          variant={Button.VARIANT.OUTLINE}
          size={Button.SIZE.SMALL}
          instrumentation={{ component: 'ContributingGuidelines' }}
        />

        {fileRelativePath && (
          <EditPageButton
            fileRelativePath={fileRelativePath}
            variant={Button.VARIANT.OUTLINE}
            size={Button.SIZE.SMALL}
            instrumentation={{ component: 'ContributingGuidelines' }}
          />
        )}
      </div>
      {contributingUrl && (
        <Trans
          i18nKey="contributing.guide"
          parent="p"
          css={css`
            font-size: 0.75rem;
            text-align: center;
          `}
        >
          Suggest a change or learn how to
          <Link to={contributingUrl}>contribute</Link>
        </Trans>
      )}
    </PageTools.Section>
  );
};

ContributingGuidelines.propTypes = {
  className: PropTypes.string,
  fileRelativePath: PropTypes.string,
  pageTitle: PropTypes.string,
};

export default ContributingGuidelines;
