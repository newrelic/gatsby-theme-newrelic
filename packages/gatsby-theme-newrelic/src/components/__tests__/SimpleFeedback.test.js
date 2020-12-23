import React from 'react';
import { render } from '@testing-library/react';
import SimpleFeedback from '../SimpleFeedback';
import { createDescription } from '../../utils/createIssueURL';

// Defining these here AND in the mock due to a limitation with jest
// https://github.com/facebook/jest/issues/2567
const SITE = 'https://github.com/foo/bar';
const REPO = 'https://foobar.net';
const SLUG = '/foo-bar';
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

jest.mock('@reach/router', () => ({
  __esModule: true,
  useLocation: () => ({ pathname: '/foo-bar' }),
}));

const resultWithoutBody = (node) => node.getAttribute('href').split('&body')[0];

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

    expect(resultWithoutBody(yes)).toBe(url);
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

    expect(resultWithoutBody(yes)).toBe(positiveUrl);
    expect(resultWithoutBody(no)).toBe(negativeUrl);
  });

  it('should render links with the page title in the issue title', () => {
    const title = 'tacos';
    const { getAllByRole } = render(<SimpleFeedback title={title} />);
    const [yes] = getAllByRole('button');

    const params = new URLSearchParams();
    params.set('labels', ['feedback', 'feedback-positive'].join(','));
    params.set('title', `Feedback: ${title}`);
    const url = `${ISSUE_URL}?${params.toString()}`;

    expect(resultWithoutBody(yes)).toBe(url);
  });

  it('should render links with page URL in the issue body', () => {
    const title = 'tacos';
    const slug = SLUG;
    const { getAllByRole } = render(
      <SimpleFeedback title={title} slug={slug} />
    );
    const [yes] = getAllByRole('button');

    const params = new URLSearchParams();
    params.set('labels', ['feedback', 'feedback-positive'].join(','));
    params.set('title', `Feedback: ${title}`);

    const body = createDescription({ title, slug, siteUrl: SITE });
    params.set('body', body);

    const url = `${ISSUE_URL}?${params.toString()}`;

    expect(yes.getAttribute('href')).toBe(url);
  });
});
