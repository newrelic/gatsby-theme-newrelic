import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';
import parserGraphQL from 'prettier/parser-graphql';
import parserPostCSS from 'prettier/parser-postcss';
import parserHTML from 'prettier/parser-html';

const formatCode = (code, formatOptions = {}) =>
  prettier.format(code, {
    trailingComma: 'es5',
    printWidth: 80,
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    plugins: [parserBabel, parserGraphQL, parserPostCSS, parserHTML],
    parser: 'babel',
    ...formatOptions,
  });

export default formatCode;
