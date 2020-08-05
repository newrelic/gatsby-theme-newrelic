function track(fn, handler, before) {
  return function interceptor() {
    if (before) {
      handler.apply(this, arguments);
      return fn.apply(this, arguments);
    } else {
      var result = fn.apply(this, arguments);
      handler.apply(this, arguments);
      return result;
    }
  };
}
export default track;
