/* eslint-disable no-unused-vars */
const React = require('react');

const gatsby = jest.requireActual('gatsby');

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement('a', {
        ...rest,
        href: to,
      })
  ),
  useStaticQuery: jest.fn().mockImplementation(() => ({
    newRelicThemeConfig: {
      tessen: {
        tessenVersion: '1.14.0',
        product: 'THEME',
        subproduct: 'TTHEME',
        segmentWriteKey: '123',
        trackPageViews: true,
        pageView: {
          name: 'pageView',
          category: 'ThemePageView',
        },
      },
    },
  })),
};
