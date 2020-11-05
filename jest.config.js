module.exports = {
  transform: {
    '^.+\\.js$': '<rootDir>/jest-preprocess.js',
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache/'],
  globals: {
    __PATH_PREFIX__: '',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(gatsby||@elastic/react-search-ui-views||gatsby-plugin-mdx)/)',
  ],
  setupFiles: ['<rootDir>/loadershim.js', 'jest-localstorage-mock'],
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
};
