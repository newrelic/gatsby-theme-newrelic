import { useStaticQuery } from 'gatsby';
import { merge } from 'lodash-es';
import { screen } from '@testing-library/dom';
import GitHubIssueButton from '../GitHubIssueButton.mjs';
import { renderWithProviders } from '../../test-utils/renderHelpers.mjs';

const DEFAULT_DATA = {
  newRelicThemeConfig: {
    tessen: {
      product: 'foo',
      subproduct: 'bar',
    },
  },
  allLocale: {
    nodes: [{ locale: 'en', isDefault: true }],
  },
  site: {
    siteMetadata: {
      siteUrl: 'https://example.com',
    },
  },
};

const mockProps = {
  issueTitle: 'Issue: Super informative page',
  issueBody: 'how can we fix this doc?',
  labels: ['bug'],
  onClick: jest.fn(),
};

const useStaticData = (overrides) =>
  useStaticQuery.mockImplementation(() => merge({}, DEFAULT_DATA, overrides));

useStaticData({
  site: {
    siteMetadata: {
      siteUrl: 'https://example.com',
      repository: 'https://foobar.net',
    },
  },
});

test('renders Github button', () => {
  renderWithProviders(
    <GitHubIssueButton
      issueTitle={mockProps.issueTitle}
      issueBody={mockProps.issueBody}
      labels={mockProps.labels}
      onClick={mockProps.onClick}
    >
      Create issue
    </GitHubIssueButton>
  );

  expect(screen.queryByRole('button')).toBeVisible();
});

test('component builds correct PR url', () => {
  renderWithProviders(
    <GitHubIssueButton
      issueTitle={mockProps.issueTitle}
      issueBody={mockProps.issueBody}
      labels={mockProps.labels}
      onClick={mockProps.onClick}
    >
      Create issue
    </GitHubIssueButton>
  );

  expect(screen.queryByRole('button').getAttribute('href')).toBe(
    'https://foobar.net/issues/new?labels=bug&title=Issue%3A+Super+informative+page&body=how+can+we+fix+this+doc%3F%0A%23%23%23+Doc+information+%28don%27t+delete+this+section%29%0A%0A*+https%3A%2F%2Fexample.com%2F%0A*+**OS**%3A+Unknown%0A*+**Browser**%3A+WebKit+555.56%0A*+**Device**%3A+Unknown%0A'
  );
});
