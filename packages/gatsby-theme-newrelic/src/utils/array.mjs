export const range = (a, b) => [...Array(b + 1).keys()].slice(a);

export const partition = (arr, predicate) => {
  return arr.reduce(
    ([truthy, falsey], item) => {
      return predicate(item)
        ? [truthy.concat(item), falsey]
        : [truthy, falsey.concat(item)];
    },
    [[], []]
  );
};
