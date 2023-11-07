/**
 * Take a multiline command and combine it into one line, stripping comments.
 */
const collapseLine = (line) => {
  return line
    .filter((token) => !token.types.includes('comment'))
    .map((token) => token.content)
    .join('');
};

export default collapseLine;
