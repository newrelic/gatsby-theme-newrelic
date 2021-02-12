import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import GitHubIssueButton from './GitHubIssueButton';
import Icon from './Icon';
import useThemeTranslation from '../hooks/useThemeTranslation';

const ISSUE_BODY = `
## Description

[NOTE]: # (Describe the problem you're encountering.)
[TIP]: # (Do NOT give us access or passwords to your New Relic account or API keys!)

## Steps to Reproduce

[NOTE]: # (Please be as specific as possible.)

## Expected Behavior

[NOTE]: # (Tell us what you expected to happen.)

## Relevant Logs / Console output

[NOTE]: # (Please provide specifics of the local error logs, Browser Dev Tools console, etc. if appropriate and possible.)
`;

const CreateIssueButton = ({ pageTitle, ...props }) => {
  const { t } = useThemeTranslation();

  return (
    <GitHubIssueButton
      {...props}
      issueTitle={pageTitle && `Issue: ${pageTitle}`}
      issueBody={ISSUE_BODY}
      labels={['bug']}
    >
      <Icon
        name="fe-github"
        css={css`
          margin-right: 0.5rem;
        `}
      />
      {t('github.createIssue')}
    </GitHubIssueButton>
  );
};

CreateIssueButton.propTypes = {
  pageTitle: PropTypes.string,
};

export default CreateIssueButton;
