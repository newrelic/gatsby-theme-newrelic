import React from 'react';
import { render } from '@testing-library/react';
import SimpleFeedback from '../SimpleFeedback';

// Defining these here AND in the mock due to a limitation with jest
// https://github.com/facebook/jest/issues/2567
const SITE = 'https://github.com/foo/bar';
const REPO = 'https://foobar.net';

const ISSUE_URL = `${REPO}/issues/new?`;
const LABELS = `labels=content,feedback`;

jest.mock('gatsby', () => ({
  __esModule: true,
  graphql: () => {},
  useStaticQuery: () => ({
    site: {
      siteMetadata: {
        siteUrl: 'https://github.com/foo/bar',
        repository: 'https://foobar.net',
      },
    },
  }),
}));

describe('SimpleFeedback Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with two feedback buttons', () => {
    const { getByText } = render(<SimpleFeedback />);

    expect(getByText('Yes')).toBeInTheDocument();
    expect(getByText('No')).toBeInTheDocument();
  });

  it('should render links with default issue titles', () => {
    const { getAllByRole } = render(<SimpleFeedback />);
    const [yes, no] = getAllByRole('button');

    const title = 'Website Feedback';
    const positiveUrl = `${ISSUE_URL}${LABELS},feedback-positive&title=${title}`;
    const negativeUrl = `${ISSUE_URL}${LABELS},feedback-negative&title=${title}`;

    expect(yes.getAttribute('href')).toBe(positiveUrl);
    expect(no.getAttribute('href')).toBe(negativeUrl);
  });

  it('should render links with the page title in the issue title', () => {
    const title = 'tacos';
    const { getAllByRole } = render(<SimpleFeedback title={title} />);
    const [yes] = getAllByRole('button');

    const url = `${ISSUE_URL}${LABELS},feedback-positive&title=Feedback:+${title}`;

    expect(yes.getAttribute('href')).toBe(url);
  });

  it('should render alinks with page URL in the issue body', () => {
    const title = 'tacos';
    const slug = '/food';
    const { getAllByRole } = render(
      <SimpleFeedback title={title} slug={slug} />
    );
    const [yes] = getAllByRole('button');

    const url = [
      ISSUE_URL,
      LABELS,
      ',feedback-positive&title=Feedback:+',
      title,
      `&body=Page:%20[${title}](${SITE}${slug})`,
    ].join('');

    expect(yes.getAttribute('href')).toBe(url);
  });
});
