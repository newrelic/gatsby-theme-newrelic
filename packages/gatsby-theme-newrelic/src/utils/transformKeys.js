const transformKeys = (obj, fn) =>
  Object.keys(obj).reduce(
    (memo, key) => ({
      ...memo,
      [fn(key)]: key,
    }),
    {}
  );

export default transformKeys;
