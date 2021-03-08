export const stripTrailingSlash = (path) => path.replace(/\/$/, '');

export const addLeadingSlash = (path) =>
  path.startsWith('/') ? path : `/${path}`;

export const addTrailingSlash = (path) => {
  // we don't care about the origin in this case. We just want to manipulate the path
  const dummyOrigin = 'https://example.com';
  const url = new URL(path, dummyOrigin);

  if (!url.pathname.endsWith('/') && !url.pathname.match(/\.[a-zA-Z]+$/)) {
    url.pathname = `${url.pathname}/`;
  }

  return url.href.replace(url.origin, '');
};
