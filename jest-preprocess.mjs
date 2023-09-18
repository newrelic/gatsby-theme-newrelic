import babelJest from 'babel-jest';

export default babelJest.createTransformer({
  presets: ['@babel/preset-react', '@emotion/babel-preset-css-prop'],
});
