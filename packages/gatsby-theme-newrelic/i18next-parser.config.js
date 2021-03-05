const { getI18nConfig } = require('./src/utils/config');

const { themeNamespace, themeSupportedLocales } = getI18nConfig({});

module.exports = {
  lexers: {
    js: ['JsxLexer'],
  },
  defaultNamespace: themeNamespace,
  locales: themeSupportedLocales,
  output: './src/i18n/translations/$LOCALE.json',
  input: ['src/**/!(Trans)*.js'],
};
