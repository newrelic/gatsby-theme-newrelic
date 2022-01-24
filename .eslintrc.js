module.exports = {
  // https://github.com/newrelic/eslint-plugin-newrelic
  extends: [
    'plugin:@newrelic/eslint-plugin-newrelic/react',
    'plugin:@newrelic/eslint-plugin-newrelic/prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  // https://github.com/yannickcr/eslint-plugin-react#configuration
  plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname, // tsconfig.json lies outside of the package
    project: 'tsconfig.json',
  },
  globals: {
    jest: 'readonly',
  },
  env: {
    browser: true,
    es6: true,
  },
  ignorePatterns: [
    '**/__tests__/**/*',
    '**/__mocks__/**/*',
    '**/demo/**/*',
    '.eslintrc.js',
    'node_modules',
  ],
  rules: {
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: false,
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-function-return-type': 1,
    '@typescript-eslint/no-unsafe-argument': 1,
    '@typescript-eslint/explicit-module-boundary-types': 1,
    '@typescript-eslint/no-explicit-any': 1,
  },
};
