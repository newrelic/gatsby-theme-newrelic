const composeHandlers =
  (...fns) =>
  (...args) => {
    fns.filter(Boolean).forEach((fn) => fn(...args));
  };

export default composeHandlers;
