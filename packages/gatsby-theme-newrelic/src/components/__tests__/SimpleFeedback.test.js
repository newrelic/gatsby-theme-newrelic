import React from 'react';
import { render, screen } from '@testing-library/react';
import SimpleFeedback from '../SimpleFeedback';
import { createDescription } from '../../utils/createIssueURL';
import { I18nextProvider } from 'react-i18next';
import { themeNamespace } from '../../utils/defaultOptions';
import translations from '../../i18n/translations/en.json';
import i18n from 'i18next';

i18n.init({
  defaultNS: 'translation',
  initImmediate: false,
  fallbackLng: 'en',
  lng: 'en',
  ns: [themeNamespace, 'translation'],
  resources: {
    en: {
      [themeNamespace]: translations,
    },
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

// Defining these here AND in the mock due to a limitation with jest
// https://github.com/facebook/jest/issues/2567
const SITE = 'https://github.com/foo/bar';
const REPO = 'https://foobar.net';
const SLUG = '/foo-bar';
const ISSUE_URL = `${REPO}/issues/new`;

const renderFeedback = (props = {}) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <SimpleFeedback {...props} />
    </I18nextProvider>
  );
};

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
    renderFeedback();

    expect(screen.getByText('Yes')).toBeInTheDocument();
    expect(screen.getByText('No')).toBeInTheDocument();
  });

  it('should render links with custom issue labels', () => {
    const labels = ['food-feedback', 'tuesday'];
    renderFeedback({ labels });
    const [yes] = screen.getAllByRole('button');

    const params = new URLSearchParams();
    params.set('labels', [...labels, 'feedback-positive'].join(','));
    params.set('title', 'Website Feedback');
    const url = `${ISSUE_URL}?${params.toString()}`;

    expect(resultWithoutBody(yes)).toBe(url);
  });

  it('should render links with default issue title', () => {
    renderFeedback();
    const [yes, no] = screen.getAllByRole('button');

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
    renderFeedback({ pageTitle: title });
    const [yes] = screen.getAllByRole('button');

    const params = new URLSearchParams();
    params.set('labels', ['feedback', 'feedback-positive'].join(','));
    params.set('title', `Feedback: ${title}`);
    const url = `${ISSUE_URL}?${params.toString()}`;

    expect(resultWithoutBody(yes)).toBe(url);
  });

  it('should render links with page URL in the issue body', () => {
    const title = 'tacos';
    const slug = SLUG;
    renderFeedback({ pageTitle: title, slug });
    const [yes] = screen.getAllByRole('button');

    const params = new URLSearchParams();
    params.set('labels', ['feedback', 'feedback-positive'].join(','));
    params.set('title', `Feedback: ${title}`);

    const body = createDescription({ title, slug, siteUrl: SITE });
    params.set('body', body);

    const url = `${ISSUE_URL}?${params.toString()}`;

    expect(yes.getAttribute('href')).toBe(url);
  });
});
