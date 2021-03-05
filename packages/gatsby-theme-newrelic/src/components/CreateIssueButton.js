import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import GitHubIssueButton from './GitHubIssueButton';
import Icon from './Icon';
import useThemeTranslation from '../hooks/useThemeTranslation';
import useInstrumentedHandler from '../hooks/useInstrumentedHandler';

const ISSUE_BODY = `
<!-- Thanks for filing an issue on our docs! Your feedback helps us improve our
docs for every New Relic user. -->

<!-- **THIS REPO IS PUBLIC. Anything you share here is visible to the world,
so be careful with screenshots and sensitive data.** -->

### Tell us what you need

* If you've found something inaccurate, what is it?
* If something is hard to read, confusing, or missing information, let us know.
* If you're having trouble completing a task or are uncertain what to do next,
  tell us what you're trying to do so we can provide more useful information.

### Anything else you'd like to share?

Add other context like screenshots, links to other docs, and information about
your environment (operating system, application framework, etc.).
`;

const CreateIssueButton = ({
  instrumentation,
  pageTitle,
  onClick,
  ...props
}) => {
  const { t } = useThemeTranslation();
  const handleClick = useInstrumentedHandler(onClick, {
    actionName: 'createAnIssue_click',
    component: instrumentation?.component,
  });

  return (
    <GitHubIssueButton
      {...props}
      issueTitle={pageTitle && `Issue: ${pageTitle}`}
      issueBody={ISSUE_BODY}
      labels={['feedback', 'feedback-issue']}
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
};

export default CreateIssueButton;
