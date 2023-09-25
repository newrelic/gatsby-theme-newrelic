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

jest.unstable_mockModule('gatsby', () => ({
  __esModule: true,
  graphql: () => {},
  Link: ({ to, ...props }) => <a href={to} {...props} />,
  useStaticQuery: () => ({
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
    },
    newRelicThemeConfig: {
      tessen: {
        product: 'foo',
        subproduct: 'foobar',
      },
    },
  }),
}));
