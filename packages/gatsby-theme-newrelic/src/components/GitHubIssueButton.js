import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Link from './Link';
import createIssueURL from '../utils/createIssueURL';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';

const createDefaultIssueBody = ({ pageTitle, pageUrl } = {}) => `
## Description

Page: ${pageTitle ? `[${pageTitle}](${pageUrl})` : pageUrl}

[NOTE]: # (Describe the problem you're encountering.)
[TIP]: # (Do NOT give us access or passwords to your New Relic account or API keys!)

## Steps to Reproduce

[NOTE]: # (Please be as specific as possible.)

## Expected Behavior

[NOTE]: # (Tell us what you expected to happen.)

## Relevant Logs / Console output

[NOTE]: # (Please provide specifics of the local error logs, Browser Dev Tools console, etc. if appropriate and possible.)

## Your Environment

[TIP]: # (Include as many relevant details about your environment as possible.)
[TIP]: # (ex: Browser name and version)
[TIP]: # (ex: Operating System and version)

## Additional context

[TIP]: # (Add any other context about the problem here.)
`;

const GitHubIssueButton = ({
  labels,
  pageTitle,
  issueTitle,
  issueBody,
  ...props
}) => {
  const { pathname } = useLocation();

  const {
    site: {
      siteMetadata: { siteUrl, repository },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          repository
        }
      }
    }
  `);

  const pageUrl = new URL(pathname, siteUrl).href;

  return (
    <Button
      {...props}
      role="button"
      as={Link}
      to={createIssueURL({
        repository,
        labels,
        issueTitle,
        issueBody: issueBody || createDefaultIssueBody({ pageTitle, pageUrl }),
      })}
    />
  );
};

GitHubIssueButton.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  pageTitle: PropTypes.string,
  issueTitle: PropTypes.string,
  issueBody: PropTypes.string,
  slug: PropTypes.string,
};

GitHubIssueButton.SIZE = Button.SIZE;
GitHubIssueButton.VARIANT = Button.VARIANT;

export default GitHubIssueButton;
