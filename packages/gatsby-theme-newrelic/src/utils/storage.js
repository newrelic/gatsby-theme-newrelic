const storage = {
  get(key, defaultValue) {
    const value = global.localStorage?.getItem(key);

    return value == null ? defaultValue : JSON.parse(value);
  },
  set(key, value) {
    // eslint-disable-next-line no-unused-expressions
    global.localStorage?.setItem(key, JSON.stringify(value));
  },
};

export default storage;
