const {
  themeNamespace,
  themeSupportedLocales,
} = require('./src/utils/defaultOptions');

module.exports = {
  lexers: {
    js: ['JsxLexer'],
  },
  defaultNamespace: themeNamespace,
  locales: themeSupportedLocales,
  output: './src/i18n/translations/$LOCALE.json',
  input: ['src/**/!(Trans)*.js'],
};
