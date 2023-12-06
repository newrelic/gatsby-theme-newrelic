const convertToCamelCase = (str) => {
  const titleCase = convertToTitleCase(str);
  return titleCase.replace(titleCase[0], titleCase[0].toLowerCase());
};

const convertToTitleCase = (str) => {
  if ([' ', '-', '_'].some((char) => str.includes(char))) {
    return str
      .toLowerCase()
      .trim()
      .split(/[ -_]/g)
      .map((word) => word.replace(word[0], word[0].toUpperCase()))
      .join('');
  }
  return str
    .trim()
    .split(/(?=[A-Z])/)
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join('');
};

module.exports = { convertToCamelCase, convertToTitleCase };
