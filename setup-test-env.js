/* global expect */
import { createSerializer, matchers } from 'jest-emotion';
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
      layout: { mobileBreakpoint: '500px' },
    },
    newRelicThemeConfig: {
      tessen: {
        product: 'foo',
        subproduct: 'foobar',
      },
    },
  }),
}));

// mock userAgent
Object.defineProperty(
  window.navigator,
  'userAgent',
  ((value) => ({
    get() {
      value =
        'Mozilla/5.0 (darwin) AppleWebKit/555.56 (KHTML, like Gecko) jsdom/20.0.3';
      return value;
    },

    set(v) {
      value = v;
    },
  }))(window.navigator.userAgent)
);
