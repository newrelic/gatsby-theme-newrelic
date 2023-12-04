module.exports = {
  transform: {
    '^.+\\.js$': '<rootDir>/jest-preprocess.js',
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache/'],
  globals: {
    __PATH_PREFIX__: '',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(gatsby|gatsby-plugin-mdx|gatsby-link|gatsby-script)/)',
  ],
  setupFiles: ['<rootDir>/loadershim.js', 'jest-localstorage-mock'],
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
  moduleNameMapper: {
    '^@reach/router(.*)': '<rootDir>/node_modules/@gatsbyjs/reach-router$1',
    '^gatsby-page-utils/(.*)$': `gatsby-page-utils/dist/$1`,
  },
};
