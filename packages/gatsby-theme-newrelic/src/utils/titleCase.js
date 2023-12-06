export const titleCaseify = (word) => {
  let capitalizedWord = word.split('');
  capitalizedWord[0] = capitalizedWord[0].toUpperCase();
  capitalizedWord = capitalizedWord.join('');
  return capitalizedWord;
};
