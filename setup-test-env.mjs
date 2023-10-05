/* global expect */
import { createSerializer, matchers } from '@emotion/jest';
import * as emotion from '@emotion/react';
import '@testing-library/jest-dom';

expect.extend(matchers);
expect.addSnapshotSerializer(createSerializer(emotion));

global.ResizeObserver = class ResizeObserver {
  observe = jest.fn();
  disconnect = jest.fn();
};

// this mock runs after the test environment is set up,
// but before any tests run.
// any mocks need to be here, because if they're in a test file,
// the mocks aren't properly hoisted (because of ESM) and
// the module won't actually be mocked.
jest.unstable_mockModule('gatsby', () => ({
  __esModule: true,
  graphql: jest.fn(),
  Link: jest.fn(({ to, ...props }) => <a href={to} {...props} />),
  useStaticQuery: jest.fn(() => ({
    allLocale: {
      nodes: [
        {
          name: 'English',
          locale: 'en',
          localizedPath: '/en',
          isDefault: true,
        },
      ],
    },
    site: {
      siteMetadata: {
        siteUrl: 'https://github.com/foo/bar',
        repository: 'https://foobar.net',
      },
      layout: { mobileBreakpoint: '500px' },
    },
    newRelicThemeConfig: {
      tessen: {
        product: 'foo',
        subproduct: 'foobar',
      },
    },
  })),
}));
