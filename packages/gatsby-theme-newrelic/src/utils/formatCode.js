import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';
import parserGraphQL from 'prettier/parser-graphql';
import parserPostCSS from 'prettier/parser-postcss';
import parserHTML from 'prettier/parser-html';

const PARSERS = {
  graphql: 'graphql',
  css: 'css',
  scss: 'scss',
  sass: 'scss',
  json: 'json',
  html: 'html',
};

const formatCode = (code, { language, ...formatOptions } = {}) =>
  prettier.format(code, {
    trailingComma: 'es5',
    printWidth: 80,
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    plugins: [parserBabel, parserGraphQL, parserPostCSS, parserHTML],
    parser: PARSERS[language] || 'babel',
    ...formatOptions,
  });

export default formatCode;
