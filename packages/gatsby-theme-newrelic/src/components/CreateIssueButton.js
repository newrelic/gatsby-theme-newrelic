import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import GitHubIssueButton from './GitHubIssueButton';
import Icon from './Icon';
import useThemeTranslation from '../hooks/useThemeTranslation';
import useInstrumentedHandler from '../hooks/useInstrumentedHandler';

const ISSUE_BODY = `
<!-- Thanks for filing an issue on our docs! -->

<!-- This repo is public. Anything you share here is visible to the world. -->

## How can we make our docs better?

* Is something confusing?
* Is something inaccurate or missing?
* Were you unable to complete a task? (What task?)
`;

const CreateIssueButton = ({
  labels = ['bug'],
  instrumentation,
  pageTitle,
  onClick,
  ...props
}) => {
  const { t } = useThemeTranslation();
  const handleClick = useInstrumentedHandler(onClick, {
    tessenEventName: 'createAnIssueClick',
    tessenCategoryName: 'CreateIssue',
    component: instrumentation?.component,
  });

  return (
    <GitHubIssueButton
      {...props}
      issueTitle={pageTitle && `Issue: ${pageTitle}`}
      issueBody={ISSUE_BODY}
      labels={labels}
      onClick={handleClick}
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
  instrumentation: PropTypes.shape({
    component: PropTypes.string.isRequired,
  }).isRequired,
  pageTitle: PropTypes.string,
  onClick: PropTypes.func,
  labels: PropTypes.arrayOf(PropTypes.string),
};

export default CreateIssueButton;
