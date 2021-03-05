import React from 'react';
import { screen } from '@testing-library/react';
import SimpleFeedback from '../SimpleFeedback';
import { useLocation } from '@reach/router';
import { renderWithTranslation } from '../../test-utils/renderHelpers';

jest.mock('gatsby', () => ({
  __esModule: true,
  graphql: () => {},
  useStaticQuery: () => ({
    allLocale: {
      nodes: [{ locale: 'en', isDefault: true }],
    },
    site: {
      siteMetadata: {
        siteUrl: 'https://github.com/foo/bar',
        repository: 'https://foobar.net',
      },
    },
    newRelicThemeConfig: {
      tessen: {
        product: 'foo',
        subproduct: 'foobar',
      },
    },
  }),
}));

// Defining these here AND in the mock due to a limitation with jest
// https://github.com/facebook/jest/issues/2567
const REPO = 'https://foobar.net';
const ISSUE_URL = `${REPO}/issues/new`;

const renderFeedback = (props = {}) => {
  const utils = renderWithTranslation(<SimpleFeedback {...props} />);

  const [yes, no] = screen.getAllByRole('button');

  return { ...utils, yes, no };
};

jest.mock('@reach/router', () => ({
  __esModule: true,
  useLocation: jest.fn(() => ({ pathname: '/foo-bar' })),
}));

const resultWithoutBody = (node) => node.getAttribute('href').split('&body')[0];

describe('SimpleFeedback Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with two feedback buttons', () => {
    renderFeedback();

    expect(screen.getByText('Yes')).toBeInTheDocument();
    expect(screen.getByText('No')).toBeInTheDocument();
  });

  it('should render links with custom issue labels', () => {
    const labels = ['food-feedback', 'tuesday'];
    const { yes } = renderFeedback({ labels });

    const params = new URLSearchParams();
    params.set(
      'labels',
      [...labels, 'feedback', 'feedback-positive'].join(',')
    );
    params.set('title', 'Docs feedback');
    const url = `${ISSUE_URL}?${params.toString()}`;

    expect(resultWithoutBody(yes)).toBe(url);
  });

  it('should render links with default issue title', () => {
    const { yes, no } = renderFeedback();

    const yesParams = new URLSearchParams();
    yesParams.set('labels', ['feedback', 'feedback-positive'].join(','));
    yesParams.set('title', 'Docs feedback');
    const positiveUrl = `${ISSUE_URL}?${yesParams.toString()}`;

    const noParams = new URLSearchParams();
    noParams.set('labels', ['feedback', 'feedback-negative'].join(','));
    noParams.set('title', 'Docs feedback');
    const negativeUrl = `${ISSUE_URL}?${noParams.toString()}`;

    expect(resultWithoutBody(yes)).toBe(positiveUrl);
    expect(resultWithoutBody(no)).toBe(negativeUrl);
  });

  it('should render links with the page title in the issue title', () => {
    const title = 'tacos';
    const { yes } = renderFeedback({ pageTitle: title });

    const params = new URLSearchParams();
    params.set('labels', ['feedback', 'feedback-positive'].join(','));
    params.set('title', `Feedback: ${title}`);
    const url = `${ISSUE_URL}?${params.toString()}`;

    expect(resultWithoutBody(yes)).toBe(url);
  });

  it('should render links with page URL in the issue body', () => {
    const pathname = '/test/page';
    useLocation.mockImplementation(() => ({ pathname }));

    const { yes } = renderFeedback();

    expect(yes.getAttribute('href')).toMatch(encodeURIComponent(pathname));
  });
});
