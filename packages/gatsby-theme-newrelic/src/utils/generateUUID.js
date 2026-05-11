const generateUUID = () => {
  if (
    typeof crypto !== 'undefined' &&
    typeof crypto.randomUUID === 'function'
  ) {
    return crypto.randomUUID();
  }
  if (
    typeof crypto !== 'undefined' &&
    typeof crypto.getRandomValues === 'function'
  ) {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => {
      const v = crypto.getRandomValues(new Uint8Array(1))[0];
      return (c ^ (v & (15 >> (c / 4)))).toString(16);
    });
  }
  throw new Error('Web Crypto API is not available in this environment');
};

export default generateUUID;
