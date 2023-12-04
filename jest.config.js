/** @type {import('jest').Config} */

// for Date mocks
process.env.TZ = 'PST';

module.exports = {
  transform: {
    '^.+\\.m?js$': '<rootDir>/jest-preprocess.mjs',
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache/'],
  globals: {
    __PATH_PREFIX__: '',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(gatsby|gatsby-plugin-mdx|gatsby-link|gatsby-script|react-use)/)',
  ],
  setupFiles: ['<rootDir>/loadershim.mjs', 'jest-localstorage-mock'],
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.mjs'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'mjs'],
  moduleNameMapper: {
    '^@reach/router(.*)': '<rootDir>/node_modules/@gatsbyjs/reach-router$1',
    '^gatsby-page-utils/(.*)$': `gatsby-page-utils/dist/$1`,
  },
};
