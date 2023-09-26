const hasQueryParams = (urlString) => {
  const url = new URL(urlString);

  return Boolean(url.search);
};

export const appendTrailingSlash = (url) => {
  if (hasQueryParams(url)) {
    return url;
  }

  return url.endsWith('/') ? url : `${url}/`;
};

export const stripTrailingSlash = (url) => {
  if (hasQueryParams(url)) {
    return url;
  }

  return url.endsWith('/') ? url.replace(/\/$/, '') : url;
};
