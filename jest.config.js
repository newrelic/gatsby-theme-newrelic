/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.m?[jt]sx?$',
  transform: {
    '^.+\\.m?js$': '<rootDir>/jest-preprocess.mjs',
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache/'],
  globals: {
    __PATH_PREFIX__: '',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(gatsby|gatsby-plugin-mdx|gatsby-link|gatsby-script)/)',
  ],
  setupFiles: ['<rootDir>/loadershim.mjs', 'jest-localstorage-mock'],
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.mjs'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'mjs'],
  moduleNameMapper: {
    '^@reach/router(.*)': '<rootDir>/node_modules/@gatsbyjs/reach-router$1',
  },
};
