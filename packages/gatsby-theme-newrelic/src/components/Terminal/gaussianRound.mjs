// https://github.com/jstejada/react-typist/blob/d067d1a0a357ac221ddb83efe4e0d9719a39c672/src/utils.js#L9-L17
/**
 * Generate a random integer that follows a Gaussian distribution
 * within the given `mean` and `std` (standard deviation).
 * Basically, it generates a number along a bell curve.
 * @param mean {number}
 * @param std {number}
 */
const gaussianRound = (mean, std) => {
  const times = 12;
  let sum = 0;

  for (let idx = 0; idx < times; idx++) {
    sum += Math.random();
  }

  sum -= times / 2;
  return Math.round(sum * std) + mean;
};

export default gaussianRound;
