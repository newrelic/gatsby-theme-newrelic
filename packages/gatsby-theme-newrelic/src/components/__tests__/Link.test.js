import React from 'react';
import Link from '../Link';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils/renderHelpers';
import { useStaticQuery } from 'gatsby';
import { merge } from 'lodash';

const DEFAULT_DATA = {
  newRelicThemeConfig: {
    forceTrailingSlashes: false,
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
  expect(link).toHaveAttribute('rel', 'noopener noreferrer');
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
  expect(link).toHaveAttribute('rel', 'noopener noreferrer');
});

describe('when forceTrailingSlashes is enabled', () => {
  test('appends trailing slash to relative links', () => {
    useStaticData({
      newRelicThemeConfig: {
        forceTrailingSlashes: true,
      },
    });

    renderWithProviders(<Link to="/apps/one">Link</Link>);

    const link = screen.getByText('Link');

    expect(link).toHaveAttribute('href', '/apps/one/');
  });

  test('appends trailing slash to localized links', () => {
    useStaticData({
      allLocale: {
        nodes: [
          { locale: 'en', isDefault: true },
          { locale: 'jp', isDefault: false },
        ],
      },
      newRelicThemeConfig: {
        forceTrailingSlashes: true,
      },
    });

    renderWithProviders(<Link to="/apps/one">Link</Link>, { locale: 'jp' });

    const link = screen.getByText('Link');

    expect(link).toHaveAttribute('href', '/jp/apps/one/');
  });

  test('handles links with anchor references', () => {
    useStaticData({
      newRelicThemeConfig: {
        forceTrailingSlashes: true,
      },
    });

    renderWithProviders(<Link to="/other/page#example">Link</Link>);

    const link = screen.getByText('Link');

    expect(link).toHaveAttribute('href', '/other/page/#example');
  });

  test('handles absolute links to current site', () => {
    useStaticData({
      newRelicThemeConfig: {
        forceTrailingSlashes: true,
      },
    });

    renderWithProviders(<Link to="https://example.com/other/page">Link</Link>);

    const link = screen.getByText('Link');

    expect(link).toHaveAttribute('href', '/other/page/');
  });

  test('handles query params', () => {
    useStaticData({
      newRelicThemeConfig: {
        forceTrailingSlashes: true,
      },
    });

    renderWithProviders(<Link to="/page?filter=test">Link</Link>);

    const link = screen.getByText('Link');

    expect(link).toHaveAttribute('href', '/page/?filter=test');
  });

  test('does not apply trailing slash to external links', () => {
    useStaticData({
      newRelicThemeConfig: {
        forceTrailingSlashes: true,
      },
    });

    renderWithProviders(<Link to="https://google.com">Link</Link>);

    const link = screen.getByText('Link');

    expect(link).toHaveAttribute('href', 'https://google.com');
  });

  test('does not apply trailing slash to hash links on same page', () => {
    useStaticData({
      newRelicThemeConfig: {
        forceTrailingSlashes: true,
      },
    });

    renderWithProviders(<Link to="#example">Link</Link>);

    const link = screen.getByText('Link');

    expect(link).toHaveAttribute('href', '#example');
  });

  test('does not append trailing slash to links that already have trailing slash', () => {
    useStaticData({
      newRelicThemeConfig: {
        forceTrailingSlashes: true,
      },
    });

    renderWithProviders(<Link to="/test/path/">Link 1</Link>);
    renderWithProviders(<Link to="/test/path/#example">Link 2</Link>);
    renderWithProviders(<Link to="/test/path/?test=true">Link 3</Link>);

    const link1 = screen.getByText('Link 1');
    const link2 = screen.getByText('Link 2');
    const link3 = screen.getByText('Link 3');

    expect(link1).toHaveAttribute('href', '/test/path/');
    expect(link2).toHaveAttribute('href', '/test/path/#example');
    expect(link3).toHaveAttribute('href', '/test/path/?test=true');
  });

  test('does not append trailing slash to links with extension', () => {
    useStaticData({
      newRelicThemeConfig: {
        forceTrailingSlashes: true,
      },
    });

    renderWithProviders(<Link to="/test/path.xml">XML</Link>);
    renderWithProviders(<Link to="/test/path.json">JSON</Link>);

    const xmlLink = screen.getByText('XML');
    const jsonLink = screen.getByText('JSON');

    expect(xmlLink).toHaveAttribute('href', '/test/path.xml');
    expect(jsonLink).toHaveAttribute('href', '/test/path.json');
  });
});
