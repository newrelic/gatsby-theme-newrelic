import React from 'react';
import { render } from '@testing-library/react';
import SimpleFeedback from '../SimpleFeedback';

// Defining these here AND in the mock due to a limitation with jest
// https://github.com/facebook/jest/issues/2567
const SITE = 'https://github.com/foo/bar';
const REPO = 'https://foobar.net';
const ISSUE_URL = `${REPO}/issues/new`;

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

  it('should render links with custom issue labels', () => {
    const labels = ['food-feedback', 'tuesday'];
    const { getAllByRole } = render(<SimpleFeedback labels={labels} />);
    const [yes] = getAllByRole('button');

    const params = new URLSearchParams();
    params.set('labels', [...labels, 'feedback-positive'].join(','));
    params.set('title', 'Website Feedback');
    const url = `${ISSUE_URL}?${params.toString()}`;

    expect(yes.getAttribute('href')).toBe(url);
  });

  it('should render links with default issue title', () => {
    const { getAllByRole } = render(<SimpleFeedback />);
    const [yes, no] = getAllByRole('button');

    const yesParams = new URLSearchParams();
    yesParams.set('labels', ['feedback', 'feedback-positive'].join(','));
    yesParams.set('title', 'Website Feedback');
    const positiveUrl = `${ISSUE_URL}?${yesParams.toString()}`;

    const noParams = new URLSearchParams();
    noParams.set('labels', ['feedback', 'feedback-negative'].join(','));
    noParams.set('title', 'Website Feedback');
    const negativeUrl = `${ISSUE_URL}?${noParams.toString()}`;

    expect(yes.getAttribute('href')).toBe(positiveUrl);
    expect(no.getAttribute('href')).toBe(negativeUrl);
  });

  it('should render links with the page title in the issue title', () => {
    const title = 'tacos';
    const { getAllByRole } = render(<SimpleFeedback title={title} />);
    const [yes] = getAllByRole('button');

    const params = new URLSearchParams();
    params.set('labels', ['feedback', 'feedback-positive'].join(','));
    params.set('title', `Feedback: ${title}`);
    const url = `${ISSUE_URL}?${params.toString()}`;

    expect(yes.getAttribute('href')).toBe(url);
  });

  it('should render links with page URL in the issue body', () => {
    const title = 'tacos';
    const slug = '/food';
    const { getAllByRole } = render(
      <SimpleFeedback title={title} slug={slug} />
    );
    const [yes] = getAllByRole('button');

    const params = new URLSearchParams();
    params.set('labels', ['feedback', 'feedback-positive'].join(','));
    params.set('title', `Feedback: ${title}`);
    params.set('body', `Page: [${title}](${SITE}${slug})`);
    const url = `${ISSUE_URL}?${params.toString()}`;

    expect(yes.getAttribute('href')).toBe(url);
  });
});
