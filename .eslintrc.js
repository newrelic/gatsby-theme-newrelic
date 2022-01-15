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
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  globals: {
    jest: 'readonly',
  },
  env: {
    browser: true,
    es6: true,
  },
  ignorePatterns: ['**/__tests__/**/*'],
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
  },
};
