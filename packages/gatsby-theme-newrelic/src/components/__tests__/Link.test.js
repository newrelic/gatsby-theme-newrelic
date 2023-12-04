import React from 'react';
import Link from '../Link';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils/renderHelpers';
import { useStaticQuery } from 'gatsby';
import { merge } from 'lodash';

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

const useStaticData = (overrides) =>
  useStaticQuery.mockImplementation(() => merge({}, DEFAULT_DATA, overrides));

jest.mock('gatsby', () => ({
  __esModule: true,
  graphql: () => {},
  Link: ({ to, ...props }) => <a href={to} {...props} />,
  useStaticQuery: jest.fn(() => ({
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
  })),
}));

test('transforms absolute links to relative links when it matches the siteUrl', () => {
  renderWithProviders(<Link to="https://example.com/path/to/page">Link</Link>);

  const link = screen.getByText('Link');

  expect(link).toHaveAttribute('href', '/path/to/page');
});

test('transforms absolute links to relative link for home page', () => {
  renderWithProviders(<Link to="https://example.com">Link</Link>);

  const link = screen.getByText('Link');

  expect(link).toHaveAttribute('href', '/');
});

test('links hash links to current page', () => {
  renderWithProviders(<Link to="#example">Link</Link>);

  const link = screen.getByText('Link');

  expect(link).toHaveAttribute('href', '#example');
  expect(link).not.toHaveAttribute('rel');
  expect(link).not.toHaveAttribute('target');
});

test('opens external links in a new tab', () => {
  renderWithProviders(<Link to="https://google.com">Link</Link>);

  const link = screen.getByText('Link');

  expect(link).toHaveAttribute('href', 'https://google.com');
  expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  expect(link).toHaveAttribute('target', '_blank');
});

test('localizes the link when the current locale is not the default', () => {
  useStaticData({
    allLocale: {
      nodes: [
        { locale: 'en', isDefault: true },
        { locale: 'jp', isDefault: false },
      ],
    },
  });

  renderWithProviders(<Link to="/page">Link</Link>, {
    locale: 'jp',
  });

  const link = screen.getByText('Link');

  expect(link).toHaveAttribute('href', '/jp/page');
});

test('renders correct signup link', () => {
  useStaticData({});

  renderWithProviders(<Link to="https://newrelic.com/signup">Link</Link>);

  const link = screen.getByText('Link');

  expect(link).toHaveAttribute('href', 'https://newrelic.com/signup');
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', 'noopener');
});

test('localizes the sign up link', () => {
  useStaticData({
    allLocale: {
      nodes: [
        { locale: 'en', isDefault: true },
        { locale: 'jp', isDefault: false },
      ],
    },
  });

  renderWithProviders(<Link to="https://newrelic.com/signup">Link</Link>, {
    locale: 'jp',
  });

  const link = screen.getByText('Link');

  expect(link).toHaveAttribute('href', 'https://newrelic.com/jp/signup');
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', 'noopener');
});
