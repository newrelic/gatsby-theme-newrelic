type Transformer = <T>(
  obj: T,
  fn: (key: string) => string
) => { [Key: string]: keyof T };

const transformKeys: Transformer = (obj, fn) =>
  Object.keys(obj).reduce(
    (memo, key) => ({
      ...memo,
      [fn(key)]: key,
    }),
    {}
  );

export default transformKeys;
