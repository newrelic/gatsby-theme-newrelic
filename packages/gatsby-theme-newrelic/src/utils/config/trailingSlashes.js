module.exports = (themeOptions) => ({
  forceTrailingSlashes:
    themeOptions.forceTrailingSlashes == null
      ? false
      : themeOptions.forceTrailingSlashes,
});
