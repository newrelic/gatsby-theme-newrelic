const matchesLocale = (path, locale) =>
  new RegExp(`^\\/?${locale}(?=$|\\/)`).test(path);

module.exports = { matchesLocale };
