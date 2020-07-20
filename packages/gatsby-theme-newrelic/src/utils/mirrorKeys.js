const mirrorKeys = (obj) =>
  Object.keys(obj).reduce(
    (memo, key) => ({
      ...memo,
      [key]: key,
    }),
    {}
  );

export default mirrorKeys;
