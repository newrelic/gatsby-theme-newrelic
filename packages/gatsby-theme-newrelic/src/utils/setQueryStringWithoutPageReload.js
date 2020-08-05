const setQueryStringWithoutPageReload = (qsValue) => {
  const newurl =
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname +
    qsValue;

  window.history.pushState({ path: newurl }, '', newurl);
};

export default setQueryStringWithoutPageReload;
