import React from 'react';
import Link from '../Link';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils/renderHelpers';

jest.mock('gatsby', () => ({
  __esModule: true,
  graphql: () => {},
  Link: ({ to, ...props }) => <a href={to} {...props} />,
  useStaticQuery: () => ({
    allLocale: {
      nodes: [{ locale: 'en', isDefault: true }],
    },
    site: {
      siteMetadata: {
        siteUrl: 'https://example.com',
      },
    },
  }),
}));

test('transforms absolute links to relative links when it matches the siteUrl', () => {
  renderWithProviders(<Link to="https://example.com/path/to/page">Link</Link>);

  const link = screen.getByText('Link');

  expect(link).toHaveAttribute('href', '/path/to/page');
});
