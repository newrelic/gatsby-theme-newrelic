import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Link from './Link';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import UAParser from 'ua-parser-js';

const generatePageContextMarkdown = ({ pageUrl }) => {
  const { os, browser, device } = new UAParser().getResult();

  return `### Doc information (don't delete this section)

* ${pageUrl}
* ${getEnvironmentString('OS', os.name, os.version)}
* ${getEnvironmentString('Browser', browser.name, browser.version)}
* ${getEnvironmentString(
    'Device',
    device.type && `[${device.type}]`,
    device.vendor,
    device.model
  )}
`;
};

const getEnvironmentString = (key, ...info) =>
  `**${key}**: ${info.filter(Boolean).join(' ') || 'Unknown'}`;

const createIssueURL = ({ repository, issueTitle, issueBody, labels = [] }) => {
  const url = new URL(`${repository}/issues/new`);
  const params = new URLSearchParams();

  if (labels?.length) {
    params.set('labels', labels.join(','));
  }

  if (issueTitle) {
    params.set('title', issueTitle);
  }

  if (issueBody) {
    params.set('body', issueBody);
  }

  url.search = params;

  return url.href;
};

const GitHubIssueButton = ({ labels, issueTitle, issueBody, ...props }) => {
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
        issueBody: issueBody + generatePageContextMarkdown({ pageUrl }),
      })}
    />
  );
};

GitHubIssueButton.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  issueTitle: PropTypes.string,
  issueBody: PropTypes.string.isRequired,
};

export default GitHubIssueButton;
