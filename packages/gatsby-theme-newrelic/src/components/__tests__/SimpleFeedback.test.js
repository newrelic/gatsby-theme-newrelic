import React from 'react';
import { screen } from '@testing-library/react';
import SimpleFeedback from '../SimpleFeedback';
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

const renderFeedback = (props = {}) => {
  const utils = renderWithTranslation(<SimpleFeedback {...props} />);

  const [yes, no] = screen.getAllByRole('button');

  return { ...utils, yes, no };
};

jest.mock('@reach/router', () => ({
  __esModule: true,
  useLocation: jest.fn(() => ({ pathname: '/foo-bar' })),
}));

describe('SimpleFeedback Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with two feedback buttons', () => {
    renderFeedback();

    expect(screen.getByText('Yes')).toBeInTheDocument();
    expect(screen.getByText('No')).toBeInTheDocument();
  });
});
