import { addLeadingSlash } from './location';

export const localizePath = ({ path, locale }) => {
  if (locale.isDefault) {
    return path;
  }

  if (path === '/') {
    return `/${locale.locale}/`;
  }

  const [, base] = path.split('/');

  return base === locale.localizedPath
    ? path
    : `/${locale.localizedPath}${addLeadingSlash(path)}`;
};

export const localizeExternalLink = ({ link, locale }) => {
  if (locale.isDefault) {
    return link;
  }

  const url = new URL(link);

  url.pathname = localizePath({ path: url.pathname, locale });

  return url.href;
};
